import styles from './Main.module.scss'
import Image from 'next/image'
import { marcellus } from '../fonts'
import Button from './Button'

export default function Main() {
    return (
        <main className={styles.main}>
            <Image
                className={styles.bg}
                src="/bg-main.jpg"
                fill={true}
                priority
            />
            <div className={styles.container}>
                <h1 className={`${marcellus.className} ${styles.title}`}>Recupere o seu Bem-Estar
                através da Respiração</h1>
                <p className={styles.p}>Aprenda técnicas de <strong>Breathwork</strong> capazes de restabelecer sua autocompreensão e autocontrole psicológico e corporal.</p>
                <Button section="main">TENHO INTERESSE</Button>
            </div>
            <Image
                    className={styles.img}
                    src="/ale-main.png"
                    width={1066}
                    height={1600}
                    priority
                />
        </main>
    )
}