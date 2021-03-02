import Footer from './footer'
import Head from 'next/head'

const Container = (props) =>(
  <div>
    <Head>
      <title> Next js </title>
      <link rel = 'stylesheet' href = 'https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cyborg/bootstrap.min.css'/>
    </Head>
    <div className= 'container'>
      <div className="col-xs-1 col-sm-6 col-md-8 col-lg-12 sidebar">
        {props.children}
      </div>
      <Footer/>
    </div>
  </div>
)

export default Container;
