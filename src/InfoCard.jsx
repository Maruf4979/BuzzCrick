import React from 'react';

const InfoCard = ({ title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {typeof content === 'string' ? <p>{content}</p> : content}
    </div>
  );
};

export default InfoCard;