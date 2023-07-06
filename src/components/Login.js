import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Theme from './Theme';
const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/GameStart")
                }
            }
        }

    }

    return (
        <React.Fragment>
            <section className="container">
                <div className="login-container">
                    <div className="circle circle-one"></div>
                    <div className="form-container">
                        <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
                        <h1 className="opacity">LOGIN</h1>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control className='input' type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Control className='input' type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className='opacity' onClick={addData} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <div className="register-forget opacity">
                            <a href="/">REGISTER</a>
                            <a href="/GameStart">Play As Guest</a>
                            
                        </div>
                    </div>
                    <div className="circle circle-two"></div>
                </div>
                <div class="theme-btn-container"></div>
            </section>
            <Theme />
        </React.Fragment>
    )
}

export default Login