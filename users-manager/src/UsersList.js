const UsersList = ({users}) => {
    return (
        <div className = "users-list">
            {users.map((user) => {
                <div className = "users-preview">
                    <h2>{user.nombre}</h2>
                    <p>Id: {user.id}</p>
                    <p>Contraseña: {user.contraseña}</p> 
                </div>
            })}
        </div>
    );
}

export default UsersList;