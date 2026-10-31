import styles from './PagePlaceholder.module.scss'

function PagePlaceholder({ title, description }) {
  return (
    <section className={styles.page} aria-labelledby="page-title">
      <h2 className={styles.title} id="page-title">
        {title}
      </h2>
      <p className={styles.description}>{description}</p>
    </section>
  )
}

export default PagePlaceholder
