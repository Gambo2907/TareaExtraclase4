import {useState} from 'react';

const NewUsers = () =>{
    const [nombre, setUsuarios] = useState('');
    const [id, setID] = useState(0);
    const [contraseña, setContraseña] = useState('');

    const handlePost = (e) => {
        e.preventDefault();
        const newUserObj = {nombre, id, contraseña};
        fetch('http://localhost:3000/api/addUsuarios', {
            method : 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body : JSON.stringify(newUserObj)
        })
        .then(() => {
            console.log("Agregado");
        })
    }
    return(
        <div className = "new-users">
            <h2>Post a User</h2>
            <form onSubmit= {handlePost}>
                <label>
                    User name:
                    <input type="text" required
                    value= {nombre} onChange={(e)=> setUsuarios(e.target.value)}/>
                </label>
                <label>
                    User id:
                    <input type="number" required
                    value= {id} onChange={(e)=> setID(e.target.value)}/>
                </label>
                <label>
                    User password:
                    <input type="text" required
                    value= {contraseña} onChange={(e)=> setContraseña(e.target.value)}/>
                </label>

                <button>POST</button>
            </form>
        </div>
    );
}
export default NewUsers;