import styles from '../css/cards_style.module.css'

const Location = ({location}) =>{
  return(
      <div className={styles.flip_card}>
        <div className={styles.flip_card_inner}>
          <div className={styles.flip_card_front}>
                <img className={styles.flip_img} src={location.flag}/>
              <h3 className="card-title" style={{color: 'turquoise'}}>Location</h3>
          </div>
          <div className={styles.flip_card_back}>
            <ul className="list-group list-group-flush">
              <li className="list-group-item pb-2" style={{fontSize: '20px'}}>City: <br/>{location.city}<br/></li>
              <li className="list-group-item pb-2" style={{fontSize: '20px'}}>Province: <br/>{location.prov}<br/></li>
              <li className="list-group-item pb-2" style={{fontSize: '20px'}}>Country: <br/>{location.country}<br/></li>
              <h3 className="card-title" style={{color: 'turquoise'}}>Location</h3>
            </ul>
          </div>
        </div>
      </div>
    )
}

export default Location;
