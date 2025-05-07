import React from "react";
import PropTypes from "prop-types";

const FAQItem = ({ question, answer, id, isOpenInitially = false, parentId }) => {
  const collapseId = `faqCollapse${id}`;
  const headingId = `faqHeading${id}`;

  const collapseClassNames = ["collapse", "text-white"];
  if (isOpenInitially) {
    collapseClassNames.push("show");
  }

  return (
    <div className="card bg-dark">
      <div className="card-header bg-dark" id={headingId}>
        <h2 className="mb-0">
          <button
            className="btn btn-link text-white"
            type="button"
            data-toggle="collapse"
            data-target={`#${collapseId}`}
            aria-expanded={isOpenInitially}
            aria-controls={collapseId}
          >
            {question}
          </button>
        </h2>
      </div>
      <div
        id={collapseId}
        className={collapseClassNames.join(" ")}
        aria-labelledby={headingId}
        {...(parentId && { "data-parent": parentId })}
      >
        <div className="card-body">{answer}</div>
      </div>
    </div>
  );
};

FAQItem.propTypes = {
  /**
   * The question text for the FAQ item.
   */
  question: PropTypes.string.isRequired,
  /**
   * The answer content for the FAQ item. Can be a string or JSX.
   */
  answer: PropTypes.node.isRequired,
  /**
   * A unique identifier for the FAQ item, used for ARIA attributes and targeting.
   */
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isOpenInitially: PropTypes.bool,
  parentId: PropTypes.string,
};

export default FAQItem;
