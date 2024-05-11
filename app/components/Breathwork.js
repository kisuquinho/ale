import styles from './Breathwork.module.scss'
import { marcellus } from '../fonts'

export default function Breathwork() {

    return (
        <section className={styles.breathwork}>
            <img className={styles.elipse} src="/elipse.png" alt="" />
            <img src="/anchor.svg" alt="Ícone de Âncora" />
            <h3 className={`${marcellus.className} ${styles.title}`}>Mas o que é o Breathwork?</h3>
            <div className={styles.ps}>
                <p className={styles.p}>
                O Breathwork, traduzido literalmente como “trabalho de respiração”, refere-se a uma variedade de técnicas terapêuticas que utilizam a respiração “consciente e controlada” como uma ferramenta para promover o bem-estar emocional, mental e físico.
                </p>
                <p className={styles.p}>
                Nos dias atuais, nunca foi tão necessário o equilíbrio do nosso ser, pois vivemos imersos em fatores estressantes e que causam ansiedade o tempo todo.
                </p>
                <p className={styles.p}>
                Diversos estudos científicos descobriram que através da nossa respiração de forma “consciente” e não automática, podemos assumir o autocontrole emocional, ter mais  clareza e calma para tomar decisões importantes, viver no aqui e no agora com mais foco e determinação, dormir melhor e muitos outros benefícios.
                </p>
                <p className={styles.p}>
                O Breathwork usa uma ferramenta sem nenhum custo e que todos temos: a nossa respiração!
                </p>
                <p className={styles.p}>
                Então, te convido a vivenciar esta experiência em sua vida!
                </p>
                <p className={styles.p}>
                Será uma honra pra mim te conduzir!
                </p>
                <h6 className={styles.author}>- Alessandra Montezano</h6>
            </div>
        </section>
    )
}