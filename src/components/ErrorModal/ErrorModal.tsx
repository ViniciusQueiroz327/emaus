import styles from "./ErrorModal.module.css";

interface ErrorModalProps {
  open: boolean;
  onClose: () => void;

  title?: string;
  message?: string;
  emoji?: string;
}

export default function ErrorModal({
  open,
  onClose,

  title = "VAZA!",
  message = "Esse site não é para você.",
  emoji = "😠💢",
}: ErrorModalProps) {
  if (!open) return null;

  return (
    <>
      <div
        className={styles.overlay}
        onClick={onClose}
      />

      <div className={styles.modal}>
        <button
          className={styles.close}
          onClick={onClose}
        >
          ✕
        </button>

        <div className={styles.icons}>
          {emoji}
        </div>

        <h2>{title}</h2>

        <p>
          {message}
        </p>
      </div>
    </>
  );
}