import { faMinus, faPlus } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import SmoothCollapse from 'react-smooth-collapse';

export interface FaqQuestion {
  question: string;
  answer: string;
}

const FaqSectionQuestion: React.FC<FaqQuestion> = (props: FaqQuestion) => {
  const { question, answer } = props;

  const [active, setActive] = useState(false);

  return (
    <div className="py-5 border-b-1 border-gray-300 text-left">
      <button
        type="button"
        onClick={() => setActive(!active)}
        className="w-full flex justify-between"
      >
        <div className="text-dot">
          <p className="inline-block ml-2 font-medium">{question}</p>
        </div>
        <div>
          <FontAwesomeIcon icon={active ? faMinus : faPlus} />
        </div>
      </button>
      <SmoothCollapse expanded={active}>
        <div className="mt-4 mx-6 whitespace-pre-line">{answer}</div>
      </SmoothCollapse>
    </div>
  );
};

export default FaqSectionQuestion;
