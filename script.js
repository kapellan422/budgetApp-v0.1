'use strict';

let money, time;
function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    while(isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
        
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50){
                    console.log("done");
                    appData.expenses[a] = b;
            }   else {
                console.log("Bad result");
                i--;
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert(appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {    
            console.log ("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процентр?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
        }
    },
    chooseOptExpenses() {
        for (let i=1; i < 3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function() {
        let items = "";
        console.log("0"+items);
        while(true){           
            items = prompt("Что принесет дополнительный доход?(Перечислите через запятую)", "");
            console.log("1"+items);
                if(items != null){
                    if(items != "") {
                        appData.income = items.split(', ');
                        console.log("2"+items);
                        break;
                    }
                    else {
                        alert("Пожалуйста, не оставляйте поле пустым");
                        console.log("3"+items);
                    }     
                }
                else {
                    alert("Пожалуйста, ответьте на вопрос");
                    console.log("4"+items);
                }
            
        }
    },
    displayArray: function(arr) {
        console.log("Способы доп заработка: ");
        arr.forEach(element => console.log(element));
    },
    displayObject: function(obj) {
        console.log("Наша программа включается в себя данные: ");
        for (let key in obj) {
            console.log("key " + key + " value " + obj[key]);
        }
    },
};

appData.chooseIncome();
console.log(appData.income);
appData.displayObject(appData);



