import "./UserForm.css";
import { useState } from "react";

type Props = {
  addUser: (user: { id: string; name: string; age: number }) => void;
};

const UserForm = (props: Props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const age = Number(e.target.value);
    setAge(age);
  };

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const user = { id: Math.random().toString(), name, age };
    props.addUser(user);
    setName("");
    setAge(0);
  };

  return (
    <div>
      <div className="content-body">
        <form className="content-form">
          <label>Name:</label>
          <input value={name} onChange={(e) => onChangeName(e)}></input>
          <label>Age:</label>
          <input value={age} onChange={(e) => onChangeAge(e)}></input>
          <button onClick={(e) => onSubmit(e)}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;