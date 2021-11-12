import { useState } from 'react';

const DeleteUsers = () =>{
    const [id, key_ID] = useState(0);
    
    const handleDelete = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/api/deleteUsuarios:id', {
            method : 'DELETE',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
        })
        .then(() => {
            console.log("Eliminado");
        })
    }
    return(
        <div className = "delete-users">
            <h2>Delete a User</h2>
            <form onSubmit= {handleDelete}>
                
                <label>
                    User id to delete:
                    <input type="number" required
                    value= {id} onChange={(e)=> key_ID(e.target.value)}/>
                </label>

                <button>DELETE</button>
            </form>
        </div>
    );
}
export default DeleteUsers;