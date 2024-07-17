import "./MyComponent.css"
import UserList from "./UserList"

const MyComponent = () => {
    const names = ["John", "Mike", "Camel"];
    return (
        <div>
            <div className="title">Hello, World!</div>
            <UserList names={names}></UserList>
        </div>
    )
}

export default MyComponent;