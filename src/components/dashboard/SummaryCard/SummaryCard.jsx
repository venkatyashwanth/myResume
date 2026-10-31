import styles from './SummaryCard.module.scss'

function SummaryCard({ label, value, detail, icon: Icon, tone }) {
  return (
    <article className={styles.card}>
      <div className={`${styles.iconWrap} ${styles[tone]}`}>
        <Icon aria-hidden="true" size={19} />
      </div>
      <div className={styles.content}>
        <p className={styles.label}>{label}</p>
        <p className={styles.value}>{value}</p>
        <p className={styles.detail} title={detail}>
          {detail}
        </p>
      </div>
    </article>
  )
}

export default SummaryCard
