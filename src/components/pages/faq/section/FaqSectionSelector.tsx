import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected, getSelected } from '../../../../features/faqSectionSlice';

export interface FaqSectionSelectorProps {
  icon: IconDefinition;
  title: string;
}

const FaqSectionSelector: React.FC<FaqSectionSelectorProps> = (
  props: FaqSectionSelectorProps,
) => {
  const { icon, title } = props;

  const selectedSection = useSelector(getSelected);
  const dispatch = useDispatch();

  // Whether this section is the selected one
  const isSelected = title === selectedSection;

  return (
    <button
      onClick={() => dispatch(setSelected(title))}
      type="button"
      className="lg:w-1/5 md:w-1/2 rounded-lg shadow-md"
    >
      <div
        className={`faq--section--box rounded-lg transition-all duration-200 ease-in-out p-5 ${
          isSelected && 'faq--section--box__active'
        }`}
      >
        <FontAwesomeIcon
          className="faq--section--box--icon mb-2 transition-all duration-200 ease-in-out opacity-50"
          size="2x"
          icon={icon}
        />
        <p className="text-xl">{title}</p>
      </div>
    </button>
  );
};

export default FaqSectionSelector;
