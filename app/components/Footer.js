'use client'

import styles from './Footer.module.scss'
import { marcellus } from '../fonts'
import Faq from './Faq'
import { useState } from 'react';

const links = [
    {
        icon: '/phone.svg',
        title: "Phone",
        href: ''
    },
    {
        icon: '/mail.svg',
        title: "Email",
        href: ''
    }
]

export default function Footer() {

    const [faqs, setFaqs] = useState([
        {
          question: "Quando terei acesso ao produto?",
          answer: "Assim que realizado o pagamento terá acesso aos materiais de apoio ,... . Os 1° encontro será no dia ... às 19h30. ",
          open: false
        },
        {
          question: "Pra quem é o Breathwork? Há alguma contraindicação?",
          answer: "O Breathwork é para todos que têm o desejo de assumir o controle da própria saúde,,, ...",
          open: false
        },
        {
          question:
            "As mentorias serão disponibilizadas para re-assistir?",
          answer: "...",
          open: false
        },
        {
          question:
            "E se eu não me adaptar a esse método?",
          answer: "Caso após a 1° mentoria decidir que não é pra você, 100% do seu investimento será retornado",
          open: false
        }
    ]);

    const toggleFAQ = index => {
        setFaqs(
          faqs.map((faq, i) => {
            if (i === index) {
              faq.open = !faq.open;
            } else {
              faq.open = false;
            }
    
            return faq;
          })
        );
    };

    return (
        <footer>
            <section className={styles.faqaside}>
                <div className={styles.container}>
                    <section className={styles.faq}>
                        <h3 className={`${marcellus.className} ${styles.title}`}>Dúvidas frequentes</h3>
                        <div className={styles.faqs}>
                            {faqs.map((faq, index) => (
                                <Faq faq={faq} index={index} key={index} toggleFAQ={toggleFAQ} />
                            ))}
                        </div>
                    </section>
                    <aside className={styles.aside}>
                    <a className={styles.ig_icon} href="https://www.instagram.com/alemontezano.p/" target="_blank" rel="noopener noreferrer"><img src="/instagram.svg" alt="" /></a>
                        <h6 className={`${styles.ig_caption} ${marcellus.className}`}>Conteúdos sobre Breathwork, Thetahealing, Medicina do Cacau e muito mais!</h6>
                        <a className={`${styles.ig} ${marcellus.className}`} href="https://www.instagram.com/alemontezano.p/" target="_blank" rel="noopener noreferrer">@alemontezano.p</a>
                    </aside>
                </div>
            </section>
            <section className={styles.footer}>
                <div className={styles.container}>
                    <p className={styles.footer_p}>Site desenvolvido por <a className={styles.em} href="https://api.whatsapp.com/send/?phone=5533999904680&text=Olá!&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">Joyci</a>.</p>
                    <div className={styles.links}>
                        {links.map((link) => {
                            return (
                                <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer"><img src={link.icon} alt={link.title} /></a>
                            )
                        })}
                    </div>
                </div>
            </section>
        </footer>
    )
}