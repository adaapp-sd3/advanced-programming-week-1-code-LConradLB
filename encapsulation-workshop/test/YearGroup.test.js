const chai = require('chai')
const expect = chai.expect;

const YearGroup = require('../classes/YearGroup.js');

describe('YearGroup', () => {
    it('should allow an object to be instantiated from the class', () => {
        let myYearGroup = new YearGroup(null, null)
        expect(myYearGroup).to.be.an.instanceOf(YearGroup);
    })

    it('should have an integer to store the year number', () => {
        let myYearGroup = new YearGroup(1952,"HOY")
        expect(myYearGroup.year).to.be.a('number');
        expect(myYearGroup.getYear()).to.equal(1952);
    })

    it('should hold a string that is head of year initals', () => {
        let myYearGroup = new YearGroup(1952,"HOY")
        expect(myYearGroup.headOfYearInitials).to.be.a('String');
        expect(myYearGroup.getHeadOfYear()).to.equal('HOY');
    })
})