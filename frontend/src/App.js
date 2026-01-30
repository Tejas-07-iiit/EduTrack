import './App.css';
import Register from './component/Register';
import axios from 'axios';
import { useEffect } from 'react';
import Home from "./component/Home"
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import  {login}  from "./Redux_store/Auth";

function App() {
    const dispatch = useDispatch();

    const auth = useSelector((state)=>state.auth.isAuth)
    
    useEffect(()=>{
      // check tocken
      const Refresh = async () => {
      
        try {
          const response = await axios.post("http://localhost:5000/refresh",{},
            {
              withCredentials : true
            }
          )
          console.log(response.data.dc)
          if(response.status === 200) {
            dispatch(login(response.data.dc))  
            // console.log(response.data, "asdfasdf")
          }
          else {
            dispatch(login(response.data.dc))
          }
        }
        catch (error) {
          console.log(error.message)
        }
      }      
      Refresh();
        
    },[auth])
    // console.log(auth)

    
  return (
    
      <>
        {auth ? <Home/> : <Register/>}
      </>
    
  );
}

export default App;
