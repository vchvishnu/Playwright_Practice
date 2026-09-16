import test from "@playwright/test"
exports.customtest=test.extend({

logindata:{    //custom fixture

    username:"standard_user",
    password:"secret_sauce",
}

})