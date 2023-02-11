import '../Style/Catalog.css'
import React from 'react'
import { BsChevronCompactRight } from 'react-icons/bs'
import ser from '../img/rr2.png'
import { useContext } from 'react'
import { DataContext } from '../Data/DataContext'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { IoMdHeart } from 'react-icons/io'
import { FcLike } from 'react-icons/fc'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { AiOutlineMenuFold } from 'react-icons/ai'
import ReactStarRating from "react-star-ratings-component";
import r1 from '../img/r1.png'
import r2 from '../img/r2.png'
import r3 from '../img/r3.png'
import r4 from '../img/r4.png'
import r5 from '../img/r5.png'
import r6 from '../img/r6.png'
import sd from '../img/ss.png'

const Catalog = () => {

  const path = useNavigate()
  const { id } = useParams()
  const { colom, colOp, data2, like, savat, mene, meneOp, setSearch, search } = useContext(DataContext)
  return (
    <div className="catalog">
      <div className="nav-catalog" >
        <img src={ser} alt="" />
        <ul>
          <li>Home</li>
          <li><BsChevronCompactRight className='bs' /></li>
          <li>Laptops</li>
          <li><BsChevronCompactRight className='bs' /></li>
          <li>Everyday Use Notebooks</li>
          <li><BsChevronCompactRight className='bs' /></li>
          <li>MSI Prestige Series</li>
          <li><BsChevronCompactRight className='bs' /></li>
          <li>MSI WS Series</li>
        </ul>
        <h1>MSI PS Series (20)</h1>
      </div>
      <div className="sec_catal1">
        <div className="nav-sec1">
          <div className="nav-sec1-btn">
            <Link to='/'> <button>‹  Back</button></Link>
            <button onClick={meneOp}>{mene === true ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold />}</button>
          </div>
          <div className="nav-search-cat">
            <input type="text" placeholder='Items 1-35 of 61'
              onChange={(e) => {
                setSearch(e.target.value.trim());
              }}
            />
          </div>
          <div className="fun-btn">
            <button><select name="" id="">
              <option value="">Sort By: Position</option>
              <option value="">Sort By: Position</option>
              <option value="">Sort By: Position</option>
            </select></button>
            <button><select name="" id="">
              <option value="">Sort By: Position</option>
              <option value="">Sort By: Position</option>
              <option value="">Sort By: Position</option>
            </select></button>
            <button onClick={colOp}>
              {colom === false ? <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" fill="white" />
                <rect x="6.90039" y="6.90002" width="3.57143" height="3.57143" fill="black" stroke="black" />
                <rect x="6.90039" y="14.2143" width="3.57143" height="3.57143" fill="black" stroke="black" />
                <rect x="6.90039" y="21.5286" width="3.57143" height="3.57143" fill="black" stroke="black" />
                <rect x="14.2139" y="14.2143" width="3.57143" height="3.57143" fill="black" stroke="black" />
                <rect x="14.2139" y="21.5286" width="3.57143" height="3.57143" fill="black" stroke="black" />
                <rect x="14.2139" y="6.90002" width="3.57143" height="3.57143" fill="black" stroke="black" />
                <rect x="21.5283" y="14.2143" width="3.57143" height="3.57143" fill="black" stroke="black" />
                <rect x="21.5283" y="21.5286" width="3.57143" height="3.57143" fill="black" stroke="black" />
                <rect x="21.5283" y="6.90002" width="3.57143" height="3.57143" fill="black" stroke="black" />
              </svg> : <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" transform="translate(0 0.404602)" fill="white" />
                <rect x="4.57129" y="21.4332" width="9.14286" height="2.74286" fill="black" />
                <rect x="4.57129" y="8.63318" width="21.9429" height="2.74286" fill="black" />
                <rect x="4.57129" y="15.0332" width="16.4571" height="2.74286" fill="black" />
              </svg>}

            </button>
          </div>
        </div>
        <div className="productlar">
          <div className={`left-produc ${mene === false ? "active" : "left-produz"}`}>
            <div className="pricilar">
              <h1>Filters</h1>
              <button>Clear Filter</button>
              <h3>Category</h3>
              <p>CUSTOM PCS<span>15</span></p>
              <p>CUSTOM PCS<span>15</span></p>
              <p>CUSTOM PCS<span>15</span></p>
            </div>
            <div className="pricilar pricilar2">
              <h3>Category</h3>
              <p>100-200<span>19</span></p>
              <p>100-200<span>11</span></p>
              <p>100-200<span>9</span></p>
              <p>100-200<span>2</span></p>
              <p>100-200<span>7</span></p>
              <p>100-200<span>1</span></p>
            </div>
            <div className="pricilar">
              <h3>Color</h3>
              <div className="rangFi">
                <div className="red"><span></span></div>
                <div className="red qora"><span></span></div>
              </div>
            </div>
            <div className="pricilar">
              <h3>Filter Name</h3>
              <button>Apply Filters (2)</button>
            </div>
            <div className="priclar">
              <h4>Brands</h4>
              <button>All Brands</button>
              <div className="searchImg">
                <img src={r1} alt="" />
                <img src={r2} alt="" />
                <img src={r3} alt="" />
                <img src={r4} alt="" />
                <img src={r5} alt="" />
                <img src={r6} alt="" />
              </div>
            </div>
            <div className="priclar" >
              <h3>Filter Name</h3>
              <p>You have no items to compare.</p>
            </div>
            <div className="priclar">
              <h3>Filter Name</h3>
              <p>You have no items in your wish list.</p>
            </div>
            <img src={sd} alt="" />
          </div>
          <div className={`right-produc ${colom ? 'colom' : ''}`}>
            {search.length === 0 ?
              data2.map((item, index) => {
                return (
                  <div className={`caradss1 ${colom ? 'carad-col' : ''}`} key={index}>
                    <button id='like' onClick={() => like(item)}>{
                      item.like ? <FcLike /> : <IoMdHeart />
                    }</button><div>
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
                        <p onClick={() => path(`/show1/${item.id}`)}>EX DISPLAY : MSI Pro 16 <br /> Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                      </div></div>
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
                    <div className="info-comn">
                      <p>CPU  <span>N/A</span></p>
                      <p>Featured  <span>N/A</span></p>
                      <p>I/O Ports  <span>N/A</span></p>
                    </div>
                  </div>
                )
              }) :
              data2.filter((item) => item?.full_name?.toLowerCase()?.indexOf(search?.toLowerCase()) != -1)?.length > 0 ?
                data2.filter((item) => item?.full_name?.toLowerCase()?.indexOf(search?.toLowerCase()) != -1)?.map((item, i) => (
                  <div className={`caradss1 ${colom ? 'carad-col' : ''}`}>
                    <button id='like' onClick={() => like(item)}>{
                      item.like === true ? <IoMdHeart /> : <FcLike />
                    }</button><div>
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
                        <p onClick={() => path(`/show1/${item.id}`)}>EX DISPLAY : MSI Pro 16 <br /> Flex-036AU 15.6 MULTITOUCH All-In-On...</p>
                      </div></div>
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
                    <div className="info-comn">
                      <p>CPU  <span>N/A</span></p>
                      <p>Featured  <span>N/A</span></p>
                      <p>I/O Ports  <span>N/A</span></p>
                    </div>
                  </div>
                )) : 'Topilmadi'

            }

          </div>
        </div>
      </div>
    </div>
  )
}
export default Catalog;