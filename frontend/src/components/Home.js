import React, { useEffect, useState } from 'react';

const Home = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <div>
            <h1>Welcome to Vacation Planning</h1>
            {user ? <h2>Hello, {user.name}!</h2> : <h2>Please log in or sign up.</h2>}
        </div>
    );
};

export default Home;
