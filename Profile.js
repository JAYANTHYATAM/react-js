import React from 'react'

import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate=useNavigate();

    const logout=()=>{

        localStorage.clear();

        navigate('/Login')

    }

    return (

        <div>

            <h1>Profile</h1>

            <button onClick={logout}>Logout</button>

        </div>

    )

}