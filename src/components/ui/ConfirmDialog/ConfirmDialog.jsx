import { useEffect, useId, useRef } from 'react'
import styles from './ConfirmDialog.module.scss'

function ConfirmDialog({
  isOpen,
  title,
  description,
  confirmLabel = 'Confirm',
  onCancel,
  onConfirm,
}) {
  const dialogRef = useRef(null)
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    const dialog = dialogRef.current

    if (!dialog) {
      return
    }

    if (isOpen && !dialog.open) {
      dialog.showModal()
    } else if (!isOpen && dialog.open) {
      dialog.close()
    }
  }, [isOpen])

  function handleCancel(event) {
    event.preventDefault()
    onCancel()
  }

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={handleCancel}
    >
      <div className={styles.content}>
        <h2 className={styles.title} id={titleId}>
          {title}
        </h2>
        <p className={styles.description} id={descriptionId}>
          {description}
        </p>
        <div className={styles.actions}>
          <button
            className={styles.cancelButton}
            type="button"
            autoFocus
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={styles.confirmButton}
            type="button"
            onClick={onConfirm}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </dialog>
  )
}

export default ConfirmDialog
