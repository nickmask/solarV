import { expect } from 'chai'
import { mount, shallow, render } from 'enzyme'
import React from 'react'
import EnterAddress from '../../src/components/Enter-address'

describe('Address heading', () => {
  it('should say Address', () => {
    const wrapper = shallow(<EnterAddress />)
    expect(wrapper.find('h2').text()).to.equal('Address')
  })
})

describe('Address heading', () => {
  it('should be an h2 tag', () => {
    const wrapper = shallow(<EnterAddress />)
    expect(wrapper.find('h2')).to.have.length(1)
  })
})

describe('Address', () => {
  it('should be an input tag', () => {
    const wrapper = shallow(<EnterAddress />)
    expect(wrapper.find('input')).to.have.length(1)
  })
})

describe('Address input', () => {
  it('should have id of autocomplete', () => {
    const wrapper = mount(<EnterAddress />)
    expect(wrapper.find('#autocomplete')).to.have.length(1)
  })
})

describe('Address input', () => {
  it('should have a placeholder of "Enter your address"', () => {
    const wrapper = mount(<EnterAddress />)
    expect(wrapper.find('[type="text"]')).to.have.length(1)
  })
})

describe('Address input', () => {
  it('should have a class of "form-control"', () => {
    const wrapper = mount(<EnterAddress />)
    expect(wrapper.find('#autocomplete').hasClass('form-control')).to.equal(true)
  })
})
