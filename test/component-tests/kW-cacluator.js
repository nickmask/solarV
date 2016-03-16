import { should, expect } from 'chai'
import kWGenerator from '../../src/components/kWGenerator'


//Solar Calculator Test
describe('kWGenerator', () => {
  it('should calculate energy output', () => {
    var kwUsagePerDay = 34.1952980097
    var sunlightHours = 5.59
    var kwPerSqMeter = 0.200
    var requiredSizeinstall = kWGenerator(kwUsagePerDay, sunlightHours, kwPerSqMeter)
    expect(requiredSizeinstall).to.equal(3.19)
  })
})
