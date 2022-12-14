import React, {useState, useEffect} from 'react'
//import { Link } from 'react-router-dom';
import About from '../components/Comtrade/About';
import TableCountries from '../components/Comtrade/TableCountries';
import TableYear from '../components/Comtrade/TableYear';
import './Comtrade.css'



function Comtrade() {

  
  const [data_pais, setDataPais] = useState([])
  const [data_ano, setDataAno] = useState([])
  const [status, setStatus] = useState('')



  function retrieve_data(){
    setStatus('Carregando arquivos...')

    data_ano.map(item_ano=>{

      data_pais.map(item_pais =>{

        if (item_ano.select === true && item_pais.select === true){

          fetch(
          
            `https://comtrade.un.org/api/get/bulk/C/A/${item_ano.ano}/${item_pais.pais_id}/HS?token=J18NDz5Xua5U3ctLpIXLowNzVpY50CVP95f49s5Tu5N0n0j1dxxwUIEOYcou9SQzaGsiG+9ZvTEAVuIm6U+2zvTeFx6h2khpx5LxstaqB0MPxDgWbMoCdFPglgjVBycWSMDljymRfXcXLSzXvkx5Tftfg8ZWxiYBuZDtSxsZ/IU=`
          
          )
          .then(response => {
            return response.blob()
            //console.log(response)
          })
          .then(bytes =>{
    
            let elm = document.createElement('a');  // CREATE A LINK ELEMENT IN DOM
            elm.href = URL.createObjectURL(bytes);  // SET LINK ELEMENTS CONTENTS
            elm.setAttribute('download', `${item_pais.pais_nome} ${item_ano.ano}.zip`); // SET ELEMENT CREATED 'ATTRIBUTE' TO DOWNLOAD, FILENAME PARAM AUTOMATICALLY
            elm.click()
            setStatus(`Download concluído: arquivo ${item_pais.pais_nome} ${item_ano.ano}.zip`)
    
          })

      }


        return item_pais
      })


      return item_ano

    })


       

  }



  return (
    <div>
      <About/>
      <TableCountries result_pais={setDataPais}/>
      <TableYear result_ano={setDataAno}/>

      <input className='Comtrade_button' type='button' value='Buscar' onClick={() => retrieve_data()}/>
      
      <p className='Comtrade_text'>{status}</p>
      


    </div>
  )
}

export default Comtrade