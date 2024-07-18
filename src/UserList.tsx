import "./UserList.css";

type Props = {
  users: { id: string; name: string; age: number }[];
};

const UserList = (props: Props) => {
  return (
    <div>
      <ul className="user-list-body">
          {props.users.map((v) => {
            return (
              <li key={v.id}>
                {v.name} {v.age}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default UserList;