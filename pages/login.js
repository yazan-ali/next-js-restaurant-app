import { useState } from 'react';
import styles from '../styles/register_form.module.scss';
import { signIn } from 'next-auth/react';
import Router from 'next/router';
import Input from '../components/input';

function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (evt) => {
        evt.preventDefault();
        const loginInfo = {
            username: username,
            password: password,
        }

        setIsLoading(true)

        let options = { redirect: false, username, password }
        const res = await signIn("credentials", options)
        if (!res.error) {
            return Router.push("/")
        } else {
            setMessage(res.error)
        }

        setIsLoading(false)
    }


    return (
        <div className={styles.register_form}>
            <i className="fas fa-lock"></i>
            <span>Login</span>
            {message && <p>{message}</p>}
            <form className={styles.form} onSubmit={handleLogin}>
                <Input
                    label="username"
                    placeholder="ex: John Doe"
                    value={username}
                    required={true}
                    onChange={(evt) => setUsername(evt.target.value)}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    label="password"
                    required={true}
                    value={password}
                    onChange={(evt) => setPassword(evt.target.value)}
                />
                <button
                    disabled={isLoading}
                    type="submit"
                    className="primary_btn">
                    {isLoading ? "Loading..." : "Login"}
                </button>
            </form>
        </div>
    )
}

export default Login;