import React, { useEffect, useState } from 'react'

export default function Users() {
    const [users, setUsers] =useState([]);
    const fetchUsers = async ()=> {
      

        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    }
    //useEffect nujen wtobi on ne zalupilsya
    useEffect(()=> {
        fetchUsers();
    }, []);
    return (
        <ul className="users">
        {users.map((user) => (
          <li key={user.id}>
            <h3>Name: {user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    )
}
