import { should } from 'chai'
import kWGenerator from '../../src/components/kWGenerator.js'

//Solar Calculator Test
describe('kWGenerator', () => {
  it('should calculate energy output', () => {
    var energyBill = '$300'
    var sunlightHours = 5.59
    var pricePerKW = 0.28859
    var kwPerSqMeter = 0.200
    kWGenerator(sunlightHours, pricePerKW, kwPerSqMeter).should.equal(1)
  })
})
