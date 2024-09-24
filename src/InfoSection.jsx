import React from 'react';
import InfoCard from './InfoCard';

const InfoSection = () => {
  const infoCards = [
    {
      title: "Upcoming Tournaments",
      content: (
        <ul className="list-disc list-inside">
          <li>Summer Slogfest - June 15th</li>
          <li>Monsoon Madness - August 5th</li>
          <li>Autumn Cup - October 10th</li>
        </ul>
      ),
    },
    {
      title: "Cricket News",
      content: "Stay updated with the latest cricket news and scores from around the world.",
    },
    {
      title: "Training Programs",
      content: "Enhance your skills with our professional training programs for all levels.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {infoCards.map((card, index) => (
        <InfoCard key={index} title={card.title} content={card.content} />
      ))}
    </section>
  );
};

export default InfoSection;