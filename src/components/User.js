import React, { useState } from 'react'

export default function User() {

    const [user, setUser] = useState(null);

    return (
        <div className="user">
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}
