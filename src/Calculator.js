var Calculator = {
    create: function () {
        return Object.create(Calculator).init();
    },
    init: function () {
        return this;
    },
    add: function(numbersToAdd) {
        if(numbersToAdd.length > 0)
            return parseInt(numbersToAdd);
        return 0;
    }
};