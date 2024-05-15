'use client'

import styles from './About.module.scss'
import { marcellus } from '../fonts'
import Image from 'next/image'

export default function About() {
    
    function degree()  {
        document.getElementById('degree').classList.add('active_category');
        document.getElementById('mission').classList.remove('active_category');
        document.getElementById('personal').classList.remove('active_category');
        document.getElementById('p').innerHTML="Enfermeira, Terapeuta holística, Instrutora e Mentora de Breathwork - Nível 1, 2 e 3. Desde 2020, guio pessoas ao autoconhecimento e autotransformação por meio de técnicas terapêuticas como o Thetahealing®, Reiki e Quantum Being (escuta das emoções), além de Mentorias individuais e coletivas de Breathwork (presencial e online).";
    }

    function mission()  {
        document.getElementById('mission').classList.add('active_category');
        document.getElementById('degree').classList.remove('active_category');
        document.getElementById('personal').classList.remove('active_category');
        document.getElementById('p').innerHTML="Ser um canal de aprendizado e experiência do poder da respiração na vida das pessoas, auxiliando-as a encontrar o bem-estar, equilíbrio e alegria de viver com o Breathwork.";
    }

    function personal()  {
        document.getElementById('personal').classList.add('active_category');
        document.getElementById('mission').classList.remove('active_category');
        document.getElementById('degree').classList.remove('active_category');
        document.getElementById('p').innerHTML="Sou mãe, profissional de saúde e apaixonada pela vida! Sou alguém que abraça a jornada da vida com coragem, espiritualidade e determinação, alinhada a cada dia com o meu propósito de auxiliar as pessoas a conectar-se consigo mesmas e a expandir a sua consciência. Sou uma eterna aprendiz da vida, uma realizadora incansável dos meus sonhos, que acredita no poder do amor e na capacidade de recriação de sua vida por cada ser humano!";
    }

    return (
        <section className={styles.about}>
            <div className={styles.wrapper}>
                <h4 className={`${marcellus.className} ${styles.title}`}>E quem é Alê?</h4>
                <nav className={styles.nav}>
                    <h5 onClick={degree} id='degree' className={`${marcellus.className} ${styles.category} active_category`}>Formação</h5>
                    <div className={styles.dot}></div>
                    <h5 onClick={mission} id='mission' className={`${marcellus.className} ${styles.category}`}>Missão</h5>
                    <div className={styles.dot}></div>
                    <h5 onClick={personal} id='personal' className={`${marcellus.className} ${styles.category}`}>Pessoa</h5>
                </nav>
                <p id='p' className={styles.p}>Enfermeira, Terapeuta holística, Instrutora e Mentora de Breathwork - Nível 1, 2 e 3.
Desde 2020, guio pessoas ao autoconhecimento e autotransformação por meio de técnicas terapêuticas como o Thetahealing®, Reiki e Quantum Being (escuta das emoções), além de Mentorias individuais e coletivas de Breathwork (presencial e online).
</p>
            </div>
            <Image
                    className={styles.img}
                    src="/ale-about.png"
                    width={1080}
                    height={1482.35}
                    priority
            />
        </section>
    )
}