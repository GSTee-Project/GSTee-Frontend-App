import React, { useState } from 'react';
import styles from './FAQ.module.css';
import dropdownIcon from '../../../assets/images/dropdown.svg'; 

const faqData = [
  { question: 'Is GSTee free?', answer: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.' },
  { question: 'Can I use this for GST exams?', answer: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.' },
  { question: 'Do I need to download anything?', answer: 'Lorem ipsum dolor sit amet consectetur. Maecenas urna sit sed eleifend. Lorem ipsum dolor sit amet consectetur.' },
  { question: 'Is it available on mobile?', answer: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.' },
  { question: 'What does GSTee stand for?', answer: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.' },
  { question: 'Can I retake quizzes and games?', answer: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.' },
  { question: 'Is GSTee approved by universities?', answer: 'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.' },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.faq_section}>
      <h3>FAQ</h3>
      <div className={styles.faq_container}>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`${styles.faq_item} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className={styles.faq_header}>
              <p>{item.question}</p>
              <img
                src={dropdownIcon}
                alt="dropdown-icon"
                className={`${styles.icon} ${activeIndex === index ? styles.rotate : ''}`}
              />
            </div>
            {activeIndex === index && (
              <div className={styles.faq_answer}>
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
