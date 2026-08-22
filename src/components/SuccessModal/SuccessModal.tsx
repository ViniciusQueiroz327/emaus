import styles from "./SuccessModal.module.css";

interface Props {
  open: boolean;
}

export default function SuccessModal({
  open,
}: Props) {
  if (!open) return null;

  return (
    <>
      <div className={styles.overlay} />

      <div className={styles.modal}>
        <div className={styles.emoji}>
          ❤️
        </div>

        <h2>
          Acertôôô...
        </h2>

        <p>
          ✨ Desbloqueando...
        </p>
      </div>
    </>
  );
}