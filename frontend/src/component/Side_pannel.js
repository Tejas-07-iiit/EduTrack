import { useDispatch } from "react-redux"
import  {comp}  from "../Redux_store/Comp"

const Side_pannel = () => {
    const dispatch = useDispatch()

    const subject = (e) => {
        e.preventDefault()
        dispatch(comp("addsubject"))
    }

    const Attendance = (e) => {
        e.preventDefault()
        dispatch(comp("Attendance"))
    }

  return (
    <>  
        <div className="pannel">
            <div className="item">
                <a href="subject" onClick={subject}>Add Subject</a>
            </div>
            <div className="item">
                <a href="subject" onClick={Attendance}>Attendance</a>
            </div>
        </div>
    </>
  )
}

export default Side_pannel