import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./PasswordForm.module.css";

import ErrorModal from "../ErrorModal/ErrorModal";

const PASSWORD = "SEMPRE";

export default function PasswordForm() {
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (password.trim().toUpperCase() === PASSWORD) {
      navigate("/home");
      return;
    }

    setShowError(true);
  };

  return (
    <>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <input
          type="password"
          placeholder="Digite a senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          ENTRAR
        </button>
      </form>

      <ErrorModal
        open={showError}
        onClose={() => setShowError(false)}
      />
    </>
  );
}