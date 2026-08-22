import styles from "./WelcomeModal.module.css";

interface Props {
  open: boolean;
  onStart: () => void;
}

export default function WelcomeModal({
  open,
  onStart,
}: Props) {
  if (!open) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.heart}>
          ❤️
        </div>

        <h2>Preparada?</h2>

        <p>
          Fiz isso com muito carinho.
          <br />
          Então coloque um sorriso
          no rosto antes de continuar, fedidinha minha.
        </p>

        <button onClick={onStart}>
          GO DRINKIIING
        </button>
      </div>
    </div>
  );
}