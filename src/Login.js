
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Swal from 'sweetalert2'
import { Navigate } from 'react-router-dom';
import icon from './images/icon.png'
import './login.css'
function Login() {
 
    const [emailValue, setEmailValue] = useState('');
    const [passValue, setpassValue] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = () => {
        if (emailValue === '') {
            Swal.fire({
                title: "Please Write Your Email !",
                icon: "question"
            });
        } else if (!emailValue.includes('@gmail.com')) {
            Swal.fire({
                title: "Please Write @gmail.com !",
                icon: "question"
            });
        }
        else if (passValue === '') {
            Swal.fire({
                title: "Please Write Your Password !",
                icon: "question"
            });
        } else {

            setLoggedIn(true);
        }

    };


    if (loggedIn) {
        return <Navigate to="/home" />;
    }
    const handleInputChange = (event) => {
        setEmailValue(event.target.value);
    };

    const handlepassChange = (event) => {
        setpassValue(event.target.value);
    };

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <div className="login">
                    <div className='login1'>
                        <h1>Welcome <img style={{ width: '20%' }} src={icon} /></h1>

                        <FloatingLabel

                            label="Email Id"
                            className="mb-3"
                            value={emailValue}
                            onChange={handleInputChange}
                            style={{ width: '100%', color: 'black' }} >
                            <Form.Control id='mail' type="email" placeholder="Name" />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Password" style={{ width: '100%', color: 'black' }}>
                            <Form.Control type="password" value={passValue} onChange={handlepassChange} placeholder="Password" />
                        </FloatingLabel>

                        <Button onClick={handleSubmit} style={{ margin: '20px' }} variant="primary">Login</Button>


                    </div>
                </div>
            </div>

        </>
    )
}
export default Login;