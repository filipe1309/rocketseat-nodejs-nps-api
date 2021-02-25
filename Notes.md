yarn init -y

yarn add express

// To fix express typing
yarn add @types/express -D

yarn add typescript -D

yarn tsc --init

// To convert ts to js
yarn add ts-node-dev -D
// then add script in package.json

yarn dev

https://insomnia.rest/

https://typeorm.io/#/

yarn add typeorm reflect-metadata sqlite3

yarn typeorm
yarn typeorm migration:create -n CreateUsers

Users

- ID (PK) UUID
- name string
- email string
- created_at date

Surveys

- ID (PK) UUID
- title string
- description string
- created_at date

Surveys_users

- ID (PK) UUID
- user_id (FK) UUID
- survey_id (FK) UUID
- value number
- created_at date

yarn typeorm migration:run
VSCode SQLite Explorer
Beekeeper https://www.beekeeperstudio.io/
yarn typeorm migration:revert

yarn add uuid
yarn add @types/uuid -D

vscode alt+shift+o = organize imports

yarn typeorm migration:create -n CreateSurveys
yarn typeorm migration:run

Tests

- Unit tests (backend)
- Integration test (backend)
  -> request -> routes -> controller -> repository
  <- repository <-controller <- response
- End-to-end (E2E) (frontend)

https://jestjs.io/
yarn add jest @types/jest -D
yarn jest --init
yarn add ts-jest -D
yarn test

Test example

```js
describe("First", () => {
  it("should be possible to sum 2 numbers", () => {
    expect(2 + 2).toBe(4);
  });

  it("should be possible to sum 2 numbers", () => {
    expect(2 + 2).not.toBe(5);
  });
});
```

To test the API (HTTP assertions), and integration tests
https://www.npmjs.com/package/supertest
yarn add supertest @types/supertest -D
