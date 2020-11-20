import React, { useState } from 'react'
import { loginUser } from '../lib/auth'
import Router from 'next/router'

const LoginForm = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
        error: '',
        isLoading: false
    });

    const handleChange = event => {
        setState({ 
            ...state,
            [event.target.name]: event.target.value })
    };

    const handleSubmit = event => {
        const {email, password} = state
        event.preventDefault();
        setState({ error: '', isLoading: true});
        loginUser(email, password).then(() => {
            Router.push('/profile');
        })
        .catch(showError)
    };

    const showError = err => {
        console.error(err);
        const error = err.response && err.response.data || err.message;
        setState({ error, isLoading: false });
    }

    const {email, password, error, isLoading} = state;

        return (
            <form onSubmit={handleSubmit}>
            <div><input type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleChange}
            /></div>
            <div><input type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={handleChange}
            /></div>
            <button disabled={isLoading} type="submit">{isLoading ?"Sending" : "Submit"}</button>
            {error && <div>{error}</div>}
        </form>
        )
}

export default LoginForm
