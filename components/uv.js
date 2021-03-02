const UV_hourly = (weather) =>{
    let uv = weather.map(function (obj) {
      return (obj.uvi).toFixed(2)})
    let labels = weather.map(function (obj) {
      let date = new Date(obj.dt * 1000)
      return (date.getDate() + '-' + date.getHours() + '-hs')})
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'UV Radiation',
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
          data: uv,
          fill: false,
        }
      ]
    }
    return data
}

export default UV_hourly;
