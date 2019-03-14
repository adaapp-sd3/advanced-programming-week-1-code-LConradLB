const chai = require('chai')
const expect = chai.expect;

const Field = require('../models/Field.js');

describe('Field', () => {
    it('Field creates correct crop based on name', () => {
        let newField = new Field('Wheat field', 10, 25, 75, 350, 175)
        newField.plant(2,2)
        expect(newField.crops[0]).to.be.an.instanceOf(Wheat);
    })
})

