import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import * as yup from 'yup';
import { AppError } from '../errors/AppError';

class UserController {

  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    const schema = yup.object().shape({
      name: yup.string().required("Name is required!!"),
      email: yup.string().email().required(),
    });

    // Schema Validation
    // First way
    // if (!(await schema.isValid(request.body))) {
    //   return response.status(400).json({ error: "Validation failed!"})
    // }
    // Second way
    try {
      await schema.validate(request.body, { abortEarly: false });
    } catch(err) {   
      throw new AppError(err);
    }

    const userRepository = getCustomRepository(UsersRepository);

    const userAlereadyExists = await userRepository.findOne({ email });

    if (userAlereadyExists) {
      throw new AppError("User already exists!");
    }

    const user = userRepository.create({
      name, email
    });

    await userRepository.save(user);

    return response.status(201).json(user);
  }

}

export { UserController };
