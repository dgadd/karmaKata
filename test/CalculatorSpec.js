describe('String Calculator', function () {
    describe('add method', function () {
        it('should return 0 for a 0-length string input', function () {
            var sut = Calculator.create();
            var result = sut.add("");
            expect(result).toEqual(0);
        });

        it('should return numeric equivalent for a 1-length string input', function () {
            var sut = Calculator.create();
            var result = sut.add("3");
            expect(result).toEqual(3);
        });


        it('should return sum for a 2-length comma-separated string input', function () {
            var sut = Calculator.create();
            var result = sut.add("3,5");
            expect(result).toEqual(8);
        });
    });
});