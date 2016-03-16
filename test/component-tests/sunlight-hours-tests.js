import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import React from 'react'
import EnterAddress from '../../src/components/Sunlight-hours'


describe('Sunlight heading', () => {
  it('should say "Hours of sunlight per year"', () => {
    const wrapper = shallow(<EnterAddress />)
    expect(wrapper.find('h2').text()).to.equal('Hours of sunlight per year')
  })
})

describe('Sunlight heading', () => {
  it('should be an h2 tag', () => {
    const wrapper = shallow(<EnterAddress />)
    expect(wrapper.find('h2')).to.have.length(1)
  })
})

describe('Sunlight hours', () => {
  it('should be a span', () => {
    const wrapper = shallow(<EnterAddress />)
    expect(wrapper.find('span')).to.have.length(1)
  })
})

describe('Sunlight div', () => {
  it('should have a class of "sunlightHours"', () => {
    const wrapper = mount(<EnterAddress />)
    expect(wrapper.find('div').hasClass('sunlightHours')).to.equal(true)
  })
})
