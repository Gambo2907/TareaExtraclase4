import { useState, useEffect } from "react";
import UsersList from './UsersList';

const Home = () => {
    //Variables Reactivas
    const [users, setUsuarios] = useState(null);

    //UseEffect Hook
    useEffect(() =>{
        fetch('http://localhost:3000/api/getUsuarios')
        .then(res =>{
            console.log(res);
            return res.json();
        })
        .then((data)=>{
            setUsuarios(data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, []);
    return (
        <div className = "home">
            <h2>My Users</h2>
            {users && <UsersList users = {users}></UsersList>}
        </div>
    );
}

export default Home;