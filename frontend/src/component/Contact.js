import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';
import Alert from './Alert';


const Contact = () => {

    const comp = useSelector((state)=>state.comp.comp)
    const [email , setemail] = useState()
    const [msg , setmsg] = useState()
    const [alert , setalert] = useState()

    const send = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/msg` , {
                email : email,
                Msg : msg
            },{
                withCredentials:true
            })
            setemail("")
            setmsg("")
            setalert(true)
            setTimeout(()=> {
                setalert(false)
            },[1000])
        } catch (error) {
            console.log("something went wrong in the Contact  : ",error.message)
        }
    }

  return (
    <>{
        comp === "contact" && <div className="contactWrapper">

            <form onSubmit={send} className="contactForm">

                <h2>Get in Touch</h2>
                {alert &&
                <Alert message={"Message Received"}/>
                }
                <div className='citem'>
                    <label>Email address</label>
                    <input type="email" onChange={(e)=>setemail(e.target.value)} value={email} placeholder="you@example.com" required/>
                </div>
                <div className='citem'>
                    <label>Message</label>
                    <textarea type="text" onChange={(e)=> {setmsg(e.target.value)}} value={msg} placeholder="Write your message..." required/>
                </div>
                <button type="submit" className="submitBtn">Send Message</button>
            </form>

           <div className="connectCard">
    <h3>Connect</h3>
    <div className="connectItems">
        <p className="connectItem">
            <FontAwesomeIcon icon={faUser} className="icon"/>
            Tejas Ambaliya
        </p>
        <p className="connectItem">
            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            tejas23106@gmail.com
        </p>
        <p className="connectItem">
            <FontAwesomeIcon icon={faGithub} className="icon"/>
            <a style={{textDecoration:"none"}} href='https://github.com/Tejas-07-iiit'>github.com/Tejas-07-iiit</a>
        </p>
        <p className="connectItem">
            <FontAwesomeIcon icon={faLinkedin} className="icon"/>
            <a style={{textDecoration:"none"}} href='https://www.linkedin.com/in/tejas-ambaliya/'>linkedin.com/in/tejas-ambaliya</a>
        </p>
    </div>
    {/* Add this line */}
    <div className="connectFooterBar">© 2026 EduTrack | Developed by Tejas Ambaliya</div>
</div>
        </div>
    }
    </>
  )
}

export default Contact
