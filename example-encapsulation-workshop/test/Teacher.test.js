const chai = require('chai')
const expect = chai.expect;

const Teacher = require('../classes/Teacher.js');

describe('Teacher', () => {
    it('Teacher is part of the correct class', () => {
        let newTeacher = new Teacher("testName", "IN", "Physics")
        expect(newTeacher).to.be.an.instanceOf(Teacher);
    })

    it('Student getName function return the correct items', () => {
        let newTeacher = new Teacher("testName", "IN", "Physics")
        expect(newTeacher.getName()).to.be.equal("testName");
    })

    it('Student getInitials function return the correct item', () => {
        let newTeacher = new Teacher("testName", "IN", "Physics")
        expect(newTeacher.getInitials()).to.be.equal("IN");
    })

    it('Student getSubject function return the correct item', () => {
        let newTeacher = new Teacher("testName", "IN", "Physics")
        expect(newTeacher.getSubject()).to.be.equal("Physics");
    })

    it('Student getYearsService function return the correct item', () => {
        let newTeacher = new Teacher("testName", "IN", "Physics")
        expect(newTeacher.getYearsService()).to.be.equal(0);
    })

    it('Student getYearsService function return the correct item', () => {
        let newTeacher = new Teacher("testName", "IN", "Physics")
        newTeacher.setYearsService(2);
        expect(newTeacher.getYearsService()).to.be.equal(2);
    })
})