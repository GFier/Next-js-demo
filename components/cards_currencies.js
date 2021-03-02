import styles from '../css/cards_style.module.css'

const Currency = ({currency}) =>{
  return(
    <div className={styles.flip_card}>
      <div className={styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
            <img className={styles.flip_img} src='https://www.pngitem.com/pimgs/m/241-2413586_png-file-svg-dollar-euro-png-euro-and.png' />
            <h3 className="card-title" style={{color: 'turquoise'}}>Currency</h3>
        </div>
        <div className={styles.flip_card_back}>
          <ul className="list-group list-group-flush">
          <li className="list-group-item pb-2" style={{fontSize: '20px'}}>Currency: <br/>{currency.currency}<br/></li>
          <li className="list-group-item pb-2" style={{fontSize: '20px'}}>Exchange USD: <br/>{currency.to_usd}<br/></li>
          <li className="list-group-item pb-2" style={{fontSize: '20px'}}>Exchange EURO: <br/>{currency.to_eur}<br/></li>
          <h3 className="card-title" style={{color: 'turquoise'}}>Currency</h3>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Currency;
