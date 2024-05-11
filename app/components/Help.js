import styles from './Help.module.scss'
import { marcellus } from '../fonts'

const items = [
    {
        id: "01",
        text: "Controle das emoções"
    },
    {
        id: "02",
        text: "Redução da ansiedade"
    },
    {
        id: "03",
        text: "Acalmar a mente"
    },
    {
        id: "04",
        text: "Controle do sono"
    },
    {
        id: "05",
        text: "Clareza mental"
    },
    {
        id: "06",
        text: "Ter mais energia"
    },
    {
        id: "07",
        text: "Conexão consigo mesmo"
    },
    {
        id: "08",
        text: "Melhora do bem-estar geral"
    }
]

export default function Help() {
    return (
        <div className={styles.help}>
            <h3 className={`${marcellus.className} ${styles.title}`}>No que posso te ajudar:</h3>
            <div className={styles.container}>
                {items.map((item) => (
                    <p className={styles.item} key={item.id}>{item.text}</p>
                ))}
            </div>
        </div>
    )
}