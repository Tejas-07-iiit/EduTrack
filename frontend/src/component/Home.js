import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser  } from '@fortawesome/free-regular-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { useState , useEffect } from 'react';
import axios from "axios"
import { useDispatch } from 'react-redux';
import {login} from "../Redux_store/Auth"
import { comp } from '../Redux_store/Comp';



const Home = () => {
  
  const user = useSelector((state) => state.auth.user) || 0
  const [path, setpath] = useState(null)
  const [imageError, setImageError] = useState(false);
  const image = useSelector((state)=> state.image1.image1)

  const dispatch = useDispatch()

    const go_about = () => {
      console.log("iamin")
      dispatch(comp("about"))
    }

    const go_contact = () => {
      dispatch(comp("contact"))
    }
    useEffect(() => {
    if (!image) return;

    const upload = async () => {
      try {
        const formdata = new FormData();
        formdata.append("profile", image);

        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/profile-picture`,
          formdata,
          { withCredentials: true }
        );

        setpath(
          `${process.env.REACT_APP_API_URL}${response.data.image}?v=${Date.now()}`
        );
        setImageError(false);
      } catch (error) {
        console.error("Upload failed", error);
      }
    };

    upload();
  }, [image]);
  
  const logout = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/logout`, {} , {
        withCredentials:true
      })

      const pld = {user : {} , at : false}

      dispatch(login(pld))
      dispatch(comp("homePage"))
      console.log(response)
    } catch (error) {
      console.log("something went wrong : " , error.message)
    }
  }

  useEffect(() => {
      if (user && user.userId) {
        setpath(`${process.env.REACT_APP_API_URL}/uploads/${user.userId}.webp?v=${Date.now()}`)
        setImageError(false);
      }
    }, [user])
    
  return (
    <>
      <div className="navbar">
          <div className="heading">
            EduTrack
          </div>
          <div className="menu">

              <div className="item">
                <div onClick={go_about}>About</div>
              </div>
              <div className="item">
                <div onClick={go_contact}>Contact</div>
              </div>

              <div className="profile">
                <div className="icon">
                  {path && !imageError ? (
                <img src={path} onError={() => setImageError(true)} alt="profile" />
              ) : (
                <FontAwesomeIcon style={{color:"white", fontSize:"25px"}} icon={faCircleUser} />
              )}
                </div>
                <div className="profilemenu">
                  <div className="pitem">
                    {<FontAwesomeIcon style={{color:"black", fontSize:"18px"}} icon={faCircleUser} />}
                    <button onClick={()=>dispatch(comp("profile"))}>
                      Profile
                    </button>
                  </div>
                  <div className="pitem">
                    <FontAwesomeIcon style={{alignItems:"center" , paddingTop:"3px" , fontSize:"18px" , color:"black"}} icon={faRightFromBracket} />
                    <button onClick={logout}>
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Home