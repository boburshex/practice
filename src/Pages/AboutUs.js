import React from "react";
import { BsChevronCompactRight } from 'react-icons/bs'
import k1 from '../img/a1.png'
import k2 from '../img/a2.png'
import k3 from '../img/a3.png'
import k4 from '../img/a4.png'
import k5 from '../img/a5.png'
import i11 from '../img/logo.png'
import i12 from '../img/i12.png'
import i13 from '../img/i13.png'
import i14 from '../img/i14.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Style/Aboute.css'

const AboutUs = () => {
    const settings1 = {
        dots: true,
        infinite: false,
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
    return(
      <div className="aboutus" data-aos="zoom-in">
         <div className="nav-aboute">
                <ul>
                    <li>Home</li>
                    <li><BsChevronCompactRight className='bs'/></li>
                    <li>About Us</li>
                </ul>
                <h1>About Us</h1>
            </div>
            <div className="sec_1a"  data-aos="zoom-in">
                <div className="left_sec1">
                    <div className="text">
                        <h1>A Family That Keeps On Growing</h1><br />
                        <p>We always aim to please the home market, supplying great computers and hardware at great             prices to non-corporate customers, through our large Melbourne CBD showroom and our online store. <br />
                            <br /><br />    
                        Shop management approach fosters a strong customer service focus in our staff. We prefer to cultivate long-term client relationships rather than achieve quick sales, demonstrated in the measure of our long-term success.</p>
                    </div>
                </div>
                <div className="right_sec1">
                   <figure> <img src={k1} alt="" /></figure>
                </div>
            </div>
            <div className="sec_2a"  data-aos="zoom-in">
                <div className="left_sec2">
                <figure> <img src={k2} alt="" /></figure>
                </div>
                <div className="right_sec2">
                    <div className="text1">
                        <img src={i11} alt="" />
                        <h1>shop.com</h1>
                        <p>Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.</p>
                    </div>
                </div>
            </div>
            <div className="sec_1a"  data-aos="zoom-in">
                <div className="left_sec1">
                    <div className="text">
                        <img src={i12} alt="" />
                        <h1>You're In Safe Hands</h1><br />
                        <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience. <br /><br />
                        *Performance compared to i7-9700. Specs varies by model.</p>
                    </div>
                </div>
                <div className="right_sec1">
                <figure> <img src={k3} alt="" /></figure>
                </div>
            </div>
            <div className="sec_2a">
                <div className="left_sec2">
                <figure> <img src={k4} alt="" /></figure>
                </div>
                <div className="right_sec2">
                    <div className="text1">
                        <img src={i13} alt="" />
                        <h1>shop.com</h1>
                        <p>Shop is a proudly Australian owned, Melbourne based supplier of I.T. goods and services, operating since 1991. Our client base encompasses individuals, small business, corporate and government organisations. We provide complete business IT solutions, centred on high quality hardware and exceptional customer service.</p>
                    </div>
                </div>
            </div>
            <div className="sec_1a"  data-aos="zoom-in">
                <div className="left_sec1">
                    <div className="text">
                        <img src={i14} alt="" />
                        <h1>Delivery to All Regions</h1><br />
                        <p>We deliver our goods all across Australia. No matter where you live, your order will be shipped in time and delivered right to your door or to any other location you have stated. The packages are handled with utmost care, so the ordered products will be handed to you safe and sound, just like you expect them to be.</p>
                    </div>
                </div>
                <div className="right_sec1">
                <figure> <img src={k5} alt="" /></figure>
                </div>
            </div>
            <div className="sec-slide2">
            <div className="text-slik">
              <Slider {...settings1}>
                  <div className="d1">
                    <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black"/>
                      </svg>
                      My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
                    <h5>- Tama Brown</h5>
                  </div>
                  <div className="d1">
                    <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black"/>
                      </svg>
                      My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
                    <h5>- Tama Brown</h5>
                  </div>
                  <div className="d1">
                    <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black"/>
                      </svg>
                      My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
                    <h5>- Tama Brown</h5>
                  </div>
                  <div className="d1">
                    <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black"/>
                      </svg>
                      My first order arrived today in perfect condition.  From the time I sent a question about the item to making the purchase, to the shipping and now the delivery, your company, Tecs, has stayed in touch.  Such great service.  I look forward to shopping on your site in the future and would highly recommend it.</p>
                    <h5>- Tama Brown</h5>
                  </div>
                  <div className="d1">
                    <p> <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.096 21.88H0.304L9.52 0.0879974H15.76L10.096 21.88ZM27.736 0.0879974H37.432L28.216 21.88H22.072L27.736 0.0879974Z" fill="black"/>
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
export default AboutUs;
