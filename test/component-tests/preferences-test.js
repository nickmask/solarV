import { expect } from 'chai'
import { kwPerSqMeter, elecBillNoDollar, kwUsagePerDay, kwPerDayPerSquareMeter} from '../../src/components/preferences'

describe('Preferences', () => {
  it('should calculate kW per square meter', () => {
    const baseKwPerSqMeter = 1
    const efficency = .2
    const kwMeter = kwPerSqMeter(baseKwPerSqMeter, efficency)
    expect(kwMeter).to.equal(.20)
  })
})
describe('Preferences', () => {
  it('should remove $ sign from elec bill', () => {
    const elecBill = '$300'
    const noDollar = elecBillNoDollar(elecBill)
    expect(noDollar).to.equal(300)
  })
})
describe('Preferences', () => {
  it('should calculate kW usage per day based on elect bill', () => {
    const elecBillnoSign = 300
    const pricePerKW = 0.28859
    const kwDay = kwUsagePerDay(elecBillnoSign, pricePerKW)
    expect(kwDay).to.equal(34.1952980097)
  })
})
describe('Preferences', () => {
  it('should calculate kW per day per square meter requirements', () => {
    const sunlightHours = 5.59
    const kwSquareMeter = .20
    const kwDayPerMeter = kwPerDayPerSquareMeter(sunlightHours, kwSquareMeter)
    expect(kwDayPerMeter).to.equal(1.118)
  })
})
