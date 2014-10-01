var Calculator = {
    create: function () {
        return Object.create(Calculator).init();
    },
    init: function () {
        return this;
    },
    add: function(numbersToAdd) {
        return 0;
    }
};