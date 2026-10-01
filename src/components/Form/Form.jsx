import styles from "./Form.module.css";

import Input from "../Input/Input";
import Button from "../Button/Button";

export default function Form() {
  return (
    <form className={styles.form}>
      <Input placeholder="Email address" />

      <Button style={{ backgroundColor: "var(--black)", color: "var(--white)" }}>Submit</Button>
    </form>
  );
}
