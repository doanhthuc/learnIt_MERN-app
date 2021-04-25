import React from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import AlertMessage from '../layout/AlertMessage';

const RegisterForm = () => {
    // Context
    const { registerUser } = useContext(AuthContext);

    // Router
    // const history = useHistory();

    const [alert, setAlert] = useState(null);

    // Local state
    const [registerForm, setRegisterForm] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const { username, password, confirmPassword } = registerForm;

    const onChangeRegisterForm = (event) =>
        setRegisterForm({
            ...registerForm,
            [event.target.name]: event.target.value,
        });

    const register = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setAlert({
                type: 'danger',
                message: 'Password do not match with confirm',
            });
            setTimeout(() => setAlert(null), 5000);
            return;
        }
        try {
            const registerData = await registerUser(registerForm);
            if (registerData.success) {
                // history.push('/dashboard');
            } else {
                setAlert({ type: 'danger', message: registerData.message });
                setTimeout(() => setAlert(null), 5000);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Form className="my-4" onSubmit={register}>
                <AlertMessage info={alert} />
                <FormGroup>
                    <FormControl
                        type="text"
                        placeholder="Username"
                        name="username"
                        required
                        value={username}
                        onChange={onChangeRegisterForm}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder="Password"
                        name="password"
                        required
                        value={password}
                        onChange={onChangeRegisterForm}
                    />
                </FormGroup>
                <FormGroup>
                    <FormControl
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={onChangeRegisterForm}
                    />
                </FormGroup>
                <Button variant="success" type="submit">
                    Register
                </Button>
            </Form>
            <p>
                {`Already have an acount?  `}
                <Link to="/login">
                    <Button variant="info" size="sm" className="m1-2">
                        Login
                    </Button>
                </Link>
            </p>
        </>
    );
};

export default RegisterForm;
