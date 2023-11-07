
import React, { useState } from "react";
import "./login.css";

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Username: ${username}, Password: ${password}`);
    };

    return (
        <section className="login">
            <div className="formContainer">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="form">

                <div>
                    <label htmlFor="username">
                        Username
                    </label>

                    <input
                        name="username"
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="password">
                        Password
                    </label>

                    <input
                        name="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
            </div>
        </section>
    );
}

