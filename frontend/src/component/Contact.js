import React from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {

    const comp = useSelector((state)=>state.comp.comp)

  return (
    <>{
        comp === "contact" && <div className="contactWrapper">
            <form className="contactForm">
                <h2>Get in Touch</h2>
                <div className='citem'>
                    <label>Email address</label>
                    <input type="email" placeholder="you@example.com"/>
                </div>
                <div className='citem'>
                    <label>Message</label>
                    <textarea type="text" placeholder="Write your message..."/>
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
