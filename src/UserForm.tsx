import "./UserForm.css"
import { useState } from "react"

const UserForm = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0)

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    };

    const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
        const age = Number(e.target.value)
        setAge(age)
    }

    const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        const user = { id: Math.random().toString(), name, age }
        setName("")
        setAge(0)
        console.log('submit: ', user)
    }

    return (
        <div>
            <div className="content-body">
                <h1>Name is {name}</h1>
                <form className="content-form">
                    <label>Name:</label>
                    <input value={name} type="text" onChange={(e) => onChangeName(e)} />
                    
                    <label>Age:</label>
                    <input value={age} type={"number"} onChange={(e) => onChangeAge(e)} />
                    
                    <button onClick={(e) => onSubmit(e)}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default UserForm;