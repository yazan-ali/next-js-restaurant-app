import { useState } from 'react';
import styles from '../../styles/register_form.module.scss';
import { signIn } from 'next-auth/react';
import Router from 'next/router';
import Input from '../../components/input';

function Register() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const handleRegister = async (evt) => {
        evt.preventDefault();
        const newUser = {
            username: username,
            email: email,
            password: password,
        }

        setIsLoading(true)

        const response = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();

        if (data.auth) {
            let options = { redirect: false, username, password }
            const res = await signIn("credentials", options)
            if (!res.error) {
                return Router.push("/")
            }
        } else {
            setMessage(data.message)
        }

        setIsLoading(false)
    }


    return (
        <div className={styles.register_form}>
            <i className="fas fa-lock"></i>
            <span>Sign Up</span>
            {message && <p>{message}</p>}
            <form className={styles.form} onSubmit={handleRegister}>
                <Input
                    type="email"
                    label="email"
                    placeholder="ex: John Doe@exmaple.com"
                    value={email}
                    onChange={(evt) => setEmail(evt.target.value)}
                    required={true}
                />
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
                    {isLoading ? "Loading..." : "Sign Up"}
                </button>
            </form>
        </div>
    )
}

export default Register;