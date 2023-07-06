import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignIn.css'
import Theme from './Theme';
const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
        password: ""
    })

    const data = '';
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

        const { name, email, date, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!', {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter valid email addres', {
                position: "top-center",
            });
        } else if (date === "") {
            toast.error('date field is requred', {
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
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));

        }

    }

    return (
        <React.Fragment>
            <section class="container">
                <div class="login-container">
                    <div class="circle circle-one"></div>
                    <div class="form-container">
                        <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" class="illustration" />
                        <h1 class="opacity">SIGN UP</h1>
                        <Form >
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="text" className='input' name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="email" name='email' className='input' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">

                                <Form.Control className='input' onChange={getdata} name='date' type="date" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">

                                <Form.Control type="password" name='password' className='input' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='register-forget opacity'>Already Have an Account? <span><NavLink to="/login">LogIn</NavLink></span> </p>
                    </div>
                    <div class="circle circle-two"></div>
                </div>
                <Theme />
            </section>
            
        </React.Fragment >
    )
}

export default Home