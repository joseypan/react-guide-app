import styles from "./NewUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
const NewUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);
  const submitHandler = (e) => {
    // 对数据进行组装
    e.preventDefault();
    // 对数据进行校验
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Input Error",
        errorMessage: "Username or Age is wrong (non-empty value)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Age Invalid",
        errorMessage: "Age is invalid (>1)",
      });
      return;
    }
    props.onAdd(username, age);
    setUsername("");
    setAge("");
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const onConfirm = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          onConfirm={onConfirm}
          title={error.title}
          errorMessage={error.errorMessage}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          ></input>
          <label>Age(Years)</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleAgeChange}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};
export default NewUser;
