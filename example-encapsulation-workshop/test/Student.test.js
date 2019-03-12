const chai = require('chai')
const expect = chai.expect;

const Student = require('../classes/Student.js');

describe('Student', () => {
    it('Student is part of the correct class', () => {
        let newStudent = new Student("testName", "12C")
        expect(newStudent).to.be.an.instanceOf(Student);
    })

    it('Student getName function return the correct items', () => {
        let newStudent = new Student("testName", "12C")
        expect(newStudent.getName()).to.be.equal("testName");
    })

    it('Student getYearGroup function return the correct item', () => {
        let newStudent = new Student("testName", "121314C")
        expect(newStudent.getYearGroup()).to.be.equal(121314);
    })

    it('Student getForm function return the correct item', () => {
        let newStudent = new Student("testName", "7CANTERBURY")
        expect(newStudent.getForm()).to.be.equal("CANTERBURY");
    })
})