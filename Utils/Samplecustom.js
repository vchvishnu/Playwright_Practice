import { test } from "@playwright/test";

exports.mytest = test.extend({
  userDetail: async ({}, use) => {
    await use([
      {
        username: "standard_user",
        password: "secret_sauce",
      },
      {
        username: "problem_user",
        password: "secret_sauce",
      },
    ]);
  },
});