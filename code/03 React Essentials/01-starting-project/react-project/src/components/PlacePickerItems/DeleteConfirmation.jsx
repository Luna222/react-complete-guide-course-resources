import styles from '../../pages/PlacePicker/PlacePicker.module.css';

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  return (
    <div id={styles['delete-confirmation']}>
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id={styles['confirmation-actions']}>
        <button onClick={onCancel} className={styles['button-text']}>
          No
        </button>
        <button onClick={onConfirm} className={styles.button}>
          Yes
        </button>
      </div>
    </div>
  );
}
