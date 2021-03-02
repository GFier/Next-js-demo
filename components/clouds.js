
const Cloud_hourly = (weather) =>{
    let clouds = weather.map(function (obj) {
      return (obj.clouds).toFixed(2)})
    let humidity = weather.map(function (obj) {
      return (obj.humidity).toFixed(2)})
    let labels = weather.map(function (obj) {
      let date = new Date(obj.dt * 1000)
      return ( date.getDate() + '-' + date.getHours() + '-hs')})
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'Clouds %',
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
          data: clouds,
          fill: false,
        },
        {
          label: 'Humidity %',
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
          data: humidity,
          fill: false,
        }
      ]
    }
    return data
}

export default Cloud_hourly;
