import Container from '../components/container'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import bt_styles from '../css/button.module.css'
import txt_styles from '../css/animated_text.module.css'

const Ref_Button = () => (
    <Link href='nextjs'>
      <button type="button"  className={bt_styles.btn}>  Docs </button>
    </Link>
)

const Next_img = () => {
  return(
        <div style={{display: "flex",justifyContent: "center"}}>
          <Image src="/next_logo.gif" className="img-fluid rounded-circle hoverable" alt="Next" width= "650px" height= '300px'/>
        </div>
  )
}

const About = () =>(
  <div>
    <Head>
      <title style={{textAlign: 'center'}}> Data from ip- About </title>
    </Head>
    <div className="body" >
      <div className= 'container'>
        <div className="row justify-content-md-center mt-5">
          <p className={txt_styles.typewriter}> This is a first test with Next js framework using ip address to locate user-info</p>
        </div>
        <div className="row justify-content-md-center mt-5">
          < Next_img />
        </div>
        <div className="row justify-content-md-center mt-5">
          < Ref_Button />
        </div>
      </div>
    </div>
  </div>
)

export default About;
