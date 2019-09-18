const domain = require('../../classDomain');
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function scheduleClass(date) {
    if (date === "Friday") {
        return "class scheduled";
    } else if (date == "Sunday") {
        return "cannot Schedule on weekends";
    } else {
        return "not a valid day";
    }
}

function confirmClass(date) {
    if (date === "Friday") {
        return "class confirmed";
    } else if (date == "Sunday") {
        return "cannot take classes on weekends";
    } else {
        return "not a valid day";
    }
}


Given('the day {string}', function (string) {
    this.day = string;
  });

  When('the teacher tries to schedule', function () {
    this.response = scheduleClass(this.day)
  });

  When('the student tries to confirm', function () {
    this.response = confirmClass(this.day)
  });

  Then('the app should respond {string}', function (string) {
    assert.equal(this.response, string);
  });
