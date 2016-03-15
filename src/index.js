import $ from 'jquery'
import kWGenerator from './components/kWGenerator'
import slider from './components/entry'
import mapAutoComplete from './components/mapAutoComplete'
import energySlider from './components/energySlider'


$(document).ready( () => {
      slider()
      energySlider()
      mapAutoComplete()
})
