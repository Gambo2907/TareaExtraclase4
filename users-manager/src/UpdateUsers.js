import { useState } from 'react';

const UpdateUsers = () =>{
    const [nombre, updateUsuarios] = useState('');
    const [id, key_ID] = useState(0);
    const [contraseña, updateContraseña] = useState('');

    const handlePut = (e) => {
        e.preventDefault();
        const updateUserObj = {nombre, id, contraseña};
        fetch('http://localhost:3000/api/updateUsuarios:id', {
            method : 'PUT',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body : JSON.stringify(updateUserObj)
        })
        .then(() => {
            console.log("Actualizado");
        })
    }
    return(
        <div className = "update-users">
            <h2>Update a User</h2>
            <form onSubmit= {handlePut}>
                <label>
                    User name:
                    <input type="text" required
                    value= {nombre} onChange={(e)=> updateUsuarios(e.target.value)}/>
                </label>
                <label>
                    User id:
                    <input type="number" required
                    value= {id} onChange={(e)=> key_ID(e.target.value)}/>
                </label>
                <label>
                    User password:
                    <input type="text" required
                    value= {contraseña} onChange={(e)=> updateContraseña(e.target.value)}/>
                </label>

                <button>UPDATE</button>
            </form>
        </div>
    );
}
export default UpdateUsers;