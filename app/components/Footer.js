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
          question: "Quais alimentos e produtos podem ser doados?",
          answer: "As doações aceitas para a APOV são: leite, óleo, feijão, arroz, farinha de trigo, achocolatado, polpa de suco concentrado, fermento, amido de milho, triguilho (trigo kibe), macarrão, detergente, desinfetante, álcool líquido, bucha de pia, água sanitária, papel higiênico, perfex, coco ralado, extrato de tomate e biscoito.",
          open: false
        },
        {
          question: "Posso participar da doação de cabelos se meu cabelo tiver química?",
          answer: "SIM, o uso de produtos (químicos ou naturais) no cabelo não é critério de exclusão para a doação.",
          open: false
        },
        {
          question:
            "A cor do cabelo importa?",
          answer: "NÃO, reforçamos que a diversidade de cores e texturas de cabelos é de extremo valor, ppois contribui para o pertencimento de quem os recebe.",
          open: false
        },
        {
          question:
            "Posso levar uma mecha previamente cortada?",
          answer: "SIM, mas reforçamos as condições: doação mínima de 20cm e mecha seca e limpa, amarrada com elástico e armazenada em saco plástico.",
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