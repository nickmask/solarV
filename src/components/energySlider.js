import $ from 'jquery'
import kWGenerator from './kWGenerator'

export default function () {
      $("#energyBill").ionRangeSlider({
        min: 100,
        max: 800,
        from: 450,
        prefix: "$",
        step: 10,
        onChange: function (data) {
        $('#recInstallSize').html('')
        kWGenerator()
        }
    })
}
