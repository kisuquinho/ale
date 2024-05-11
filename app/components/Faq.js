import styles from './Faq.module.scss'

export default function Faq({ faq, index, toggleFAQ }) {
    const className = faq.open ? styles.open : styles.closed;

    console.log(className);

    return (
        <div
            className={"faq " + (faq.open ? "open" : "")}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className={styles.faq_question}>
                <h6 className={styles.question}>{faq.question}</h6>
                <img src="/down.svg" alt="" />
            </div>
            <p className={styles.answer}>{faq.answer}</p>
      </div>
    );
}