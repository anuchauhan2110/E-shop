import React,{userState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import{ auth } from './firebase'

function Login(){
     
    const history = useHistory();

    const [useremail, setUserEmail] = userState('')
    const [userpassword, setUserPassword] = userState('')
    
    const loginuser = event =>{
        event.preventDefault()
        auth.sighInWithEmailAndPassword(useremail,userpassword)
        .then((auth) =>{
            history.push('/')
        })
        .catch(e => alert(e.massage))
    }

    const signupuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail,userpassword)
        .then(auth=>{
            history.push('/');
        })
        .catch(e => alert(e.massage))
    }

    return(
        <div classNamwe="login">
            <Link>
                <img classname="login__logo" src="http://upload.wikimedia.org/wikimedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo,svg.png" alt=""/>

            </Link>
            <div className="login__container">
                <h1>sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={useremail} onChange={event => setUserEmail(event.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={userpassword} onChange={event => setUserPassword(event.target.value)} type="password"/>
                    <button onClick ={loginuser} type="submit" className="login__signInButton">sign in</button>
                </form>
                <p>By signing in, you agree to Amazone's term and conditions</p>
                <button onClick={signupuser} className="login__registerButton">ceate your amazone Account</button> 
            </div>
        </div>
    )
}

export default Login