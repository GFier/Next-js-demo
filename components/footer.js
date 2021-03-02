import styles from '../css/footer.module.css'

const Footer = () =>{
  return(
    <div className={styles.footer}>
      <div className="copyright">© {new Date().getFullYear()} Guido Fier GitHub.</div>
    </div>
  )
}

export default Footer;
