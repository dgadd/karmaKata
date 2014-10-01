var Calculator = {
    create: function () {
        return Object.create(Calculator).init();
    },
    init: function () {
        return this;
    },
    add: function(numbersToAdd) {
        if(numbersToAdd.indexOf(",") > -1) {
            var numbersArray = numbersToAdd.split(",");
            return parseInt(numbersArray[0]) + parseInt(numbersArray[1]);
        }
        else if(numbersToAdd.length > 0)
            return parseInt(numbersToAdd);
        return 0;
    }
};