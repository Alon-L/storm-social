import {
  faBook,
  faFlag,
  faTags,
  faMoneyBillWave,
} from '@fortawesome/pro-light-svg-icons';
import React from 'react';
import { useSelector } from 'react-redux';
import FaqSection, { FaqSectionProps } from './section/FaqSection';
import FaqSectionSelector, {
  FaqSectionSelectorProps,
} from './section/FaqSectionSelector';
import { getSelected } from '../../../features/faqSectionSlice';

const faqSections: (FaqSectionSelectorProps & FaqSectionProps)[] = [
  {
    icon: faFlag,
    title: 'Common Questions',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex excepturi ipsum molestias perspiciatis praesentium quis sed sequi, voluptate? Animi atque consequuntur dolorem incidunt libero quam quibusdam quidem similique. Expedita, iure.',
    questions: [],
  },
  {
    icon: faTags,
    title: 'Products Questions',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex excepturi ipsum molestias perspiciatis praesentium quis sed sequi, voluptate? Animi atque consequuntur dolorem incidunt libero quam quibusdam quidem similique. Expedita, iure.',
    questions: [
      {
        question: 'Lorem Ipsum question',
        answer: 'Lorem Ipsum',
      },
      {
        question: 'Lorem Ipsum question 2',
        answer: 'Lorem Ipsum 2',
      },
      {
        question: 'Lorem Ipsum question 3',
        answer: 'Lorem Ipsum 3',
      },
    ],
  },
  {
    icon: faMoneyBillWave,
    title: 'Pricing & Plans',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex excepturi ipsum molestias perspiciatis praesentium quis sed sequi, voluptate? Animi atque consequuntur dolorem incidunt libero quam quibusdam quidem similique. Expedita, iure.',
    questions: [],
  },
  {
    icon: faBook,
    title: 'Usage Guides',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex excepturi ipsum molestias perspiciatis praesentium quis sed sequi, voluptate? Animi atque consequuntur dolorem incidunt libero quam quibusdam quidem similique. Expedita, iure.',
    questions: [],
  },
];

const Faq: React.FC = () => {
  const selectedSection = useSelector(getSelected);

  const selected = faqSections.find(
    faqSection => faqSection.title === selectedSection,
  );

  return selected ? (
    <div className="container text-center">
      <div className="mb-16">
        <h1 className="text-3xl font-semibold mb-8">FAQ&apos;s</h1>
        <p className="opacity-75">Hello, how can we help?</p>
      </div>
      <div className="flex justify-around mb-16">
        {faqSections.map(faqSection => (
          <FaqSectionSelector key={faqSection.title} {...faqSection} />
        ))}
      </div>
      <FaqSection {...selected} />
    </div>
  ) : null;
};

export default Faq;
