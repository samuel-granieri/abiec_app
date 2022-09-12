import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'
import './TableCountries.css'


function TableCountries(props) {

    const [pais, setPais] = useState([])

    useEffect(()=>{

        let dict_paises = [

        {
            id_pais: "4",
            pais: "Afghanistan"
        },
        {
            id_pais: "8",
            pais: "Albania"
        },
        {
            id_pais: "12",
            pais: "Algeria"
        },
        {
            id_pais: "20",
            pais: "Andorra"
        },
        {
            id_pais: "24",
            pais: "Angola"
        },
        {
            id_pais: "660",
            pais: "Anguilla"
        },
        {
            id_pais: "28",
            pais: "Antigua and Barbuda"
        },
        {
            id_pais: "32",
            pais: "Argentina"
        },
        {
            id_pais: "51",
            pais: "Armenia"
        },
        {
            id_pais: "533",
            pais: "Aruba"
        },
        {
            id_pais: "36",
            pais: "Australia"
        },
        {
            id_pais: "40",
            pais: "Austria"
        },
        {
            id_pais: "31",
            pais: "Azerbaijan"
        },
        {
            id_pais: "44",
            pais: "Bahamas"
        },
        {
            id_pais: "48",
            pais: "Bahrain"
        },
        {
            id_pais: "50",
            pais: "Bangladesh"
        },
        {
            id_pais: "52",
            pais: "Barbados"
        },
        {
            id_pais: "112",
            pais: "Belarus"
        },
        {
            id_pais: "56",
            pais: "Belgium"
        },
        {
            id_pais: "58",
            pais: "Belgium-Luxembourg"
        },
        {
            id_pais: "84",
            pais: "Belize"
        },
        {
            id_pais: "204",
            pais: "Benin"
        },
        {
            id_pais: "60",
            pais: "Bermuda"
        },
        {
            id_pais: "64",
            pais: "Bhutan"
        },
        {
            id_pais: "68",
            pais: "Bolivia (Plurinational State of)"
        },
        {
            id_pais: "535",
            pais: "Bonaire"
        },
        {
            id_pais: "70",
            pais: "Bosnia Herzegovina"
        },
        {
            id_pais: "72",
            pais: "Botswana"
        },
        {
            id_pais: "92",
            pais: "Br. Virgin Isds"
        },
        {
            id_pais: "76",
            pais: "Brazil"
        },
        {
            id_pais: "96",
            pais: "Brunei Darussalam"
        },
        {
            id_pais: "100",
            pais: "Bulgaria"
        },
        {
            id_pais: "854",
            pais: "Burkina Faso"
        },
        {
            id_pais: "108",
            pais: "Burundi"
        },
        {
            id_pais: "132",
            pais: "Cabo Verde"
        },
        {
            id_pais: "116",
            pais: "Cambodia"
        },
        {
            id_pais: "120",
            pais: "Cameroon"
        },
        {
            id_pais: "124",
            pais: "Canada"
        },
        {
            id_pais: "136",
            pais: "Cayman Isds"
        },
        {
            id_pais: "140",
            pais: "Central African Rep."
        },
        {
            id_pais: "148",
            pais: "Chad"
        },
        {
            id_pais: "152",
            pais: "Chile"
        },
        {
            id_pais: "156",
            pais: "China"
        },
        {
            id_pais: "344",
            pais: "China, Hong Kong SAR"
        },
        {
            id_pais: "446",
            pais: "China, Macao SAR"
        },
        {
            id_pais: "170",
            pais: "Colombia"
        },
        {
            id_pais: "174",
            pais: "Comoros"
        },
        {
            id_pais: "178",
            pais: "Congo"
        },
        {
            id_pais: "184",
            pais: "Cook Isds"
        },
        {
            id_pais: "188",
            pais: "Costa Rica"
        },
        {
            id_pais: "384",
            pais: "Côte d'Ivoire"
        },
        {
            id_pais: "191",
            pais: "Croatia"
        },
        {
            id_pais: "192",
            pais: "Cuba"
        },
        {
            id_pais: "531",
            pais: "Curaçao"
        },
        {
            id_pais: "196",
            pais: "Cyprus"
        },
        {
            id_pais: "203",
            pais: "Czechia"
        },
        {
            id_pais: "200",
            pais: "Czechoslovakia"
        },
        {
            id_pais: "408",
            pais: "Dem. People's Rep. of Korea"
        },
        {
            id_pais: "180",
            pais: "Dem. Rep. of the Congo"
        },
        {
            id_pais: "208",
            pais: "Denmark"
        },
        {
            id_pais: "262",
            pais: "Djibouti"
        },
        {
            id_pais: "212",
            pais: "Dominica"
        },
        {
            id_pais: "214",
            pais: "Dominican Rep."
        },
        {
            id_pais: "588",
            pais: "East and West Pakistan"
        },
        {
            id_pais: "218",
            pais: "Ecuador"
        },
        {
            id_pais: "818",
            pais: "Egypt"
        },
        {
            id_pais: "222",
            pais: "El Salvador"
        },
        {
            id_pais: "226",
            pais: "Equatorial Guinea"
        },
        {
            id_pais: "232",
            pais: "Eritrea"
        },
        {
            id_pais: "233",
            pais: "Estonia"
        },
        {
            id_pais: "231",
            pais: "Ethiopia"
        },
        {
            id_pais: "97",
            pais: "EU"
        },
        {
            id_pais: "234",
            pais: "Faeroe Isds"
        },
        {
            id_pais: "238",
            pais: "Falkland Isds (Malvinas)"
        },
        {
            id_pais: "242",
            pais: "Fiji"
        },
        {
            id_pais: "246",
            pais: "Finland"
        },
        {
            id_pais: "886",
            pais: "Fmr Arab Rep. of Yemen"
        },
        {
            id_pais: "278",
            pais: "Fmr Dem. Rep. of Germany"
        },
        {
            id_pais: "866",
            pais: "Fmr Dem. Rep. of Vietnam"
        },
        {
            id_pais: "720",
            pais: "Fmr Dem. Yemen"
        },
        {
            id_pais: "230",
            pais: "Fmr Ethiopia"
        },
        {
            id_pais: "280",
            pais: "Fmr Fed. Rep. of Germany"
        },
        {
            id_pais: "582",
            pais: "Fmr Pacific Isds"
        },
        {
            id_pais: "590",
            pais: "Fmr Panama, excl.Canal Zone"
        },
        {
            id_pais: "592",
            pais: "Fmr Panama-Canal-Zone"
        },
        {
            id_pais: "868",
            pais: "Fmr Rep. of Vietnam"
        },
        {
            id_pais: "717",
            pais: "Fmr Rhodesia Nyas"
        },
        {
            id_pais: "736",
            pais: "Fmr Sudan"
        },
        {
            id_pais: "835",
            pais: "Fmr Tanganyika"
        },
        {
            id_pais: "810",
            pais: "Fmr USSR"
        },
        {
            id_pais: "890",
            pais: "Fmr Yugoslavia"
        },
        {
            id_pais: "836",
            pais: "Fmr Zanzibar and Pemba Isd"
        },
        {
            id_pais: "251",
            pais: "France"
        },
        {
            id_pais: "254",
            pais: "French Guiana"
        },
        {
            id_pais: "258",
            pais: "French Polynesia"
        },
        {
            id_pais: "583",
            pais: "FS Micronesia"
        },
        {
            id_pais: "266",
            pais: "Gabon"
        },
        {
            id_pais: "270",
            pais: "Gambia"
        },
        {
            id_pais: "268",
            pais: "Georgia"
        },
        {
            id_pais: "276",
            pais: "Germany"
        },
        {
            id_pais: "288",
            pais: "Ghana"
        },
        {
            id_pais: "292",
            pais: "Gibraltar"
        },
        {
            id_pais: "300",
            pais: "Greece"
        },
        {
            id_pais: "304",
            pais: "Greenland"
        },
        {
            id_pais: "308",
            pais: "Grenada"
        },
        {
            id_pais: "312",
            pais: "Guadeloupe"
        },
        {
            id_pais: "320",
            pais: "Guatemala"
        },
        {
            id_pais: "324",
            pais: "Guinea"
        },
        {
            id_pais: "624",
            pais: "Guinea-Bissau"
        },
        {
            id_pais: "328",
            pais: "Guyana"
        },
        {
            id_pais: "332",
            pais: "Haiti"
        },
        {
            id_pais: "336",
            pais: "Holy See (Vatican City State)"
        },
        {
            id_pais: "340",
            pais: "Honduras"
        },
        {
            id_pais: "348",
            pais: "Hungary"
        },
        {
            id_pais: "352",
            pais: "Iceland"
        },
        {
            id_pais: "699",
            pais: "India"
        },
        {
            id_pais: "356",
            pais: "India, excl. Sikkim"
        },
        {
            id_pais: "360",
            pais: "Indonesia"
        },
        {
            id_pais: "364",
            pais: "Iran"
        },
        {
            id_pais: "368",
            pais: "Iraq"
        },
        {
            id_pais: "372",
            pais: "Ireland"
        },
        {
            id_pais: "376",
            pais: "Israel"
        },
        {
            id_pais: "381",
            pais: "Italy"
        },
        {
            id_pais: "388",
            pais: "Jamaica"
        },
        {
            id_pais: "392",
            pais: "Japan"
        },
        {
            id_pais: "400",
            pais: "Jordan"
        },
        {
            id_pais: "398",
            pais: "Kazakhstan"
        },
        {
            id_pais: "404",
            pais: "Kenya"
        },
        {
            id_pais: "296",
            pais: "Kiribati"
        },
        {
            id_pais: "414",
            pais: "Kuwait"
        },
        {
            id_pais: "417",
            pais: "Kyrgyzstan"
        },
        {
            id_pais: "418",
            pais: "Lao People's Dem. Rep."
        },
        {
            id_pais: "428",
            pais: "Latvia"
        },
        {
            id_pais: "422",
            pais: "Lebanon"
        },
        {
            id_pais: "426",
            pais: "Lesotho"
        },
        {
            id_pais: "430",
            pais: "Liberia"
        },
        {
            id_pais: "434",
            pais: "Libya"
        },
        {
            id_pais: "440",
            pais: "Lithuania"
        },
        {
            id_pais: "442",
            pais: "Luxembourg"
        },
        {
            id_pais: "450",
            pais: "Madagascar"
        },
        {
            id_pais: "454",
            pais: "Malawi"
        },
        {
            id_pais: "458",
            pais: "Malaysia"
        },
        {
            id_pais: "462",
            pais: "Maldives"
        },
        {
            id_pais: "466",
            pais: "Mali"
        },
        {
            id_pais: "470",
            pais: "Malta"
        },
        {
            id_pais: "584",
            pais: "Marshall Isds"
        },
        {
            id_pais: "474",
            pais: "Martinique"
        },
        {
            id_pais: "478",
            pais: "Mauritania"
        },
        {
            id_pais: "480",
            pais: "Mauritius"
        },
        {
            id_pais: "175",
            pais: "Mayotte"
        },
        {
            id_pais: "484",
            pais: "Mexico"
        },
        {
            id_pais: "496",
            pais: "Mongolia"
        },
        {
            id_pais: "499",
            pais: "Montenegro"
        },
        {
            id_pais: "500",
            pais: "Montserrat"
        },
        {
            id_pais: "504",
            pais: "Morocco"
        },
        {
            id_pais: "508",
            pais: "Mozambique"
        },
        {
            id_pais: "104",
            pais: "Myanmar"
        },
        {
            id_pais: "580",
            pais: "N. Mariana Isds"
        },
        {
            id_pais: "516",
            pais: "Namibia"
        },
        {
            id_pais: "524",
            pais: "Nepal"
        },
        {
            id_pais: "530",
            pais: "Neth. Antilles"
        },
        {
            id_pais: "532",
            pais: "Neth. Antilles and Aruba"
        },
        {
            id_pais: "528",
            pais: "Netherlands"
        },
        {
            id_pais: "540",
            pais: "New Caledonia"
        },
        {
            id_pais: "554",
            pais: "New Zealand"
        },
        {
            id_pais: "558",
            pais: "Nicaragua"
        },
        {
            id_pais: "562",
            pais: "Niger"
        },
        {
            id_pais: "566",
            pais: "Nigeria"
        },
        {
            id_pais: "579",
            pais: "Norway"
        },
        {
            id_pais: "512",
            pais: "Oman"
        },
        {
            id_pais: "490",
            pais: "Other Asia, nes"
        },
        {
            id_pais: "586",
            pais: "Pakistan"
        },
        {
            id_pais: "585",
            pais: "Palau"
        },
        {
            id_pais: "591",
            pais: "Panama"
        },
        {
            id_pais: "598",
            pais: "Papua New Guinea"
        },
        {
            id_pais: "600",
            pais: "Paraguay"
        },
        {
            id_pais: "459",
            pais: "Peninsula Malaysia"
        },
        {
            id_pais: "604",
            pais: "Peru"
        },
        {
            id_pais: "608",
            pais: "Philippines"
        },
        {
            id_pais: "616",
            pais: "Poland"
        },
        {
            id_pais: "620",
            pais: "Portugal"
        },
        {
            id_pais: "634",
            pais: "Qatar"
        },
        {
            id_pais: "410",
            pais: "Rep. of Korea"
        },
        {
            id_pais: "498",
            pais: "Rep. of Moldova"
        },
        {
            id_pais: "638",
            pais: "Réunion"
        },
        {
            id_pais: "642",
            pais: "Romania"
        },
        {
            id_pais: "643",
            pais: "Russian Federation"
        },
        {
            id_pais: "646",
            pais: "Rwanda"
        },
        {
            id_pais: "647",
            pais: "Ryukyu Isd"
        },
        {
            id_pais: "461",
            pais: "Sabah"
        },
        {
            id_pais: "652",
            pais: "Saint Barthelemy"
        },
        {
            id_pais: "654",
            pais: "Saint Helena"
        },
        {
            id_pais: "659",
            pais: "Saint Kitts and Nevis"
        },
        {
            id_pais: "658",
            pais: "Saint Kitts, Nevis and Anguilla"
        },
        {
            id_pais: "662",
            pais: "Saint Lucia"
        },
        {
            id_pais: "534",
            pais: "Saint Maarten"
        },
        {
            id_pais: "666",
            pais: "Saint Pierre and Miquelon"
        },
        {
            id_pais: "670",
            pais: "Saint Vincent and the Grenadines"
        },
        {
            id_pais: "882",
            pais: "Samoa"
        },
        {
            id_pais: "674",
            pais: "San Marino"
        },
        {
            id_pais: "678",
            pais: "Sao Tome and Principe"
        },
        {
            id_pais: "457",
            pais: "Sarawak"
        },
        {
            id_pais: "682",
            pais: "Saudi Arabia"
        },
        {
            id_pais: "686",
            pais: "Senegal"
        },
        {
            id_pais: "688",
            pais: "Serbia"
        },
        {
            id_pais: "891",
            pais: "Serbia and Montenegro"
        },
        {
            id_pais: "690",
            pais: "Seychelles"
        },
        {
            id_pais: "694",
            pais: "Sierra Leone"
        },
        {
            id_pais: "702",
            pais: "Singapore"
        },
        {
            id_pais: "703",
            pais: "Slovakia"
        },
        {
            id_pais: "705",
            pais: "Slovenia"
        },
        {
            id_pais: "711",
            pais: "So. African Customs Union"
        },
        {
            id_pais: "90",
            pais: "Solomon Isds"
        },
        {
            id_pais: "706",
            pais: "Somalia"
        },
        {
            id_pais: "710",
            pais: "South Africa"
        },
        {
            id_pais: "728",
            pais: "South Sudan"
        },
        {
            id_pais: "724",
            pais: "Spain"
        },
        {
            id_pais: "144",
            pais: "Sri Lanka"
        },
        {
            id_pais: "275",
            pais: "State of Palestine"
        },
        {
            id_pais: "729",
            pais: "Sudan"
        },
        {
            id_pais: "740",
            pais: "Suriname"
        },
        {
            id_pais: "748",
            pais: "Eswatini"
        },
        {
            id_pais: "752",
            pais: "Sweden"
        },
        {
            id_pais: "757",
            pais: "Switzerland"
        },
        {
            id_pais: "760",
            pais: "Syria"
        },
        {
            id_pais: "762",
            pais: "Tajikistan"
        },
        {
            id_pais: "807",
            pais: "North Macedonia"
        },
        {
            id_pais: "764",
            pais: "Thailand"
        },
        {
            id_pais: "626",
            pais: "Timor-Leste"
        },
        {
            id_pais: "768",
            pais: "Togo"
        },
        {
            id_pais: "772",
            pais: "Tokelau"
        },
        {
            id_pais: "776",
            pais: "Tonga"
        },
        {
            id_pais: "780",
            pais: "Trinid_paisad and Tobago"
        },
        {
            id_pais: "788",
            pais: "Tunisia"
        },
        {
            id_pais: "792",
            pais: "Turkey"
        },
        {
            id_pais: "795",
            pais: "Turkmenistan"
        },
        {
            id_pais: "796",
            pais: "Turks and Caicos Isds"
        },
        {
            id_pais: "798",
            pais: "Tuvalu"
        },
        {
            id_pais: "800",
            pais: "Uganda"
        },
        {
            id_pais: "804",
            pais: "Ukraine"
        },
        {
            id_pais: "784",
            pais: "United Arab Emirates"
        },
        {
            id_pais: "826",
            pais: "United Kingdom"
        },
        {
            id_pais: "834",
            pais: "United Rep. of Tanzania"
        },
        {
            id_pais: "858",
            pais: "Uruguay"
        },
        {
            id_pais: "850",
            pais: "US Virgin Isds"
        },
        {
            id_pais: "842",
            pais: "USA"
        },
        {
            id_pais: "841",
            pais: "USA (before 1981)"
        },
        {
            id_pais: "860",
            pais: "Uzbekistan"
        },
        {
            id_pais: "548",
            pais: "Vanuatu"
        },
        {
            id_pais: "862",
            pais: "Venezuela"
        },
        {
            id_pais: "704",
            pais: "Viet Nam"
        },
        {
            id_pais: "876",
            pais: "Wallis and Futuna Isds"
        },
        {
            id_pais: "887",
            pais: "Yemen"
        },
        {
            id_pais: "894",
            pais: "Zambia"
        },
        {
            id_pais: "716",
            pais: "Zimbabwe"
        },
        {
            id_pais: "975",
            pais: "ASEAN"
        }
            
    
        ];

        setPais(
            dict_paises.map(p=>{
                return{
                    select: false,
                    pais_id: p.id_pais,
                    pais_nome: p.pais
                }
            })
        )

    }, [])

    


  function handleChange(e, id){
    let checked = e.target.checked

    setPais(pais.map(data=>{
        if (id === data.pais_id){
            data.select = checked;
        }


        return data
    }));

    props.result_pais(pais)

    }

    
  return (
    <div className='TableCountries_table'>
      <div id="table-wrapper">
        <div>
          <p>Selecione os países desejados:</p>
        </div>
        <div id="table-scroll">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>País</th>
                <th><input type="checkbox" onChange={e=>{
                    setPais(pais.map(p=>{
                        p.select = e.target.checked;
                        return p
                    }))

                    props.result_pais(pais)
                    
                }}></input></th>
              </tr>
            </thead>

            <tbody>
              {pais.map((p) => (
                <tr key={p.pais_id}>
                  <td>{p.pais_id}</td>
                  <td>{p.pais_nome}</td>
                  <td><input id={p.pais_id} name='registro_pais' checked={p.select} onChange={(e) => handleChange(e, p.pais_id)} type="checkbox"/></td>
                </tr>
              ))}
            </tbody>
        </Table>
        </div>
      </div>
    </div>
  )
}

export default TableCountries