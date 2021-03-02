
const Temp_hourly = (weather) =>{
    const kelvin = -273.15
    let temperature = weather.hourly.map(function (obj) {
      return (obj.temp+kelvin).toFixed(2)})
    let real_feel = weather.hourly.map(function (obj) {
      return (obj.feels_like+kelvin).toFixed(2)})
    let labels = weather.hourly.map(function (obj) {
      let date = new Date(obj.dt * 1000)
      return ( date.getDate() + '-' + date.getHours() + '-hs')})
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Temperature ºC',
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(0,0,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: temperature,
          fill: false,
        },
        {
          label: 'Real Feel ºC',
          lineTension: 0.1,
          backgroundColor: 'rgba(254,39,97,0.4)',
          borderColor: 'rgba(254,39,97,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(254,39,97,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(7254,39,97,1)',
          pointHoverBorderColor: 'rgba(0,0,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: real_feel,
          fill: false,
        }
      ]
    }
    return data
}

const Temp_Day = (weather) =>{
    const kelvin = -273.15
    let temperature = weather.daily.map(function (obj) {
      return (obj.temp.day+kelvin).toFixed(2)})
    let real_feel = weather.daily.map(function (obj) {
      return (obj.feels_like.day+kelvin).toFixed(2)})
    let labels = weather.daily.map(function (obj) {
      let date = new Date(obj.dt * 1000)
      return ( date.getDate() + '-' + date.getHours() + '-hs')})
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Temperature ºC',
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(0,0,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: temperature,
          fill: false,
        },
        {
          label: 'Real Feel ºC',
          lineTension: 0.1,
          backgroundColor: 'rgba(254,39,97,0.4)',
          borderColor: 'rgba(254,39,97,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(254,39,97,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(7254,39,97,1)',
          pointHoverBorderColor: 'rgba(0,0,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: real_feel,
          fill: false,
        }
      ]
    }
    return data
}

export {Temp_hourly, Temp_Day};
