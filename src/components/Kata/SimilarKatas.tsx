import React, { useEffect, useState } from 'react';
import { KataAPI } from '../../api';
import { KataInterface } from '../../types/kata';
import Loader from '../UI/Loader';
import { KataInfo } from './KataInfo';
import { KataLanguage } from './KataLanguage';
import { TagsBlock } from './TagsBlock';

export const SimilarKatas = ({ data }: { data: KataInterface | null }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [similarKatas, setSimilarKatas] = useState<KataInterface[]>([]);

  useEffect(() => {
    if (data) {
      setIsLoading(true);
      KataAPI.getRandom(4, data.tags.join(','))
        .then((res) => setSimilarKatas(res))
        .finally(() => setIsLoading(false));
    }
  }, [data]);

  return (
    <div className="section kata-details">
      <h3 className="kata-details__title">Similar kata:</h3>
      <div className="kata-details__similar">
        {isLoading && <Loader />}
        {similarKatas.length
          ? similarKatas.map((kata) => (
              <div key={kata.id} className="kata-details__similar-item">
                <div className="top">
                  <KataInfo data={kata} />
                  <KataLanguage kataId={kata.id} />
                </div>
                <TagsBlock tags={kata.tags} />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};
