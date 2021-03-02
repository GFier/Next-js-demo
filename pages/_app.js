import Container from '../components/container'
import Navigation from '../components/navigation'
import {Keys} from '../keys/keys'
import fetch from 'isomorphic-fetch'

function App({ Component, pageProps, data}) {
  return(
        <div>
          <Navigation/>
          <Container>
            <Component {...pageProps} data={data}/>
          </Container>
        </div>
      )
}

App.getInitialProps = async ({ Component, ctx  }) => {
  const ip_response = await fetch('http://api.ipstack.com/check?access_key=' + Keys.ip_api_key);
  const ip_data = await ip_response.json();
  const User = {
    ip: ip_data.ip,
    lat: ip_data.latitude,
    long: ip_data.longitude,
    city: ip_data.city,
    prov: ip_data.region_name,
    country: ip_data.country_name,
    flag: ip_data.location.country_flag
  };
  const weather_response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+ User.lat + '&lon=' + User.long + Keys.weather_api_key);
  const weather_data = await weather_response.json();
  const country_response = await fetch('https://restcountries.eu/rest/v2/name/'+ User.country.toLowerCase());
  const country_data = await country_response.json();
  const Country = {
    currency: country_data[0].currencies[0].code,
    time_zone: country_data[0].timezones.[0]
  };
  const usd_rsp = await fetch('https://v6.exchangerate-api.com/v6/' + Keys.exchange_api_key + '/pair/USD/'+ Country.currency);
  const usd_data = await usd_rsp.json();
  const eur_rsp = await fetch('https://v6.exchangerate-api.com/v6/' + Keys.exchange_api_key + '/pair/EUR/'+ Country.currency);
  const eur_data = await eur_rsp.json();
  Country.to_usd = usd_data.conversion_rate
  Country.to_eur = eur_data.conversion_rate
  const data = {
    user_data: User,
    user_weather: weather_data,
    user_country: Country
  }
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, data };
}

export default App;
