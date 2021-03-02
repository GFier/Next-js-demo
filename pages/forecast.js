import Container from '../components/container'
import Line_plot from '../components/line_plot'
import {Temp_hourly, Temp_Day} from '../components/temperature'
import Cloud_hourly from '../components/clouds'
import {Wind_hourly,Dirwind_hourly} from '../components/wind'
import Pressure_hourly from '../components/pressure'
import UV_hourly from '../components/uv'
import Head from 'next/head'
import styles from '../css/button.module.css'
import { useState } from 'react';

const Services = (props) =>{
  const [daily, setDaily] = useState(false)

  return(
      <div>
        <Head>
          <title> Data from ip-Weather Forecast </title>
        </Head>
        <div className="body" >
          <div className= 'container'>
            <div className="row justify-content-md-center mt-n4">
                      <div className="col-12 col-md-4">
                        <button onClick={() => setDaily(false)} className={styles.btn}>  Daily forecast for 7 days </button>
                      </div>
                      <div className="col-12 col-md-4">
                        <button onClick={() => setDaily(true)} className={styles.btn}>  Hourly forecast for 48 hours </button>
                      </div>
            </div>
            <div className="row align-items-start mt-2">
                        <div className="col-12 col-md-4">
                          <div style={{width:'300px',height:'400px'}}>
                            {daily ? <Line_plot weather = {Temp_hourly(props.data.user_weather)}/>
                            : <Line_plot weather = {Temp_Day(props.data.user_weather)}/>}
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div style={{width:'300px',height:'400px'}}>
                            {daily ? <Line_plot weather = {Cloud_hourly(props.data.user_weather.hourly)}/>
                            : <Line_plot weather = {Cloud_hourly(props.data.user_weather.daily)}/>}
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div style={{width:'300px',height:'400px'}}>
                            {daily ? <Line_plot weather = {Wind_hourly(props.data.user_weather.hourly)}/>
                            : <Line_plot weather = {Wind_hourly(props.data.user_weather.daily)}/>}
                          </div>
                        </div>
              </div>
              <div className="row align-items-start mt-n5">
                        <div className="col-12 col-md-4">
                          <div style={{width:'300px',height:'400px'}}>
                            {daily ? <Line_plot weather = {Dirwind_hourly(props.data.user_weather.hourly)}/>
                            : <Line_plot weather = {Dirwind_hourly(props.data.user_weather.daily)}/>}
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div style={{width:'300px',height:'400px'}}>
                            {daily ? <Line_plot weather = {Pressure_hourly(props.data.user_weather.hourly)}/>
                            : <Line_plot weather = {Pressure_hourly(props.data.user_weather.daily)}/>}
                          </div>
                        </div>
                        <div className="col-12 col-md-4">
                          <div style={{width:'300px',height:'400px'}}>
                            {daily ? <Line_plot weather = {UV_hourly(props.data.user_weather.hourly)}/>
                            : <Line_plot weather = {UV_hourly(props.data.user_weather.daily)}/>}
                          </div>
                        </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Services;
