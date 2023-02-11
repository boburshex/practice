import { useContext } from "react";
import { DataContext } from "../Data/DataContext";
import { BsChevronCompactRight } from 'react-icons/bs'

import '../Style/Bascket.css'
const Bascket = () => {
  const { bascket, savat_dele, plus, minus, } = useContext(DataContext)

  return (
    <>
      <div className="savatPage">
        <div className="nav-aboute">
          <ul>
            <li>Home</li>
            <li><BsChevronCompactRight className='bs' /></li>
            <li>Savatcha</li>
          </ul>
          <h1>Savatcha</h1>
        </div>
        <div className="savat-sec1">
          <div className="savat-sec1l">
            {JSON.parse(localStorage.getItem('bascket')).length <= 0 ? 'Malumot yuq' :
              JSON.parse(localStorage.getItem('bascket')).map((item, id) => {
                return (
                  <div className="cardsev sabasc" key={id}>
                    <img src={item.img} alt="" />
                    {<p>Flex-036AU 15.6 MULTITOUCH All-In-On...</p> || <p>{item.full_name}</p>}
                    <span>{item.narhi} $</span>
                    <div className="soni soni2">
                      <div onClick={() => minus(item.id)}>-</div>
                      <div>{item?.count}</div>
                      <div onClick={() => plus(item.id)}>+</div>
                    </div>
                    <div className="deleted">
                      <svg onClick={() => savat_dele(item.id)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="9.25" fill="white" stroke="#CACDD8" strokeWidth="1.5" />
                        <path d="M7 7L13.5 13.5" stroke="#A2A6B0" strokeLinecap="round" />
                        <path d="M13.5 7L7 13.5" stroke="#A2A6B0" strokeLinecap="round" />
                      </svg>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="savat-sec1r">
            <div className="shott">
              <p>Mahsulot sotuv narxi: <br />$
                {bascket.reduce((a, b) => a + b.count * ((b.narhi * 1)), 0).toFixed(2)}
              </p>
              <p> Mahsulot narxi: <br />$
                {bascket.reduce((a, b) => a + b.count * b.p || b.narhi, 0)}
              </p>
              <p> Mahsulot soni: <br />
                {bascket.reduce((a, b) => a + b.count, 0)} ta
              </p>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}
export default Bascket;
