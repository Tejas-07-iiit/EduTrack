const Alert = (props) => {
  return (
    
    <div className="alert alert-warning d-flex " style={{height:"30px",alignItems:"center"}} role="alert">
            {props.message}
    </div>
  )
}

export default Alert