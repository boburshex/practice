import React, { useContext } from "react"
import img from '../img/1.png'
import '../Style/Home.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStarRating from "react-star-ratings-component";
import { DataContext } from "../Data/DataContext";
import { IoMdHeart } from 'react-icons/io'
import { FcLike } from 'react-icons/fc'
import zip from '../img/zip.png'
import r1 from '../img/r1.png'
import r2 from '../img/r2.png'
import r3 from '../img/r3.png'
import r4 from '../img/r4.png'
import r5 from '../img/r5.png'
import r6 from '../img/r6.png'
import r7 from '../img/r7.png'
import { Link, useNavigate, useParams } from "react-router-dom";

const Home = () => {
  const { data, like, like1, like2, sevimli, savat, msi, data1, xona,otaData } = useContext(DataContext)
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1410,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],



  };
  const settings1 = {
    dots: true,
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
  const path = useNavigate()
  const { id } = useParams()

  return (
    <div className="home">
      <div className="sec_1 ">
        <div className="sec1-img">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="slider">
        <div className="header-slic">
          <h1>New Products</h1>
          <p><Link to="./catalog">See All New Products</Link></p>
        </div>
        <Slider {...settings}>
          {
            data?.map((item, index) => {
              return (
                <div className="carad" key={index}>
                  <button id='like' onClick={() => like1(item)}>{
                      item.like ? <FcLike /> : <IoMdHeart />
                    }</button>
                  <div className="top-car">
                    <h6><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5" r="5" fill="#78A962" />
                      <path d="M7.5 4L4.98404 7L3.5 5.27853" stroke="white" strokeLinecap="round" />
                    </svg>
                      {item?.add}</h6>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="centr-car">
                    <div className="star">
                      <ReactStarRating
                        numberOfStar={5}
                        numberOfSelectedStar={0}
                        colorFilledStar="#E9A426"
                        colorEmptyStar="#CACDD8"
                        starSize="15px"
                        spaceBetweenStar="5px"
                        disableOnSelect={false}
                        onSelectStar={val => {
                          console.log(val);
                        }}
                      />
                      <div className="stae"><span>Reviews (4)</span></div>
                    </div>
                    <p onClick={() => path(`/show2/${item.id}`)}>EX DISPLAY : MSI Pro 16 <br /> Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                  </div>
                  <div className="bot-car">
                    <del>${item.chegrma}</del>
                    <p>${item.narhi}</p>
                    <div className="basket-brt">
                      <button onClick={() => savat(item)}><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4574 16.8334C12.01 16.8334 12.5399 16.6139 12.9306 16.2232C13.3213 15.8325 13.5408 15.3026 13.5408 14.75C13.5408 14.1975 13.3213 13.6676 12.9306 13.2769C12.5399 12.8862 12.01 12.6667 11.4574 12.6667C10.9049 12.6667 10.375 12.8862 9.9843 13.2769C9.59359 13.6676 9.3741 14.1975 9.3741 14.75C9.3741 15.3026 9.59359 15.8325 9.9843 16.2232C10.375 16.6139 10.9049 16.8334 11.4574 16.8334ZM4.16577 16.8334C4.7183 16.8334 5.24821 16.6139 5.63891 16.2232C6.02961 15.8325 6.2491 15.3026 6.2491 14.75C6.2491 14.1975 6.02961 13.6676 5.63891 13.2769C5.24821 12.8862 4.7183 12.6667 4.16577 12.6667C3.61323 12.6667 3.08333 12.8862 2.69263 13.2769C2.30193 13.6676 2.08243 14.1975 2.08243 14.75C2.08243 15.3026 2.30193 15.8325 2.69263 16.2232C3.08333 16.6139 3.61323 16.8334 4.16577 16.8334ZM17.747 2.16981C18.0071 2.16142 18.2536 2.05223 18.4346 1.86531C18.6156 1.6784 18.7168 1.42842 18.7168 1.16825C18.7168 0.908074 18.6156 0.658098 18.4346 0.471184C18.2536 0.284271 18.0071 0.175074 17.747 0.166687H16.5481C15.6085 0.166687 14.796 0.81877 14.5918 1.73544L13.2866 7.61252C13.0824 8.52919 12.2699 9.18127 11.3304 9.18127H3.50535L2.00327 3.17085H11.7376C11.9952 3.1591 12.2384 3.0485 12.4165 2.86205C12.5946 2.67561 12.694 2.42767 12.694 2.16981C12.694 1.91195 12.5946 1.66401 12.4165 1.47757C12.2384 1.29113 11.9952 1.18052 11.7376 1.16877H2.00327C1.69875 1.16868 1.39823 1.23802 1.12453 1.37151C0.85084 1.50501 0.611185 1.69915 0.423786 1.93917C0.236387 2.17919 0.106178 2.45878 0.0430584 2.75668C-0.0200634 3.05458 -0.0144329 3.36295 0.0595188 3.65835L1.5616 9.66669C1.66989 10.1002 1.92003 10.4851 2.27224 10.7601C2.62444 11.0351 3.05849 11.1845 3.50535 11.1844H11.3304C12.242 11.1845 13.1265 10.8737 13.8376 10.3032C14.5488 9.73281 15.0441 8.93687 15.2418 8.04689L16.5481 2.16981H17.747Z" fill="#0156FF" />
                      </svg>
                        Add To Cart</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </Slider>

      </div>
      <div className="imgsRec">
        <p><img src={zip} alt="" /> own it now, up to 6 months interest free learn more</p>
      </div>
      <div className="sec_2">
        <div className="sec_2l">
          {
            msi.map((item, index) => {
              return (
                <div className="rek-dv" key={index}                                     >
                  <div className="bgdv">
                    <img src={item.img} alt="" />
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.title}</p>
                </div>
              )
            })
          }
        </div>
        <div className="sec_2r">
          {
            data1.map((item, index) => {
              return (
                <div className="caradss" key={index}>
                 <button id='like' onClick={() => like2(item)}>{
                      item.like ? <FcLike /> : <IoMdHeart />
                    }</button>
                  <div className="top-car">
                    <h6><svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="5.5" cy="5" r="5" fill="#78A962" />
                      <path d="M7.5 4L4.98404 7L3.5 5.27853" stroke="white" strokeLinecap="round" />
                    </svg>
                      {item?.add}</h6>
                    <img src={item.img} alt="" />
                  </div>
                  <div className="centr-car">
                    <div className="star">
                      <ReactStarRating
                        numberOfStar={5}
                        numberOfSelectedStar={0}
                        colorFilledStar="#E9A426"
                        colorEmptyStar="#CACDD8"
                        starSize="15px"
                        spaceBetweenStar="5px"
                        disableOnSelect={false}
                        onSelectStar={val => {
                          console.log(val);
                        }}
                      />
                      <div className="stae"><span>Reviews (4)</span></div>
                    </div>
                    <p onClick={() => path(`/show3/${item.id}`)}>EX DISPLAY : MSI Pro 16 <br /> Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                  </div>
                  <div className="bot-car">
                    <del>{item.chegrma}</del>
                    <p>{item.narhi}</p>
                    <div className="basket-brt">
                      <button onClick={() => savat(item)}><svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.4574 16.8334C12.01 16.8334 12.5399 16.6139 12.9306 16.2232C13.3213 15.8325 13.5408 15.3026 13.5408 14.75C13.5408 14.1975 13.3213 13.6676 12.9306 13.2769C12.5399 12.8862 12.01 12.6667 11.4574 12.6667C10.9049 12.6667 10.375 12.8862 9.9843 13.2769C9.59359 13.6676 9.3741 14.1975 9.3741 14.75C9.3741 15.3026 9.59359 15.8325 9.9843 16.2232C10.375 16.6139 10.9049 16.8334 11.4574 16.8334ZM4.16577 16.8334C4.7183 16.8334 5.24821 16.6139 5.63891 16.2232C6.02961 15.8325 6.2491 15.3026 6.2491 14.75C6.2491 14.1975 6.02961 13.6676 5.63891 13.2769C5.24821 12.8862 4.7183 12.6667 4.16577 12.6667C3.61323 12.6667 3.08333 12.8862 2.69263 13.2769C2.30193 13.6676 2.08243 14.1975 2.08243 14.75C2.08243 15.3026 2.30193 15.8325 2.69263 16.2232C3.08333 16.6139 3.61323 16.8334 4.16577 16.8334ZM17.747 2.16981C18.0071 2.16142 18.2536 2.05223 18.4346 1.86531C18.6156 1.6784 18.7168 1.42842 18.7168 1.16825C18.7168 0.908074 18.6156 0.658098 18.4346 0.471184C18.2536 0.284271 18.0071 0.175074 17.747 0.166687H16.5481C15.6085 0.166687 14.796 0.81877 14.5918 1.73544L13.2866 7.61252C13.0824 8.52919 12.2699 9.18127 11.3304 9.18127H3.50535L2.00327 3.17085H11.7376C11.9952 3.1591 12.2384 3.0485 12.4165 2.86205C12.5946 2.67561 12.694 2.42767 12.694 2.16981C12.694 1.91195 12.5946 1.66401 12.4165 1.47757C12.2384 1.29113 11.9952 1.18052 11.7376 1.16877H2.00327C1.69875 1.16868 1.39823 1.23802 1.12453 1.37151C0.85084 1.50501 0.611185 1.69915 0.423786 1.93917C0.236387 2.17919 0.106178 2.45878 0.0430584 2.75668C-0.0200634 3.05458 -0.0144329 3.36295 0.0595188 3.65835L1.5616 9.66669C1.66989 10.1002 1.92003 10.4851 2.27224 10.7601C2.62444 11.0351 3.05849 11.1845 3.50535 11.1844H11.3304C12.242 11.1845 13.1265 10.8737 13.8376 10.3032C14.5488 9.73281 15.0441 8.93687 15.2418 8.04689L16.5481 2.16981H17.747Z" fill="#0156FF" />
                      </svg>
                        Add To Cart</button>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
      <div className="sec_reklama">
        <div className="pol-img">
          <img src={r1} alt="" />
          <img src={r2} alt="" />
          <img src={r3} alt="" />
          <img src={r4} alt="" />
          <img src={r5} alt="" />
          <img src={r6} alt="" />
          <img src={r7} alt="" />
        </div>
      </div>
      <div className="sec_3">
        <div className="texct">
          <h1>Follow us on Instagram for News, Offers & More</h1>
        </div>
        <div className="mXona">
          {
            xona.map((item, i) => {
              return (
                <div className="kom" key={i}>
                  <img src={item.img} alt="" />
                  <p>{item.name}</p>
                  <span>{item.data}</span>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className="sec-slide2">
        <div className="text-slik">
          <Slider {...settings1}>
            <div className="d1">
              <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black" />
              </svg>
                My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
              <h5>- Tama Brown</h5>
            </div>
            <div className="d1">
              <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black" />
              </svg>
                My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
              <h5>- Tama Brown</h5>
            </div>
            <div className="d1">
              <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black" />
              </svg>
                My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
              <h5>- Tama Brown</h5>
            </div>
            <div className="d1">
              <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black" />
              </svg>
                My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
              <h5>- Tama Brown</h5>
            </div>
            <div className="d1">
              <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black" />
              </svg>
                My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
              <h5>- Tama Brown</h5>
            </div>
          </Slider>
          <button>Leave Us A Review</button>
        </div>
      </div>
    </div>
  )
}


export default Home;