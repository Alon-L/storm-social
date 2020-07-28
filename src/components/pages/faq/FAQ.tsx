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
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex excepturi ipsum molestias perspiciatis praesentium quis sed sequi, voluptate? Animi atque consequuntur dolorem incidunt libero quam quibusdam quidem similique. Expedita, iure.`,
    questions: [
      {
        question: 'Are these real giveaways?',
        answer: `Yes! all giveaway Prizes are obtained through reputable sources and are 100% authentic products.
Don't fall for scams if you can't see a giveaway posted on ourInstagram page @stormsocial, then it isn't being hosted by us. you can be assured that our giveaways are fully compliant, with real luxury prizes for our lucky winners!`,
      },
      {
        question: 'How do I enter?',
        answer: `Entry to our giveaways are super quick and easy. All you must do is follow @stormsocial & all the accounts that we are following. Make sure your account is public to be considered as a winner!`,
      },
      {
        question: 'How is the winner selected?',
        answer: `The winner is randomly generated Live on our instagram Story 1-2 Days after the giveaway is closed.Also you will see a Feed Post confirming our winner for the selected giveaway.`,
      },
      {
        question: 'No one has ever won from my country why is this?',
        answer: `Our Giveaways are worldwide competitions.
There is a higher % of entrants from the Giveaway Influencers Region or Country E.g If the Influencer is from USA the amount of entrants from USA is usually higher.
BUT EVERYONE WHO ENTERS HAS AN EQUAL CHANCE OF WINNING!
We have the right to Block anyone who speaks negatively about our unlucky winners`,
      },
      {
        question:
          'Do I have a higher chance if I get in contact with StormSocial?',
        answer: `Please do not contact us asking to win the competition this will be marked as spam and you will be disqualified.`,
      },
      {
        question: 'When do you announce the winner?',
        answer: `The winner is randomly generated Live on our instagram Story 1-2 Days after the giveaway is closed.`,
      },
    ],
  },
  {
    icon: faTags,
    title: 'Products Questions',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex excepturi ipsum molestias perspiciatis praesentium quis sed sequi, voluptate? Animi atque consequuntur dolorem incidunt libero quam quibusdam quidem similique. Expedita, iure.',
    questions: [
      {
        question: 'Are the followers real?',
        answer: `All of our growth is 100% Guaranteed organic followers.`,
      },
      {
        question: 'Are these bot followers?',
        answer: `NO! Here at Storm Social we are totally against bot accounts as these do not actually help grow your brand & in fact they negative affect your brand or influencer account as now days it is very obvious if someone has paid for bot followers.`,
      },
      {
        question: 'Will I actually get Verified if I pay for verification?',
        answer: `YES! Verification is not an easy process & that is exactly why we take of it for you.
Please be aware that you will need Article publications for us to apply for verification Click here if you do not have these publications.`,
      },
      {
        question: 'How long does Verification take?',
        answer: `Verification is not an overnight process & takes time.
If we feel that your application won’t be successful your are entitled to a 100% refund.`,
      },
      {
        question: 'How does the TikTok Algorithm work?',
        answer: `Currently the #foryoupage is manually controlled by humans that chose specific content based on the current algorithm. TikTok control what their user base sees.`,
      },
      {
        question: 'How do I receive the constantly updating algorithm?',
        answer: `We have a discord server channel for everyone who has paid for this product in which constant updated are posted there.`,
      },
      {
        question: 'What if I don’t have discord?',
        answer: `We have your email address in which we will send these updates to.`,
      },
      {
        question: 'What is a Growth slot ?',
        answer: `A Growth Slot is an alternative way to grow your account in which we host a giveaway with an influencer who informs their audience to follow everyone @stormsocial follows. If you purchase a Growth Slot you will be one of the Accounts followed by us & in order for someone to enter the Giveaway they will have to follow you!`,
      },
      {
        question: 'What if I don’t Grow as expected from a Growth Slot?',
        answer: `We will always tell you a guaranteed number of followers you will gain & sometimes you will grown even more than this guaranteed amount.`,
      },
    ],
  },
  {
    icon: faMoneyBillWave,
    title: 'Pricing & Plans',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex excepturi ipsum molestias perspiciatis praesentium quis sed sequi, voluptate? Animi atque consequuntur dolorem incidunt libero quam quibusdam quidem similique. Expedita, iure.',
    questions: [
      {
        question:
          'I have seen other websites that offer your services for cheaper, why is this ?',
        answer: `Many websites sell FAKE FOLLOWERS or Bot accounts this may be why you’ve seen followers for cheaper.Organic followers of course cost more than bot accounts as bot accounts are only a number and will not engage on your profile at all`,
      },
      {
        question: 'Why are your products this price?',
        answer: `We feel our prices are very fair compared to some of our competitors out there & we try our best to help your brand grow in the most cost effective way.`,
      },
    ],
  },
  {
    icon: faBook,
    title: 'Usage Guides',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex excepturi ipsum molestias perspiciatis praesentium quis sed sequi, voluptate? Animi atque consequuntur dolorem incidunt libero quam quibusdam quidem similique. Expedita, iure.',
    questions: [
      {
        question:
          'When I purchase a product or service from Storm Social do I have to do anything?',
        answer: `NO! When you purchase anything from us we will do the organic growth part for you.
        
Of course we advise you to be as active as you can throughout all your social media platforms to really take advantage of our products and servicesYou should be as active as you can regardless if you chose to purchase our products and services to take your online presence to the next level!
        `,
      },
      {
        question: 'I have a question that isn’t on here, WHY?',
        answer: `If you need further help feel free to contact us Via Instagram @stormsocial or our contact Email contact@stormsoical.com`,
      },
    ],
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
      <div className="flex items-stretch justify-around flex-wrap mb-16">
        {faqSections.map(faqSection => (
          <FaqSectionSelector key={faqSection.title} {...faqSection} />
        ))}
      </div>
      <FaqSection {...selected} />
    </div>
  ) : null;
};

export default Faq;
