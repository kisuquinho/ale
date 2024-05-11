import styles from './Button.module.scss'

export default function Button({ children, section, href, target }) {

    const className = `${styles.btn} + ${styles[section]}`

    return (
        <a className={className} href="#" target="_blank" rel="noopener noreferrer">{children}</a>
    )
}