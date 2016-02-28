function solarCalc (panelSize, panelYield, solarRadiation, PerformanceRatio) {
  var energyOutput = panelSize * 
  roofSize *
  return energyOutput
}


export.modules = solarCalc

// E = A * r * H * PR 

// E = Energy (kWh) 
// A = Total solar panel Area (m²) 
// r = solar panel yield (%) 
// H = Annual average solar radiation on tilted panels (shadings not included) 
// PR = Performance ratio, coefficient for losses (range between 0.5 and 0.9, default value = 0.75) 