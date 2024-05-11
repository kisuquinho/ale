import styles from './Meet.module.scss'
import { marcellus } from '../fonts'

const cards = [
    {
        icon: "/wind.svg",
        title: "mentorias",
        text: "8 Sessões com Teoria e Práticas de Breathwork, do Nível 1 ao Nível 3"
    },
    {
        icon: "/slack.svg",
        title: "testes",
        text: "Testes de Saúde e Desempenho Respiratório (BOLT e TELL Score)"
    },
    {
        icon: "/box.svg",
        title: "protocolo",
        text: "Protocolo Personalizado de Respiração Funcional de 3-5 minutos"
    },
]
export default function Meet() {
    
    return (
        <section className={styles.meet}>
            <h3 className={`${marcellus.className} ${styles.title}`}>Conheça a <br /> Comunidade Respira</h3>
            <p className={styles.p}>
            Você será guiado pela mentora de forma gradual e progressiva sobre técnicas de Breathwork capazes de acalmar a mente, reduzir o estresse e promover o bem-estar geral.
            </p>
            <div className={styles.wrapper}>
                {cards.map((card) => (
                    <div className={styles.card}>
                        <img src={card.icon} alt="" />
                        <h6 className={styles.text}>
                            {card.text}
                        </h6>
                    </div>
                ))}
            </div>
            <div className={styles.file}>
                <img src="/file.svg" alt="Ícone de arquivo" />
                <a className={styles.a} href="http://" target="_blank" rel="noopener noreferrer">Cronograma</a>
            </div>
        </section>
    )
}