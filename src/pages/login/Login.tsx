import PasswordForm from "../../components/PasswordForm/PasswordForm";

import styles from "./Login.module.css";

export default function Login() {
  return (
    <main className={styles.container}>
      <div className={styles.hearts}>
        {Array.from({ length: 25 }).map((_, index) => (
          <span
            key={index}
            className={styles.heart}
          >
            ❤️
          </span>
        ))}
      </div>

      <div className={styles.card}>
        <h1>
          Antes de tudo,
          <br />
          para...?
        </h1>

        <PasswordForm />
      </div>
    </main>
  );
}