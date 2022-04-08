"use srtict";

let money, time;

function start() {
  money = +prompt("What is your monthly budget?", "");
  time = prompt("Enter data in YYYY-MM-DD format", "");

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("What is your monthly budget?", "");
  }
}
start();

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Enter a mandatory expense item for this month", ""),
        b = prompt("How much will it cost?", "");
      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        typeof a != "" &&
        typeof b != "" &&
        a.length < 50
      ) {
        console.log("done");
        appData.expenses[a] = b;
      } else {
        i = i - 1;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Budget in one day consist: " + appData.moneyPerDay + "us dollar.");
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("The minimum level of wealth");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("The medium level of wealth");
    } else if (appData.moneyPerDay > 2000) {
      console.log("The high level of wealth");
    } else {
      console.log("An error has occurred");
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let questionOptExpenses = prompt("Статья необязательных расходов?");
      appData.optionalExpenses[i] = questionOptExpenses;
      console.log(appData.optionalExpenses);
    }
  },
  chooseIncome: function () {
    let items = prompt(
      "Что принесет дополнительный доход? (Перечислите через запятую)",
      ""
    );

    if (typeof items != "string" || items == "" || typeof items == null) {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
      appData.income = items.split(", ");
      appData.income.push(prompt("Может что-то еще?"));
      appData.income.sort();
    }

    appData.income.forEach(function (itemmassive, i) {
      alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
    });
  },
};

for (let key in appData) {
  console.log(
    "Наша программа включает в себя данные: " + key + " - " + appData[key]
  );
}
