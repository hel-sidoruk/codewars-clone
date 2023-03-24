import React from 'react';

const content = [
  { title: '75K+', text: 'Community members added every month' },
  { title: '1MM+', text: 'Kata completed every month' },
  { title: '9K+', text: 'Kata created by our community' },
];

export const HomeCommunity = () => {
  return (
    <>
      <div className="container container_small">
        <h2 className="block-title">An engaged software development community</h2>
        <p className="text block-text">
          Codewars is a collective effort by its users. They are creators—authoring kata to teach
          various techniques, solving kata with solutions that enlighten others, and commenting with
          constructive feedback.
        </p>
      </div>
      <div className="home__counter">
        {content.map(({ title, text }) => (
          <div key={title} className="counter__item">
            <p className="title">{title}</p>
            <p className="text">{text}</p>
          </div>
        ))}
      </div>
    </>
  );
};
