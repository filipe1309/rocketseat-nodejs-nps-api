import { Request, Response } from 'express';
import { getCustomRepository, IsNull, Not } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

/**
 * NPS
 * 1 2 3 4 5 6 7 8 9 10
 * Promoters respond with a score of 9 or 10
 * Passives respond with a score of 7 or 8
 * Detractors respond with a score of 0 to 6
 * 
 * NPS is not expressed as a percentage but as an absolute number lying between -100 and +100.
 * If you have 25% Promoters, 55% Passives and 20% Detractors, the NPS will be +5. A positive NPS (>0) is generally considered as good.
 * 
 * Calculation:
 * (num_promoters - num_detractors) / (total_anwsers) * 100
 * OR
 * %promoters - %detrators
 */
class NpsController {

  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

    const surveysUsers = await surveysUsersRepository.find({
      survey_id,
      value: Not(IsNull())
    });

    const detractors = surveysUsers.filter(survey => survey.value >= 0 && survey.value <= 6).length;
    const promoters = surveysUsers.filter(survey => survey.value >= 9 && survey.value <= 10).length;
    const passives = surveysUsers.filter(survey => survey.value >= 7 && survey.value <= 8).length;

    const totalAnwsers = surveysUsers.length;

    const calculate = Number(((promoters - detractors) / totalAnwsers * 100).toFixed(2));

    return response.json({
      detractors,
      promoters,
      passives,
      totalAnwsers,
      nps: calculate
    });
  }

}

export { NpsController };
