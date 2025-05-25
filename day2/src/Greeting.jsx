import React from 'react'

export default function Greeting({ cred , loginStyle,name }) {
    // conditional rendering using if else
    if (!cred) {
        return (
            <div style={loginStyle}>Hey! Welcome to the login page. Please login to use services</div>
        )
    } else {
        return (
            <div>Hey {name}! Welcome to the home page. I hope you will enjoy ur day</div>
        )
    }
}
