import React, { useEffect } from 'react';
//import Horizontal from '../../layout/Horizontal'
import Vertical from '../../layout/Vertical'
//import Splitter from '../../layout/Splitter'
//import Separator from '../../layout/Separator'

const Home = () => {
    useEffect(() => {
      console.log('useEffect Home')
    }, []);


  return (
    <Vertical style={{flex:'1',background:'lightgray'}}>
      <div style={{display:'flex',padding:'10px 0 10px 20px',justifyContent:'space-between',flexDirection:'row',background:'rgb(94,100,179)',color:'white',textAlign:'center',fontSize:'24px'}}>
        Home
      </div>

<div style={{padding:'10px'}}>
      <a target="_blank" rel="noopener noreferrer" href="https://card-report.vercel.app/?report=cardcna">Card Report for CNA without menu</a>
      <br/><br/>
      <a target="_blank" rel="noopener noreferrer" href="https://card-report.vercel.app/?report=cardgmi">Card Report for GMI without menu</a>
      <br/><br/>
      <a target="_blank" rel="noopener noreferrer" href="https://card-report.vercel.app/?report=covidcna">Covid Report for CNA without menu</a>
      <br/><br/>
      <a target="_blank" rel="noopener noreferrer" href="https://card-report.vercel.app/?report=benchmarkcna">Benchmark Report for CNA without menu</a>
      <br/><br/>
      <a target="_blank" rel="noopener noreferrer" href="https://card-report.vercel.app/?report=benchmarkgmi">Benchmark Report for GMI without menu</a>

</div>

    </Vertical>
  )
}

export default Home
