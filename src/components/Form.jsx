
import axios from 'axios'
import React, {useRef} from 'react'
import "./Form.css"
const Form = (props) => {
    const loginNameRef = useRef()
    const loginPassRef = useRef()
    const regNameRef = useRef()
    const regPassRef = useRef()

    const handleLogin = (e) => {
        e.preventDefault()
        let body = {
            username: loginNameRef.current.value,
            password: loginPassRef.current.value
        }
        console.log(body)
        axios
            .post('http://localhost:3000/login', body)
            .then((res) => {
                props.setAuth(true)
            })
            .catch((err) => {
                alert("Unauthorized")
            })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        let body = {
            username: regNameRef.current.value,
            password: regPassRef.current.value
        }
        axios
            .post('http://localhost:3000/register', body)
            .then((res) => {
                props.setAuth(true)
            })
            .catch((err) => {
                alert("cannot register")
                console.log(err)
            })
    }




  return (
    <div id='container'>
        <div id='formCard'>
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input className='formClass'ref={loginNameRef} type="text" placeholder='Username'/>
            <input className='formClass'ref={loginPassRef} type="Password" placeholder='Password'/>
            <button>Login</button>
        </form>
        <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <input className='formClass'ref={regNameRef} type="text" placeholder='Username'/>
            <input className='formClass'ref={regPassRef} type="Password" placeholder='Password'/>
            <button>Register</button>
        </form>
        </div>
    </div>
  )
}

export default Form