import React, { memo } from 'react';
import { articleList, getRandomIndex } from '../utils';

const Article = memo(function Article() {
  const { title, description, previewImg, url } =
    articleList[getRandomIndex(0, articleList.length)];

  return (
    <div className="article">
      <a className="article__link" href={url} target="_blank" rel="noreferrer">
        <div className="article__preview">
          <img src={previewImg} alt="preview" />
        </div>
        <div className="article__content">
          <div className="article__title">{title}</div>
          <div className="article__description">{description}</div>
        </div>
      </a>
    </div>
  );
});

export default Article;
