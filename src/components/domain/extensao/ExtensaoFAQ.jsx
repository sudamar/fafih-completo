import { useState } from 'react';

const ExtensaoFAQ = ({ groupTitle, items }) => {
  const [openItem, setOpenItem] = useState(null);

  const handleToggle = (index) => {
    setOpenItem((current) => (current === index ? null : index));
  };

  return (
    <div className="faq-container">
      {groupTitle && <h3>{groupTitle}</h3>}
      {items.map((faq, index) => (
        <div key={faq.question} className="faq-item">
          <button
            type="button"
            className={`faq-question ${openItem === index ? 'active' : ''}`}
            onClick={() => handleToggle(index)}
          >
            {faq.question}
          </button>
          <div
            className="faq-answer"
            style={{
              maxHeight: openItem === index ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s ease-out'
            }}
          >
            <p style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExtensaoFAQ;
