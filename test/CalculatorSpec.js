describe('String Calculator', function () {
    describe('add method', function () {
        it('should return 0 for a 0-length string input', function () {
            var sut = Calculator.create();
            var result = sut.add("");
            expect(result).toEqual(0);
        });
    });
});