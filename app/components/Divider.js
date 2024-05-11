import styles from './Divider.module.scss'

export default function Divider({ size }) {

    const className = `${styles.divider} + ${styles[size]}`

    return (
        <div className={className}>
            <div className={styles.lline}></div>
            <div className={styles.dot}></div>
            <div className={styles.rline}></div>
        </div>
    )
}