import { BsChevronCompactRight } from 'react-icons/bs'
import '../Style/Contact.css'

const Contact = () =>{
  return(
    <div className="contact">
      <div className="nav-aboute">
                <ul>
                    <li>Home</li>
                    <li><BsChevronCompactRight className='bs'/></li>
                    <li>Contact Us</li>
                </ul>
                <h1>Contact Us</h1>
      </div>
      <div className="secA_conta">
        <div className="left_conta">
          <div className="text-conta">
            <p>We love hearing from you, our Shop customers. <br />
              Please contact us and we will make sure to get back to you as soon as we possibly can.</p>
          </div>
          <form>
            <div className="con-nam"><h3>Your Name *</h3>
            <input type="text" placeholder='Your Name'/></div>
            <div className="con-nam"><h3>Your Email *</h3>
            <input type="text" placeholder='Your Email '/></div>
            <div className="con-nam"><h3>Your Phone Number</h3>
            <input type="text" placeholder='Your Phone'/></div>
            <div className="con-nam are"><h3>What’s on your mind? *</h3>
            <textarea name="" id="" cols="0" rows="10" placeholder='What’s on your mind? *Jot us a note and we’ll get back to you as quickly as possible'></textarea></div>
          </form>
          <button>Submit</button>
        </div>
        <div className="right_conta">
          <div className="adres">
            <div className="location">
              <div className="lee"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 17C15.625 17 14.5 15.92 14.5 14.6C14.5 13.28 15.625 12.2 17 12.2C18.375 12.2 19.5 13.28 19.5 14.6C19.5 15.92 18.375 17 17 17ZM24.5 14.84C24.5 10.484 21.1875 7.4 17 7.4C12.8125 7.4 9.5 10.484 9.5 14.84C9.5 17.648 11.9375 21.368 17 25.808C22.0625 21.368 24.5 17.648 24.5 14.84ZM17 5C22.25 5 27 8.864 27 14.84C27 18.824 23.6625 23.54 17 29C10.3375 23.54 7 18.824 7 14.84C7 8.864 11.75 5 17 5Z" fill="black"/>
              </svg>
              </div>
              <div className="ree">
                <h4>Address:</h4>
                <p>1234 Street Adress City Address, 1234</p>
              </div>
            </div>
            <div className="location">
              <div className="lee"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 28.85C11.2429 28.85 6.15 23.7571 6.15 17.5C6.15 11.2429 11.2429 6.15 17.5 6.15C23.7571 6.15 28.85 11.2429 28.85 17.5C28.85 23.7571 23.7571 28.85 17.5 28.85Z" stroke="black" strokeWidth="2.3"/>
              <path d="M18.6671 20.1069L19.5282 19.2455C19.6442 19.1309 19.7909 19.0525 19.9506 19.0197C20.1103 18.9869 20.276 19.0012 20.4277 19.0609L21.4772 19.4801C21.6305 19.5423 21.762 19.6486 21.855 19.7855C21.948 19.9223 21.9985 20.0837 22 20.2492V22.1721C21.9991 22.2847 21.9754 22.3959 21.9304 22.4991C21.8854 22.6024 21.82 22.6954 21.7381 22.7726C21.6563 22.8499 21.5596 22.9098 21.454 22.9486C21.3483 22.9875 21.2359 23.0046 21.1235 22.9989C13.7696 22.5413 12.2857 16.3112 12.0051 13.9268C11.9921 13.8097 12.004 13.6912 12.04 13.5791C12.0761 13.4669 12.1355 13.3637 12.2143 13.2761C12.2931 13.1886 12.3895 13.1187 12.4972 13.0711C12.605 13.0235 12.7215 12.9993 12.8393 13H14.696C14.8617 13.0005 15.0235 13.0506 15.1605 13.1438C15.2975 13.237 15.4035 13.3691 15.4649 13.523L15.8839 14.5729C15.9455 14.7241 15.9612 14.8901 15.9291 15.0501C15.897 15.2102 15.8184 15.3572 15.7032 15.4728L14.8421 16.3343C14.8421 16.3343 15.338 19.6916 18.6671 20.1069Z" fill="black"/>
              </svg>
              </div>
              <div className="ree">
                <h4>Phone:</h4>
                <p>(00)1234 5678</p>
              </div>
            </div>
            <div className="location">
              <div className="lee"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 28.85C11.2429 28.85 6.15 23.7571 6.15 17.5C6.15 11.2429 11.2429 6.15 17.5 6.15C23.7571 6.15 28.85 11.2429 28.85 17.5C28.85 23.7571 23.7571 28.85 17.5 28.85Z" stroke="black" strokeWidth="2.3"/>
              <path d="M17.5 12.25V18.375H23.625" stroke="black" strokeWidth="2.3" strokeLinecap="round"/>
              </svg>
              </div>
              <div className="ree">
              <h4>We are open:</h4>
                <p>Monday - Thursday: 9:00 AM - 5:30 PM <br />
                Friday 9:00 AM - 6:00 PM <br />
                Saturday: 11:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="location">
              <div className="lee"><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 28.85C11.2429 28.85 6.15 23.7571 6.15 17.5C6.15 11.2429 11.2429 6.15 17.5 6.15C23.7571 6.15 28.85 11.2429 28.85 17.5C28.85 23.7571 23.7571 28.85 17.5 28.85Z" stroke="black" strokeWidth="2.3"/>
              <path d="M11.5 21.4646V13.9L17.5 18.1L23.5 13.9V21.4646" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </div>
              <div className="ree">
                <h4>E-mail:</h4>
                <p>shop@email.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact;