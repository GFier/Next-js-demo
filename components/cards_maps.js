import styles from '../css/cards_style.module.css'
import SimpleMap from '../components/simple_map'

const Maps = ({location}) =>{
  return(
      <div className={styles.flip_card}>
        <div className={styles.flip_card_inner}>
          <div className={styles.flip_card_front}>
                <img className={styles.flip_img} src='https://www.somosdesigners.com/wp-content/uploads/2020/02/nuevo-logo-google-maps-pin-00-1.jpg'/>
              <h3 className="card-title" style={{color: 'turquoise'}}>Maps</h3>
          </div>
          <div className={styles.flip_card_back}>
            <div className= 'container' style={{width: '400px', height: '250px'}}>
              <SimpleMap location = {{lat: location.lat, lng: location.long}} zoomLevel = {11}/>
            </div>
            <h3 className="card-title" style={{color: 'turquoise'}}>Maps</h3>
          </div>
        </div>
      </div>
    )
}

export default Maps;
