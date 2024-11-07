import React from "react";

const FAQItem = ({ question, answer, id }) => {
  return (
    <div className="card">
      <div className="card-header" id={`faqHeading${id}`}>
        <h2 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            data-target={`#faqCollapse${id}`}
            aria-expanded="true"
            aria-controls={`faqCollapse${id}`}
          >
            {question}
          </button>
        </h2>
      </div>
      <div
        id={`faqCollapse${id}`}
        className="collapse"
        aria-labelledby={`faqHeading${id}`}
        data-parent="#faqAccordion"
      >
        <div className="card-body">{answer}</div>
      </div>
    </div>
  );
};

export default FAQItem;
