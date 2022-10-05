import "./App.css";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/UserList/UserList";
import { useState } from "react";
function App() {
  const [userList, setUserList] = useState([]);
  const onAdd = (username, age) => {
    setUserList((prevList) => [
      ...prevList,
      { name: username, age, id: Math.random().toString() },
    ]);
  };
  return (
    <div className="App">
      <NewUser onAdd={onAdd} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
