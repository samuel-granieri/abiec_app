import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import './TableCountries.css'


function TableYear(props) {

    const [ano, setAno] = useState([])

    useEffect(()=>{

        let dict_ano = [

            {
              id_ano: "1",
              ano: "2015"
            },
            {
              id_ano: "2",
              ano: "2016"
            },
            {
              id_ano: "3",
              ano: "2017"
            },
            {
              id_ano: "4",
              ano: "2018"
            },
            {
              id_ano: "5",
              ano: "2019"
            },
            {
              id_ano: "6",
              ano: "2020"
            },
            {
              id_ano: "7",
              ano: "2021"
            },
            {
              id_ano: "8",
              ano: "2022"
            },
            {
              id_ano: "9",
              ano: "2023"
            },
            {
              id_ano: "10",
              ano: "2024"
            },
            {
              id_ano: "11",
              ano: "2025"
            },
           
            
    
        ];

        setAno(
            dict_ano.map(p=>{
                return{
                    select: false,
                    id_ano: p.id_ano,
                    ano: p.ano
                }
            })
        )

    }, [])

    


  function handleChange(e, id){
    let checked = e.target.checked


    setAno(ano.map(data=>{
        if (id === data.id_ano){
            data.select = checked;
        }

        return data
    }));

    props.result_ano(ano)

    }

    
  return (
    <div className='TableCountries_table'>
      <div id="table-wrapper">
        <div>
          <p>Selecione o ano desejado:</p>
        </div>
        <div id="table-scroll">
          <Table striped bordered hover>
            <thead>
              <tr>
      
                <th>Ano</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {ano.map((p) => (
                <tr key={p.id_ano}>
                  <td>{p.ano}</td>
                  <td><input id={p.id_ano} checked={p.select} onChange={(e) => handleChange(e, p.id_ano)} type="checkbox"/></td>
                </tr>
              ))}
            </tbody>
        </Table>
        </div>
      </div>
    </div>
  )
}

export default TableYear