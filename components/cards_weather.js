import styles from '../css/cards_style.module.css'

const Weather = ({weather}) =>{
  let kelvins = -273.15

  return (
          <div className={styles.flip_card}>
            <div className={styles.flip_card_inner}>
              <div className={styles.flip_card_front}>
                  <img className={styles.flip_img} src='https://cdn.dribbble.com/users/915711/screenshots/5827243/weather_icon3.png' />
                  <h3 className="card-title" style={{color: 'turquoise'}}>Weather</h3>
              </div>
              <div className={styles.flip_card_back}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item pb-2" style={{fontSize: '20px'}}>Real Feel: <br/>{(weather.current.feels_like + kelvins).toFixed(2)}º<br/></li>
                  <li className="list-group-item pb-2" style={{fontSize: '20px'}}>Temperature: <br/>{(weather.current.temp + kelvins).toFixed(2)}º<br/></li>
                  <li className="list-group-item pb-2" style={{fontSize: '20px'}}>Clouds: <br/>{(weather.current.clouds).toFixed(2)}%<br/></li>
                  <h3 className="card-title" style={{color: 'turquoise'}}>Weather</h3>
                </ul>
              </div>
            </div>
          </div>
  )
}

export default Weather;
