import React from 'react';

const AuthoredKata = () => {
  return (
    <div className="stats__kata">
      <div className="stats__subtitle">
        <i className="icon-moon-compare icon-moon colored"></i>
        Authored Kata:
      </div>
      <div>
        <b>Created:</b> 142 (2 in beta)
      </div>
      <div>
        <b>Total Completions:</b> 1,960,288
      </div>
      <div>
        <b>Total Stars:</b> 87,189
      </div>
      <div>
        <b>Total Collected:</b> 16,770
      </div>
      <div>
        <b>Avg. Rank:</b> 5 kyu
      </div>
      <div>
        <b>Avg. Satisfaction Rating:</b> 84%
      </div>
    </div>
  );
};
export default AuthoredKata;
