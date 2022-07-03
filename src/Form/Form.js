import { useEffect, useState } from 'react'
import './Form.css'
import flower from '../assets/flower.png'
import child from '../assets/child.png'
import motif from '../assets/motif.png'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'


export default function Form() {
    const [show, setShow] = useState(false)
    const [pass, setPass] = useState(false)
    const [visibleForm, showVisibleForm] = useState(false)

    const toggle = () => showVisibleForm(!visibleForm)


    useEffect(() => {
        const inputs = document.querySelectorAll("input")
        // console.log('inputs', inputs);

        inputs.forEach(input => {
            input.addEventListener("focus", () => {
                // console.log(input);
                let parent = input.parentNode
                parent.classList.add("active")

            })

            input.addEventListener("blur", () => {
                let parent = input.parentNode
                parent.classList.remove("active")

            })

        })
    }, [])
    
    useEffect(() => {
        const signUpBtn = document.querySelector('.signup__btn')
        const signInBtn = document.querySelector('.signin__btn')
        const signUpForm = document.querySelector('.sign__up__form')
        const signInForm = document.querySelector('.sign__in__form')
    
        signUpBtn.addEventListener("click" , (e) => {
            signInForm.classList.add("hide")
            signUpForm.classList.add("show")
            signInForm.classList.remove("show")

        })

        signInBtn.addEventListener("click" , (e) => {
            signInForm.classList.remove("hide")
            signUpForm.classList.remove("show")
            signInForm.classList.add("show")


        })

    },[])



   

    return (
        <div className="main__div">

            {/* {
                visibleForm ? ( */}



                    <div className="form__container sign__in__form">
                        <div className="form__box sign__in__box">
                            <h2>Login</h2>
                            <form action="">
                                <div className="field">
                                    <i className=''>@</i>
                                    <input type="email" placeholder="Email ID" required />

                                </div>

                                <div className="field">
                                    <i className=''>🔒</i>
                                    <input type={show ? "text" : "password"} placeholder="Password" required />
                                    <div className="eye__btn">
                                        <i className='' onClick={() => setShow(!show)}>👁</i>
                                    </div>

                                </div>

                                <div className="forgot__link">
                                    <a href="!#">Forgot Password?</a>

                                </div>

                                <button className='submit__btn'>Submit</button>

                            </form>
                            <div className="login__with">
                                <p className='text'>Or login with ...</p>
                                <div className="other__options">
                                    <a href="!#">
                                        <img src={flower} alt="" />
                                    </a>

                                    <a href="!#">
                                        <img src={motif} alt="" />
                                    </a>

                                    <a href="!#">
                                        <img src={child} alt="" />
                                    </a>
                                </div>


                            </div>



                        </div>

                        <div className="img__box sign__in__imgbox">
                            <div className="sliding__link">
                                <p>Don't have an account?</p>
                                {/* <a href="!#" className='signup__btn' onClick={toggle}>Sign up</a> */}
                                <button className='signup__btn' onClick={toggle}>Sign up</button>

                            </div>
                            <img src={image1} alt="" />
                        </div>

                    </div>

                 {/* ) : (  */}


                    <div className="form__container sign__up__form">

                        <div className="img__box sign__up__imgbox">
                            <div className="sliding__link">
                                <p>Already a user?</p>
                                {/* <a href="!#" className='signup__btn' onClick={toggle}>Sign in</a> */}
                                <button className='signin__btn' onClick={toggle}>Sign in</button>

                            </div>
                            <img src={image2} alt="" />
                        </div>

                        <div className="form__box sign__up__box">
                            <h2>Sign up</h2>

                            <div className="login__with">
                                <div className="other__options">
                                    <a href="!#">
                                        <img src={flower} alt="" />
                                    </a>

                                    <a href="!#">
                                        <img src={motif} alt="" />
                                    </a>

                                    <a href="!#">
                                        <img src={child} alt="" />
                                    </a>
                                </div>
                                <p className='text'>Or sign up with ...</p>


                            </div>

                            <form action="">
                                <div className="field">
                                    <i className=''>👩</i>
                                    <input type="text" placeholder="Full name" required />

                                </div>

                                <div className="field">
                                    <i className=''>@</i>
                                    <input type="email" placeholder="Email ID" required />

                                </div>

                                <div className="field">
                                    <i className=''>🔒</i>
                                    <input type={show ? "text" : "password"} placeholder="Password" required />
                                    <div className="eye__btn">
                                        <i className='' onClick={() => setShow(!show)}>👁</i>
                                    </div>

                                </div>

                                <div className="field">
                                    <i className=''>🔒</i>
                                    <input type={pass ? "text" : "password"} placeholder="Confirm password" required />
                                    <div className="eye__btn">
                                        <i className='' onClick={() => setPass(!pass)}>👁</i>
                                    </div>


                                </div>

                                <button className='submit__btn'>Sign up</button>

                            </form>




                        </div>



                    </div>

                {/* ) */}
            {/* }  */}



        </div>

    )
}