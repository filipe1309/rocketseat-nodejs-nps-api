# 🚀 Rocktseat NodeJS NPS API

This app was developed during NLW 4.0 (Next Level Week), and aims to simulate an NPS (Net Promoter Score) API using NodeJS.

## 💻 Technologies

- [NodeJS](https://nodejs.org/) _(v14.14.0)_
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nodemailer](https://nodemailer.com/) _(Email sending)_
- [Ethereal](https://ethereal.email/) _(Fake SMTP service)_
- [TypeORM](https://typeorm.io/#/)
- [Handlebarsjs](https://handlebarsjs.com/) _(Email template)_
- [Yup](https://github.com/jquense/yup) _(Schema validation)_
- [Jest](https://jestjs.io/)
- [Supertest](https://www.npmjs.com/package/supertest)

## 🧰 Architecture

### Database

![alt](diagram.png)

## 💿 Installation

```sh
# Install dependencies
yarn

# Run migrations to create SQLite database
yarn typeorm migration:run
```

## 🏃 Running

```sh
yarn dev
```

## ✅ Tests

```sh
yarn test
```
