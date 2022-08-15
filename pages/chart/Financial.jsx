
import { useState } from 'react'
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';
import {BarChart} from '../../componants'
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
 import styles from '../../styles/Chart.module.css'

export default function Financial({memberData}) {
  
  const labels =['January','February','March','April','May','June','July','August','September','October','November','December']
  

  const data = labels.map((label,ind)=>{
     let result = memberData.filter(item => {
      let month = labels[new Date(item.date).getMonth()];
      return (month == label);
  })
  const data = (result.length !== 0)? result.map(item=> item.acount).reduce((t,i)=> t+= i):0
  return data;
})
  const [BarChaerData,setBarChaetData] = useState({
    labels,
    datasets:[
      {
        label:"financial summary",
        data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      }
    ]
  })
  const [chartData,setChartData] = useState({
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  })
  return (
    <div className={styles.chart}>
      <BarChart BarChaerData ={BarChaerData}/>
      
    </div>
  )
}
export const getStaticProps = async ()=>{
  const res = await fetch(`http://localhost:3000/api/member`);
  const memberData = await res.json()

  return {
    props:{memberData}
  }
}
