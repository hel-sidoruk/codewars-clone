import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';

export const KataLanguage = ({ kataId }: { kataId: string }) => {
  const [status, setStatus] = useState('');
  const { trainedKatas, solvedKatas } = useTypedSelector((state) => state.account);

  useEffect(() => {
    if (trainedKatas && trainedKatas.includes(kataId)) setStatus('trained');
    else if (solvedKatas && solvedKatas.includes(kataId)) setStatus('solved');
    else setStatus('');
  }, [trainedKatas, solvedKatas, kataId]);

  return (
    <div className="kata-language">
      <i className={`icon-moon icon-moon-javascript ${status}`}></i>
      <span>Javascript</span>
    </div>
  );
};
