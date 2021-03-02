import {Line} from 'react-chartjs-2';

const Line_plot = ({weather}) =>{
  return(
  <div>
    <Line data={weather} width={400} height={400}/>
  </div>
  )
}

export default Line_plot;
