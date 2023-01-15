import React, {useState} from "react";
import "./Modal.css";
import Signup from "./Signup";
import Login  from "./Login";

const Modal = ({isActive, setState, api, setToken}) => {
const [auth, setAuth] = useState(true);
    let style = {
    display: isActive && "flex",
}
    return (
<div className="modal_cont" style={style}>
    <div className="modal">
        <div className="modal_close" onClick={() => setState(false)}/>
<h2>{auth ? "Войти" : "Зарегистрироваться"}</h2>
{auth ? <Login 
change={setAuth} 
api={api} 
close={setState} 
setToken={setToken}
/> : <Signup 
    change={setAuth} 
    api={api} 
    close={setState} 
    setToken={setToken}
    />}
    </div>
</div>
)
}

export {
    Modal
}