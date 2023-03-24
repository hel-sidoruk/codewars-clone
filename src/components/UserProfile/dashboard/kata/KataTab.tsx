import React, { useEffect, useState } from 'react';
import { KataAPI } from '../../../../api';
import useTypedSelector from '../../../../hooks/useTypedSelector';
import { KataInterface } from '../../../../types/kata';
import { KataInfo } from '../../../Kata/KataInfo';
import { KataLanguage } from '../../../Kata/KataLanguage';
import Loader from '../../../UI/Loader';

export const KataTab = () => {
  const { solvedKatas } = useTypedSelector((state) => state.account);
  const [loading, setLoading] = useState(false);
  const [katas, setKatas] = useState<KataInterface[]>([]);
  useEffect(() => {
    if (solvedKatas) {
      setLoading(true);
      KataAPI.getAll(1, `progress=completed&limit=${solvedKatas.length}`)
        .then((res) => res.rows && setKatas(res.rows))
        .finally(() => setLoading(false));
    }
  }, [solvedKatas]);
  return (
    <div className="dashboard-wrapper kata-tab">
      <div className="dashboard-wrapper__sidebar">
        <div className="completed_opened">Completed ({solvedKatas?.length})</div>
      </div>
      <div className="dashboard-wrapper__content">
        {loading ? (
          <Loader />
        ) : (
          katas.map((kata) => (
            <div key={kata.id} className="katas__item kata-item section">
              <div className="kata-item__wrap">
                <KataInfo data={kata} />
              </div>
              <KataLanguage kataId={kata.id} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};
