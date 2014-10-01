var Calculator = {
    create: function () {
        return Object.create(Calculator).init();
    },
    init: function () {
        return this;
    },
    add: function(numbersToAdd) {
        if(numbersToAdd.indexOf(",") > -1)
            return this.splitAndSum(numbersToAdd);
        else if(numbersToAdd.length > 0)
            return parseInt(numbersToAdd);
        return 0;
    },
    splitAndSum: function(numbersToAdd) {
        var numbersArray = numbersToAdd.split(",");
        var total = 0;
        for (var i in numbersArray) {
            total += parseInt(numbersArray[i]);
        }
        return total;
    }
};