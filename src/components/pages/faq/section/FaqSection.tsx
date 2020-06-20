import React from 'react';
import FaqSectionQuestion, { FaqQuestion } from './FaqSectionQuestion';

export interface FaqSectionProps {
  title: string;
  desc: string;
  questions: FaqQuestion[];
}

const FaqSection: React.FC<FaqSectionProps> = (props: FaqSectionProps) => {
  const { title, desc, questions } = props;

  return (
    <div>
      <div className="lg:w-3/5 mx-auto mb-16">
        <h3 className="text-3xl font-semibold mb-8">{title}</h3>
        <p className="opacity-75">{desc}</p>
      </div>
      <div>
        {questions.map(question => (
          <FaqSectionQuestion key={question.question} {...question} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
