const expect = require('chai').expect
const names = require('../lib/index')

describe('Names', () => {

    describe('all', () => {
        it('should be an array of strings', () => {

            const everyElementIsAString = (array) => {
                return array.every((element) => {
                    return typeof element === 'string'
                })
            }

            expect(names.all).to.satisfy(everyElementIsAString)

        })

        it('should include `Anthony`', () => {
            expect(names.all).to.include('Anthony')
        })
    })

    describe('random', () => {
        const randomName = names.random()

        it('should return a random element from names', () => {
            expect(names.all).to.include(randomName)
        })

        it('should return a string', () => {
            expect(randomName).to.be.a('string')
        })

    })

})
