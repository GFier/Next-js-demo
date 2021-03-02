const Wind_hourly = (weather) =>{
    let wind_speed = weather.map(function (obj) {
      return (obj.wind_speed*1.852).toFixed(2)})
    let labels = weather.map(function (obj) {
      let date = new Date(obj.dt * 1000)
      return ( date.getDate() + '-' + date.getHours() + '-hs')})
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Wind speed Km/h',
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDashOffset: 0.0,
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(0,0,0,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: wind_speed,
          fill: false,
        }
      ]
    }
    return data
}

const Dirwind_hourly = (weather) =>{
    let wind_deg = weather.map(function (obj) {
      return (obj.wind_deg).toFixed(2)})
    let labels = weather.map(function (obj) {
      let date = new Date(obj.dt * 1000)
      return ( date.getDate() + '-' + date.getHours() + '-hs')})
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Wind direction º',
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
          data: wind_deg,
          fill: false,
        }
      ],
      options:{
        scales: {
            xAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }],
            yAxes: [{
                gridLines: {
                    color: "rgba(0, 0, 0, 0)",
                }
            }]
        }
        }
    }
    return data
}

export {Wind_hourly,Dirwind_hourly}
