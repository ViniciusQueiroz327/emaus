import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ErrorModal from "../ErrorModal/ErrorModal";
import SuccessModal from "../SuccessModal/SuccessModal";

import styles from "./DateChallenge.module.css";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DateChallenge({
  open,
  onClose,
}: Props) {
  const [date, setDate] = useState("");

  const [showError, setShowError] =
    useState(false);

  const [showSuccess, setShowSuccess] =
    useState(false);

  const navigate = useNavigate();

  if (!open) return null;

  const handleCheck = () => {
    if (date === "2026-01-16") {
      setShowSuccess(true);
      setTimeout(() => {
        navigate("/firstDay");
      }, 2500);
      return;
    }

    setShowError(true);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>📅</h2>

        <h3>
          Tem uma data muito especial...
        </h3>

        <p>
          Será que você lembra?
        </p>

        <input
          type="date"
          value={date}
          onChange={(e) =>
            setDate(e.target.value)
          }
        />

        <div className={styles.actions}>
          <button
            onClick={onClose}
            className={styles.cancel}
          >
            Voltar
          </button>

          <button
            onClick={handleCheck}
            className={styles.confirm}
          >
            Confirmar
          </button>
        </div>
      </div>
      <SuccessModal
        open={showSuccess}
      />
      <ErrorModal
        open={showError}
        onClose={() => setShowError(false)}
        emoji="😜"
        title="Errouuuu"
        message="Tenta lembrar mais um tico be... ❤️"
      />
    </div>
  );
}