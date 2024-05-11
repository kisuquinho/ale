import styles from './Testimonials.module.scss'
import { marcellus } from '../fonts'

export default function Testimonials() {

    return (
        <section className={styles.testimonials}>
            <img src="/edit.svg" alt="Ícone de Escrita" />
            <h3 className={`${marcellus.className} ${styles.title}`}>O que comentam...</h3>
            <div className={styles.wrapper}>
                <img className={styles.img} src="/equi.jpg" alt="Avaliação de um mentorado" />
                <img className={styles.img} src="/acad.jpg" alt="Avaliação de um mentorado" />
                <img className={styles.img} src="/aprendi.jpg" alt="Avaliação de um mentorado" />
                <img className={styles.img} src="/du.jpg" alt="Avaliação de um mentorado" />
            </div>
        </section>
    )
}