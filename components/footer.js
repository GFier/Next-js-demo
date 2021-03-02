import Link from 'next/Link'
import styles from '../css/footer.module.css'

const Footer = () =>{
  return(
    <div className={styles.footer}>
      <div className= 'container'>
        <div className="row justify-content-md-center">
          <div className="copyright">© {new Date().getFullYear()} GFier.</div>
        </div>
        <div className="row justify-content-md-center">
          <Link href='github'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzpUN6yhPjDbIPLhCSEXdnqaBqCj4IYrrbHw&usqp=CAU' style={{widht:'25px',height:'25px'}}/>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;
