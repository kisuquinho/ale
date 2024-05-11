import styles from './Checkout.module.scss'
import { marcellus } from '../fonts'
import Button from './Button'

const items = [
    {
        id: "01",
        icon: "/calendar.svg",
        text: <p className={styles.p}>8 mentorias com encontros semanais</p>
    },
    {
        id: "02",
        icon: "/globe.svg",
        text: <p className={styles.p}>Comunidade dos alunos no WhatsApp</p>
    },
    {
        id: "03",
        icon: "/help.svg",
        text: <p className={styles.p}>Suporte para dúvidas no WhatsApp por 3 meses</p>
    },
    {
        id: "04",
        icon: "/link.svg",
        text: <p className={styles.p}>Materiais de apoio vitalícios</p>
    },
    {
        id: "05",
        icon: "/check.svg",
        text: <p className={styles.p}>Satisfação garantida</p>
    },
    {
        id: "06",
        icon: "/award.svg",
        text: <p className={styles.p}><strong>Bônus:</strong> Sessões rápidas de respiração de 3 a 5 minutos para fazer onde e quando quiser</p>
    }
]

export default function Checkout() {
    return (
        <div className={styles.checkout}>
            <aside className={styles.bepart}>
                <h3 className={`${marcellus.className} ${styles.title}`}>Faça parte da Comunidade Respira</h3>
                <div className={styles.container}>
                    {items.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <img src={item.icon} alt="" />
                            {item.text}
                        </div>
                    ))}
                </div>
            </aside>
            <div className={styles.pricing}>
                <p className={styles.p}>Por apenas:</p>
                <h6 className={styles.price}>96<span className={styles.cents}>,49</span></h6>
                <p className={styles.p2}>ou 440,00 à vista</p>
                <Button section="checkout">EU QUERO</Button>
            </div>
        </div>
    )
}