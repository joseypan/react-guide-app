import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div onClick={props.onConfirm} className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm}>Confirm</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
