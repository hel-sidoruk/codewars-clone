import React, { useEffect, useState } from 'react';
import useTypedSelector from '../../hooks/useTypedSelector';

export const KataLanguage = ({ kataId }: { kataId: string }) => {
  const [status, setStatus] = useState('');
  const { trainedKatas, solvedKatas } = useTypedSelector((state) => state.account);

  useEffect(() => {
    console.log('trainedKatas?.includes(kataId) ', trainedKatas?.includes(kataId));
    console.log('solvedKatas?.includes(kataId) ', solvedKatas?.includes(kataId));
    trainedKatas?.includes(kataId) && setStatus('trained');
    solvedKatas?.includes(kataId) && setStatus('solved');
  }, [trainedKatas, solvedKatas]);

  return (
    <div className="kata-language">
      <i className={`icon-moon icon-moon-javascript ${status}`}></i>
      Javascript
    </div>
  );
};
