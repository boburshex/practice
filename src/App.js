import React, { useState } from 'react';
import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import './App.css';
import logo from './img/logo.png'
import { GoHeart } from 'react-icons/go'
import loIm from './img/loIm.png'
import { useContext } from 'react';
import { DataContext } from './Data/DataContext';
import p1 from './img/p1.png'
import p2 from './img/p2.png'
import p3 from './img/p3.png'
import p4 from './img/p4.png'
import p5 from './img/p5.png'
import { IoMdMenu } from 'react-icons/io'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Catalog from './Pages/Catalog';
import Aos from 'aos';
import "aos/dist/aos.css"
import Bascket from './Pages/Bascket';
import Contact from './Pages/Contact';
import Show1 from './Pages/Show1';
import Show2 from './Pages/Show2';
import Show3 from './Pages/Show3';
import FAQ from './Pages/Faq';
Aos.init();
function App() {
  const { data2, data1, s, open1, card1, modal, modalOpen, sevimli, bascket, data,
    like, count, plus, minus, savat_dele, like_delete, otaData, setOtaData, like_delete1, like_delete2, savat } = useContext(DataContext)
  const path = useNavigate()
  return (
    <>
      <nav>
        <div className="nav-header">
          <div className="headL">
            <p>Mon-Thu: <span>9:00 AM - 5:30 PM</span></p>
          </div>
          <div className="headC">
            <p>Visit our showroom in 1234 Street Adress City Address, 1234 <span>Contact Us</span></p>
          </div>
          <div className="headR">
            <a href="tel: +998993243635">
              Call Us: (00) 1234 5678
            </a>
            <a href="#"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.1051 0.276611H0.894231C0.552475 0.276611 0.276367 0.552719 0.276367 0.894475V15.1053C0.276367 15.4471 0.552475 15.7232 0.894231 15.7232H15.1051C15.4468 15.7232 15.723 15.4471 15.723 15.1053V0.894475C15.723 0.552719 15.4468 0.276611 15.1051 0.276611ZM13.321 4.78508H12.0872C11.1199 4.78508 10.9326 5.24462 10.9326 5.92041V7.40907H13.2418L12.9406 9.73957H10.9326V15.7232H8.52484V9.74151H6.51099V7.40907H8.52484V5.69064C8.52484 3.6961 9.74319 2.60905 11.5234 2.60905C12.3768 2.60905 13.1086 2.67276 13.3229 2.70173V4.78508H13.321Z" fill="white" />
            </svg>
            </a>
            <a href="#"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.9996 5.39651C6.56601 5.39651 5.39609 6.56644 5.39609 8.00003C5.39609 9.43362 6.56601 10.6035 7.9996 10.6035C9.4332 10.6035 10.6031 9.43362 10.6031 8.00003C10.6031 6.56644 9.4332 5.39651 7.9996 5.39651ZM15.8082 8.00003C15.8082 6.92191 15.818 5.85355 15.7574 4.77737C15.6969 3.52737 15.4117 2.418 14.4977 1.50394C13.5816 0.587922 12.4742 0.304719 11.2242 0.244172C10.1461 0.183625 9.07773 0.193391 8.00156 0.193391C6.92343 0.193391 5.85507 0.183625 4.7789 0.244172C3.5289 0.304719 2.41953 0.589875 1.50546 1.50394C0.589448 2.41995 0.306245 3.52737 0.245698 4.77737C0.185151 5.8555 0.194917 6.92386 0.194917 8.00003C0.194917 9.0762 0.185151 10.1465 0.245698 11.2227C0.306245 12.4727 0.591401 13.5821 1.50546 14.4961C2.42148 15.4121 3.5289 15.6953 4.7789 15.7559C5.85703 15.8164 6.92539 15.8067 8.00156 15.8067C9.07968 15.8067 10.148 15.8164 11.2242 15.7559C12.4742 15.6953 13.5836 15.4102 14.4977 14.4961C15.4137 13.5801 15.6969 12.4727 15.7574 11.2227C15.8199 10.1465 15.8082 9.07815 15.8082 8.00003ZM7.9996 12.0059C5.78281 12.0059 3.99375 10.2168 3.99375 8.00003C3.99375 5.78323 5.78281 3.99417 7.9996 3.99417C10.2164 3.99417 12.0055 5.78323 12.0055 8.00003C12.0055 10.2168 10.2164 12.0059 7.9996 12.0059ZM12.1695 4.76566C11.6519 4.76566 11.234 4.34769 11.234 3.83011C11.234 3.31253 11.6519 2.89456 12.1695 2.89456C12.6871 2.89456 13.1051 3.31253 13.1051 3.83011C13.1052 3.95301 13.0811 4.07473 13.0342 4.18831C12.9872 4.30188 12.9183 4.40508 12.8314 4.49198C12.7445 4.57889 12.6413 4.64779 12.5277 4.69476C12.4142 4.74172 12.2924 4.76581 12.1695 4.76566Z" fill="white" />
            </svg>
            </a>
          </div>
        </div>
        <div className="navu">
          <div className="logo">
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className='nav-item'>
            {s === false ? <ul>
              <li>
                <Link to='about'>
                  About
                </Link>
              </li>
              <li>
                <Link to='/catalog'>
                  Product
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  Contact
                </Link>
              </li>
            </ul> : <div className="divInput">
              <input type="text" placeholder='Search entiere store here...' />
              <p onClick={open1}>+</p>
            </div>}

          </div>

          <div className="admn-search">
            <div className="k" id='ser'>
              <button onClick={open1}>
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.95072 1.99141C1.79204 3.14838 1.11812 4.70363 1.06631 6.34023C1.0145 7.97682 1.58868 9.57159 2.67185 10.7995C3.75503 12.0275 5.26567 12.7962 6.89594 12.9491C8.49648 13.0991 10.0941 12.6444 11.3749 11.6766L14.7061 15.0085L14.7061 15.0085C14.789 15.0914 14.8873 15.1571 14.9955 15.2019C15.1038 15.2468 15.2198 15.2698 15.3369 15.2698C15.4541 15.2698 15.5701 15.2468 15.6783 15.2019C15.7866 15.1571 15.8849 15.0914 15.9678 15.0085C16.0506 14.9257 16.1163 14.8274 16.1611 14.7191C16.206 14.6109 16.229 14.4949 16.229 14.3777C16.229 14.2606 16.206 14.1446 16.1611 14.0363C16.1163 13.9281 16.0506 13.8298 15.9678 13.7469L15.9677 13.7469L12.636 10.416C13.6013 9.13496 14.0539 7.53846 13.903 5.93943C13.7493 4.31054 12.9808 2.80139 11.7539 1.719C10.5269 0.636623 8.93373 0.0623154 7.29838 0.11292C5.66303 0.163525 4.10838 0.835233 2.95072 1.99141ZM2.95072 1.99141L3.02138 2.06217L2.95072 1.99141ZM10.7887 3.25366C11.2263 3.68416 11.5743 4.19703 11.8127 4.76269C12.051 5.32835 12.175 5.93561 12.1775 6.54944C12.18 7.16327 12.061 7.77152 11.8272 8.3391C11.5935 8.90669 11.2497 9.42238 10.8156 9.85642C10.3816 10.2905 9.86589 10.6343 9.29831 10.868C8.73072 11.1018 8.12248 11.2208 7.50865 11.2183C6.89482 11.2158 6.28756 11.0918 5.7219 10.8535C5.15623 10.6151 4.64336 10.2671 4.21287 9.82954C3.35255 8.95509 2.87263 7.77613 2.87762 6.54944C2.88262 5.32275 3.37213 4.14773 4.23954 3.28033C5.10694 2.41292 6.28196 1.92341 7.50865 1.91841C8.73533 1.91342 9.9143 2.39335 10.7887 3.25366Z" fill="black" stroke="black" strokeWidth="0.2" />
                </svg>
              </button>
            </div>
            <div className="k">
              <button>
                <GoHeart />
                <span>{data2.filter(item => item.like === true).length +
                  data.filter(item => item.like === true).length +
                  data1.filter(item => item.like === true).length}</span>
              </button>
              <div className="hoverDv hoverDv1">
                {(data1.filter(item => item.like === true).length === 0 &&
                  data.filter(item => item.like === true).length === 0 &&
                  data2.filter(item => item.like === true).length === 0) ? 'Malumotlar yuq' :
                  [...data2.filter(item => item.like === true), ...data.filter(item => item.like === true), ...data1.filter(item => item.like === true)].map((item, index) => {
                    return (
                      <div className="cardsev cardsev2" key={index}>
                        <img src={item.img} alt="" />
                        {<p>Flex-036AU 15.6 MULTITOUCH All-In-On...</p> || <p>{item.full_name}</p>}
                        <div className="deleted">
                          <svg onClick={() => like_delete(item.id) || like_delete1(item.id) || like_delete2(item.id)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="9.25" fill="white" stroke="#CACDD8" strokeWidth="1.5" />
                            <path d="M7 7L13.5 13.5" stroke="#A2A6B0" strokeLinecap="round" />
                            <path d="M13.5 7L7 13.5" stroke="#A2A6B0" strokeLinecap="round" />
                          </svg>
                        </div>
                      </div>
                    )
                  })
                },


              </div>
            </div>
            <div className="k">
              <button>
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.5834 16.8334C12.1359 16.8334 12.6658 16.6139 13.0566 16.2232C13.4473 15.8325 13.6667 15.3026 13.6667 14.75C13.6667 14.1975 13.4473 13.6676 13.0566 13.2769C12.6658 12.8862 12.1359 12.6667 11.5834 12.6667C11.0309 12.6667 10.501 12.8862 10.1103 13.2769C9.71957 13.6676 9.50008 14.1975 9.50008 14.75C9.50008 15.3026 9.71957 15.8325 10.1103 16.2232C10.501 16.6139 11.0309 16.8334 11.5834 16.8334ZM4.29174 16.8334C4.84428 16.8334 5.37418 16.6139 5.76488 16.2232C6.15558 15.8325 6.37508 15.3026 6.37508 14.75C6.37508 14.1975 6.15558 13.6676 5.76488 13.2769C5.37418 12.8862 4.84428 12.6667 4.29174 12.6667C3.73921 12.6667 3.20931 12.8862 2.81861 13.2769C2.4279 13.6676 2.20841 14.1975 2.20841 14.75C2.20841 15.3026 2.4279 15.8325 2.81861 16.2232C3.20931 16.6139 3.73921 16.8334 4.29174 16.8334ZM17.873 2.16981C18.133 2.16142 18.3796 2.05223 18.5606 1.86531C18.7416 1.6784 18.8428 1.42842 18.8428 1.16825C18.8428 0.908074 18.7416 0.658098 18.5606 0.471184C18.3796 0.284271 18.133 0.175074 17.873 0.166687H16.674C15.7345 0.166687 14.922 0.81877 14.7178 1.73544L13.4126 7.61252C13.2084 8.52919 12.3959 9.18127 11.4563 9.18127H3.63133L2.12924 3.17085H11.8636C12.1212 3.1591 12.3644 3.0485 12.5425 2.86205C12.7206 2.67561 12.82 2.42767 12.82 2.16981C12.82 1.91195 12.7206 1.66401 12.5425 1.47757C12.3644 1.29113 12.1212 1.18052 11.8636 1.16877H2.12924C1.82473 1.16868 1.5242 1.23802 1.25051 1.37151C0.976816 1.50501 0.737162 1.69915 0.549763 1.93917C0.362364 2.17919 0.232155 2.45878 0.169035 2.75668C0.105913 3.05458 0.111544 3.36295 0.185495 3.65835L1.68758 9.66669C1.79586 10.1002 2.046 10.4851 2.39821 10.7601C2.75042 11.0351 3.18447 11.1845 3.63133 11.1844H11.4563C12.368 11.1845 13.2524 10.8737 13.9636 10.3032C14.6748 9.73281 15.1701 8.93687 15.3678 8.04689L16.674 2.16981H17.873Z" fill="black" />
                </svg>
                <span>{bascket.length}</span>
              </button>
              <div className="hoverDv"><div className="hover-body">
                {JSON?.parse(localStorage.getItem('bascket'))?.length === 0 ? 'Malumot yuq' :
                  JSON?.parse(localStorage.getItem('bascket'))?.map((item, id) => {
                    return (
                      <div className="cardsev" key={id}>
                        <img src={item.img} alt="" />
                        {<p>Flex-036AU 15.6 MULTITOUCH All-In-On...</p> || <p>{item.full_name}</p>}
                        <div className="soni">
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

                }</div>
                <div className="bth">
                  <button onClick={() => path('/bascketp')}>Batafsl</button>
                </div>
              </div>
            </div>
            <img src={loIm} alt="" />
            <div className="menu">
              <button ><IoMdMenu className='men' /></button>
              <div className="modalAcl">
                <ul>
                  <li>
                    <Link to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to='catalog'>
                      Product
                    </Link>
                  </li>
                  <li>
                    <Link to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>  <div className="divInput">
                  <input type="text" placeholder='Search entiere store here...' />
                  <p onClick={open1}>+</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/bascketp' element={<Bascket />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/show1/:id' element={<Show1 />} />
        <Route path='/show2/:id' element={<Show2 />} />
        <Route path='/show3/:id' element={<Show3 />} />
        <Route path='/faq' element={<FAQ />} />

      </Routes>



      <footer >
        <div className="dispecher">
          {
            card1.map((item, i) => {
              return (
                <div className="card" key={i}>
                  <img src={item.img} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.tex}</p>
                </div>
              )
            })
          }
        </div>
        <div className="footer" >
          <div className="fotT">
            <div className="fotTl">
              <h1>Sign Up To Our Newsletter.</h1>
              <p>Be the first to hear about the latest offers.</p>
            </div>
            <div className="fotTr">
              <input type="text" placeholder='Your Email' />
              <button>Subscribe</button>
            </div>
          </div>
          <div className="fotC">
            <div className="card1">
              <h1>Information</h1>
              <a href="#">About Us</a>
              <a href="#">About Zip</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Search</a>
              <a href="#">Terms</a>
              <a href="#">Orders and Returns</a>
              <a href="#">Contact Us</a>
            </div>
            <div className="card1">
              <h1>PC Parts</h1>
              <a href="#">CPUS</a>
              <a href="#">Add On Cards</a>
              <a href="#">Hard Drives (Internal)</a>
              <a href="#">Graphic Cards</a>
              <a href="#">Graphic Cards</a>
              <a href="#">Cases / Power Supplies / Cooling</a>
              <a href="#">RAM (Memory)</a>
              <a href="#">Software</a>
            </div>
            <div className="card1">
              <h1>Desktop PCs</h1>
              <a href="#">Custom PCs</a>
              <a href="#">Servers</a>
              <a href="#">MSI All-In-One PCs</a>
              <a href="#">HP/Compaq PCs</a>
              <a href="#">ASUS PCs</a>
              <a href="#">Tecs PCs</a>

            </div>
            <div className="card1">
              <h1>Laptops</h1>
              <a href="#">Evryday Use Notebooks</a>
              <a href="#">MSI Workstation Series</a>
              <a href="#">SI Prestige Series</a>
              <a href="#">Tablets and Pads</a>
              <a href="#">Netbooks</a>
              <a href="#">Infinity Gaming Notebooks</a>
            </div>
            <div className="card1">
              <h1>Address</h1>
              <a href="#">Address: 1234 Street Adress City Address, 1234 </a>
              <a href="#">Phones: (00) 1234 5678</a>
              <a href="#">We are open: Monday-Thursday: 9:00 AM - 5:30 PM</a>
              <a href="#">Friday: 9:00 AM - 6:00 PM</a>
              <a href="#">Saturday: 11:00 AM - 5:00 PM</a>
              <a href="#">E-mail: shop@email.com</a>
            </div>
          </div>
          <div className="fotB">
            <div className="fotBl">
              <a href="facebook.com">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.1051 0.276611H0.894231C0.552475 0.276611 0.276367 0.552719 0.276367 0.894475V15.1053C0.276367 15.4471 0.552475 15.7232 0.894231 15.7232H15.1051C15.4468 15.7232 15.723 15.4471 15.723 15.1053V0.894475C15.723 0.552719 15.4468 0.276611 15.1051 0.276611ZM13.321 4.78508H12.0872C11.1199 4.78508 10.9326 5.24462 10.9326 5.92041V7.40907H13.2418L12.9406 9.73957H10.9326V15.7232H8.52484V9.74151H6.51099V7.40907H8.52484V5.69064C8.52484 3.6961 9.74319 2.60905 11.5234 2.60905C12.3768 2.60905 13.1086 2.67276 13.3229 2.70173V4.78508H13.321Z" fill="white" />
                </svg>
              </a>
              <a href="instagram.com">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.9996 5.39651C6.56601 5.39651 5.39609 6.56644 5.39609 8.00003C5.39609 9.43362 6.56601 10.6035 7.9996 10.6035C9.4332 10.6035 10.6031 9.43362 10.6031 8.00003C10.6031 6.56644 9.4332 5.39651 7.9996 5.39651ZM15.8082 8.00003C15.8082 6.92191 15.818 5.85355 15.7574 4.77737C15.6969 3.52737 15.4117 2.418 14.4977 1.50394C13.5816 0.587922 12.4742 0.304719 11.2242 0.244172C10.1461 0.183625 9.07773 0.193391 8.00156 0.193391C6.92343 0.193391 5.85507 0.183625 4.7789 0.244172C3.5289 0.304719 2.41953 0.589875 1.50546 1.50394C0.589448 2.41995 0.306245 3.52737 0.245698 4.77737C0.185151 5.8555 0.194917 6.92386 0.194917 8.00003C0.194917 9.0762 0.185151 10.1465 0.245698 11.2227C0.306245 12.4727 0.591401 13.5821 1.50546 14.4961C2.42148 15.4121 3.5289 15.6953 4.7789 15.7559C5.85703 15.8164 6.92539 15.8067 8.00156 15.8067C9.07968 15.8067 10.148 15.8164 11.2242 15.7559C12.4742 15.6953 13.5836 15.4102 14.4977 14.4961C15.4137 13.5801 15.6969 12.4727 15.7574 11.2227C15.8199 10.1465 15.8082 9.07815 15.8082 8.00003ZM7.9996 12.0059C5.78281 12.0059 3.99375 10.2168 3.99375 8.00003C3.99375 5.78323 5.78281 3.99417 7.9996 3.99417C10.2164 3.99417 12.0055 5.78323 12.0055 8.00003C12.0055 10.2168 10.2164 12.0059 7.9996 12.0059ZM12.1695 4.76566C11.6519 4.76566 11.234 4.34769 11.234 3.83011C11.234 3.31253 11.6519 2.89456 12.1695 2.89456C12.6871 2.89456 13.1051 3.31253 13.1051 3.83011C13.1052 3.95301 13.0811 4.07473 13.0342 4.18831C12.9872 4.30188 12.9183 4.40508 12.8314 4.49198C12.7445 4.57889 12.6413 4.64779 12.5277 4.69476C12.4142 4.74172 12.2924 4.76581 12.1695 4.76566Z" fill="white" />
                </svg>
              </a>
            </div>
            <div className="fotBc">
              <a href="#"><img src={p1} alt="" /></a>
              <a href="#"><img src={p2} alt="" /></a>
              <a href="#"><img src={p3} alt="" /></a>
              <a href="#"><img src={p4} alt="" /></a>
              <a href="#"><img src={p5} alt="" /></a>
            </div>
            <div className="fotBr">
              <p>Copyright © 2020 Shop Pty. Ltd.</p>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}

export default App;
