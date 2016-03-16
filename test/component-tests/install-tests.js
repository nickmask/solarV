import { expect } from 'chai'
import { kwPerSqMeter, elecBillNoDollar, kwUsagePerDay, kwPerDayPerSquareMeter, installSize, requiredSizeinstall} from '../../src/components/install-size'

describe('Install-size', () => {
  it('should calculate kW per square meter', () => {
    const baseKwPerSqMeter = 1
    const efficency = .2
    const kwMeter = kwPerSqMeter(baseKwPerSqMeter, efficency)
    expect(kwMeter).to.equal(.20)
  })
})
describe('Install-size', () => {
  it('should remove $ sign from elec bill', () => {
    const elecBill = '$300'
    const noDollar = elecBillNoDollar(elecBill)
    expect(noDollar).to.equal('300')
  })
})
describe('Install-size', () => {
  it('should calculate kW usage per day based on elect bill', () => {
    const elecBillnoSign = 300
    const pricePerKW = 0.28859
    const kwDay = kwUsagePerDay(elecBillnoSign, pricePerKW)
    expect(kwDay).to.equal(34.2)
  })
})
describe('Install-size', () => {
  it('should calculate kW per day per square meter requirements', () => {
    const sunlightHours = 5.59
    const kwSquareMeter = .20
    const kwDayPerMeter = kwPerDayPerSquareMeter(sunlightHours, kwSquareMeter)
    expect(kwDayPerMeter).to.equal(1.118)
  })
})
describe('Install-size', () => {
  it('should calculate the amount of kW required to power your house', () => {
    const kwUsagePerDay = 34.2
    const sunlightHours = 5.59
    const install = installSize(kwUsagePerDay, sunlightHours)
    expect(install).to.equal(6.12)
  })
})
describe('Install-size', () => {
  it('should calculate the total size of panels required to power your house', () => {
    const kwUsagePerDay = 34.2
    const kwPerDayPerSquareMeter = 1.118
    const size = requiredSizeinstall(kwUsagePerDay, kwPerDayPerSquareMeter)
    expect(size).to.equal(31)
  })
})
