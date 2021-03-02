import Head from 'next/head'
import Location from '../components/cards_location'
import Weather from '../components/cards_weather'
import Currency from '../components/cards_currencies'
import Maps from '../components/cards_maps'

const Index = (props) => {
  return (
          <div>
            <Head>
              <title> Data from IP-Home </title>
            </Head>
            <div className="body" >
                <div className= 'container'>
                  <div className="row justify-content-md-center mt-6 ">
                    <div className="col-12 col-md-5">
                        <Location location = {props.data.user_data} />
                    </div>
                      <div className="col-12 col-md-5">
                        <Maps location = {props.data.user_data} />
                      </div>
                  </div>
                  <div className="row justify-content-md-center mt-4">
                      <div className="col-12 col-md-5">
                        <Weather weather = {props.data.user_weather}/>
                      </div>
                      <div className="col-12 col-md-5">
                        <Currency currency = {props.data.user_country}/>
                      </div>
                  </div>
                </div>
            </div>
          </div>
      )
}

export default Index;
