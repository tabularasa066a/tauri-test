import "./UserList.css"

const UserList = (props: { names: string[] }) => {
    return (
        <ul className="name-list">
            {props.names.map((v) => {
                return <li>{v}</li>
            })}
        </ul>
    );
};

export default UserList;