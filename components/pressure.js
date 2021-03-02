const Pressure_hourly = (weather) =>{
    let pressure = weather.map(function (obj) {
      return (obj.pressure).toFixed(2)})
    let labels = weather.map(function (obj) {
      let date = new Date(obj.dt * 1000)
      return (date.getDate() + '-' + date.getHours() + '-hs')})
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Pressure atm',
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
          data: pressure,
          fill: false,
        }
      ]
    }
    return data
}

export default Pressure_hourly;
