import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DataContext } from '../Data/DataContext';
import '../Style/Show1.css'
import pap from '../img/pap.png'
import { BsChevronCompactRight } from 'react-icons/bs'
import Slider from "react-slick";
import xip from '../img/zip.png'
import cora7 from '../img/Rectangle 11.png'
import qz from '../img/image 22.png'

const Show2 = () => {
  const { data  , like1, sevimli, showdata, savat, bascket } = useContext(DataContext)
  const [index, setIndex] = useState(0)
  let path = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(
    data?.filter(item => item?.id === +id)?.length > 0 ? data?.filter(item => item?.id === +id)[0] : false
  )
  useEffect(() => {
    if (!show) {
      path('/');
    }
  }, [id, show])


  let plusFunc = () => {
    setShow(
      { ...show, count: show.count + 1 }
    )
  }
  let minusFunc = () => {
    if (show.count > 1) {
      setShow(
        { ...show, count: show.count - 1 }
      )
    }
  }

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="show1">
      <div className="nav-show1">
        <div className="nav-show1l">
          <div onClick={() => { setIndex(0) }}>About Product</div>
          <div onClick={() => { setIndex(1) }}>Details</div>
          <div onClick={() => { setIndex(2) }}>Specs</div>
        </div>
        <div className="nav-show1r">
          <div className="contShow">
            <p>On Sale from: <span>{(show.narhi * show.count).toFixed(2)}$</span></p>
            <button onClick={minusFunc}>-</button>
            <button>{show.count}</button>
            <button onClick={plusFunc}>+</button>
          </div>
          <div className="btn-show">
            <button id="qush" onClick={() => savat(show)}>Add to Cart</button>
            <button id="pap"><img src={pap} alt="" /></button>
          </div>
        </div>
      </div>
      <div className="show_sec1">
        <div className="show_sec1l">
          <div className="bola-show-sec1l">
            <div className="nav-show-sec1">
              <ul>
                <li>Home</li>
                <li><BsChevronCompactRight className='bs' /></li>
                <li>Laptops</li>
                <li><BsChevronCompactRight className='bs' /></li>
                <li>MSI WS Series</li>
              </ul>
            </div>
            <div className="text-show">
              <h1>MSI MPG Trident 3</h1>
              <span>Be the first to review this product</span>
              <div className="list" hidden={index !== 0}><p>MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop</p></div>
              <div className="list" hidden={index !== 1}>
                <ul>
                  <li>•  Intel Core i7-10700F <br />
                    •  Intel H410 <br />
                    •  WHITE <br />
                    •  NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6 <br />
                    •  SO-DIMM 16GB (16GB x 1) DDR4 2666MHz <br />
                    •  2 total slots (64GB Max) <br />
                    •  512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM <br />
                    •  Gaming Keyboard GK30 + Gaming Mouse GM11 <br />
                    •  3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0) <br />
                    •  Intel WGI219Vethernet (10/100/1000M) <br />
                    •  AX200 (WIFI 6)+BT5.1 <br />
                    •  PSU 330W <br />
                    •  Fan Cooler</li>
                </ul>
              </div>
              <div className="list" hidden={index !== 2}>
                <div className="lisss">
                  <p>CPU  <span id="sp">N/A</span></p>
                  <p>Featured  <span>N/A</span></p>
                  <p>I/O Ports  <span>N/A</span></p>
                </div>
              </div>
            </div>
            <div className="have">
              <p>Have a Question? <span>Contact Us</span></p>
            </div>
          </div>
        </div>
        <div className="show_sec1r">
          <div className="imgLike">
            <div className="likeicon">
              <svg onClick={() => like1(show)} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="14" stroke="#A2A6B0" strokeWidth="2" />
                <path d="M14.6851 11.8254L15.3954 12.5419L16.1056 11.8254C16.7788 11.1462 17.8139 10.375 18.8922 10.375C19.9606 10.375 20.8026 10.7307 21.3714 11.278C21.9374 11.8225 22.2936 12.6141 22.2936 13.6095C22.2936 14.6805 21.8643 15.5925 21.1287 16.4761C20.3739 17.3829 19.3563 18.1913 18.2509 19.0643L18.2252 19.0846C17.2883 19.8241 16.2458 20.647 15.3958 21.5675C14.5542 20.655 13.5216 19.8387 12.593 19.1047L12.5424 19.0646L12.542 19.0643C11.4363 18.1911 10.4189 17.3825 9.66433 16.4757C8.92905 15.5921 8.5 14.6802 8.5 13.6095C8.5 12.6141 8.8562 11.8226 9.42223 11.278C9.99108 10.7308 10.8333 10.375 11.9021 10.375C12.9791 10.375 14.0111 11.1454 14.6851 11.8254Z" stroke="#A2A6B0" strokeWidth="2" />
              </svg>
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15.041" cy="15.4766" r="14" stroke="#A2A6B0" strokeWidth="2" />
                <path d="M10.4199 21.5649V17.0792" stroke="#A2A6B0" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M14.9995 21.5649L14.9995 8.16895" stroke="#A2A6B0" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M19.6611 21.5649L19.6611 12.7233" stroke="#A2A6B0" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15.9535" r="14" stroke="#A2A6B0" strokeWidth="2" />
                <path d="M21.6667 10.7877H8.33333C7.8731 10.7877 7.5 11.1608 7.5 11.6211V21.6211C7.5 22.0813 7.8731 22.4544 8.33333 22.4544H21.6667C22.1269 22.4544 22.5 22.0813 22.5 21.6211V11.6211C22.5 11.1608 22.1269 10.7877 21.6667 10.7877Z" stroke="#A2A6B0" strokeWidth="1.7" strokeLinecap="round" />
                <path d="M7.5 12.0377L15 16.6211L22.5 12.0377" stroke="#A2A6B0" strokeWidth="1.7" strokeLinecap="round" />
              </svg>

            </div>
            <div className="imgDa">
              <Slider {...settings2}>
                <img src={show.img} alt="" />
                <img src={show.img} alt="" />
                <img src={show.img} alt="" />

              </Slider>
              <div className="reklamasi">
                <img src={xip} alt="" />
                <span>own it now, up to 6 months <br /> interest free learn more</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="show_sec2">
        <div className="show_sec2l">
          <div className="text-show-sec2">
            <h1>Outplay the <br /> Competittion</h1>
            <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience. <br />
              <br />
              *Performance compared to i7-9700. Specs <br /> varies by model.
            </p>
          </div>
        </div>
        <div className="show_sec2r">
          <img src={cora7} alt="" />
        </div>
      </div>
      <div className="show_sec3">
        <div className="show_sec3l">
          <div className="mini-sec3">
            <Link to="#" id="link"><div className="next-fq">Product Support</div></Link>
            <Link to="/faq" id="link"><div className="next-fq" >FAQ</div></Link>
            <Link to="#" id="link"><div className="next-fq">Our Buyer Guide</div></Link>
          </div>
        </div>
        <div className="show_sec3r">
          <img src={qz} alt="" />
        </div>
      </div>
      <div className="show-sec4">
        <div className="show-text4">
          <h1>Featues</h1>
          <p>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
        </div>
        <div className="show-mep4">
          {
            showdata?.map((item, i) => {
              return (<div className="meps" key={i}>
                <img src={item.img} alt="" />
                <p>{item.title}</p>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export default Show2;




