const expect = require('chai').expect
const babyNames = require('../lib/index')

describe('baby names', () => {

    describe('all', () => {
        it('should be an array of strings', () => {

            const everyElementIsAString = (array) => {
                return array.every((element) => {
                    return typeof element === 'string'
                })
            }

            expect(babyNames.all).to.satisfy(everyElementIsAString)

        })

        it('should include `Anthony`', () => {
            expect(babyNames.all).to.include('Anthony')
        })
    })

    describe('random', () => {
        const randomName = babyNames.random()

        it('should return a random element from babyNames', () => {
            expect(babyNames.all).to.include(randomName)
        })

        it('should return a string', () => {
            expect(randomName).to.be.a('string')
        })

    })

})
