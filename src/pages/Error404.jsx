import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    }
    return (
        <div>
            <h1>404 Error page</h1>
            <p>This Page is not Found</p>
            <button onClick={handleClick} type="button" >Back to Home</button>
        </div>
    )
}

export default Error404
