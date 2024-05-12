import styles from './Button.module.scss'

export default function Button({ children, section, href, target }) {

    const className = `${styles.btn} + ${styles[section]}`

    return (
        <a className={className} href="https://pay.infinitepay.io/alemontezano/482,46" target="_blank" rel="noopener noreferrer">{children}</a>
    )
}