//  Test logic, handlers,server


const logic = require('./logic')

const optionsWithI = ["Iceland",
"India",
"Indonesia",
"Iran (Islamic Republic of)",
"Iraq"];

describe('is jest working', function () {
    it('should be working ', function () {
        expect(1 + 1).toBe(2);
    });
});

describe('Create options lists', function () {
    it('should return the first 5 options that starts with I', function () {
        const result = logic('i');
        expect(result).toEqual(optionsWithI);
    });
} );  