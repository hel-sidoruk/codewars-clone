import dayjs from 'dayjs';
import React from 'react';
import { KataInterface } from '../../types/kata';

export const KataStats = ({ data }: { data: KataInterface }) => {
  return (
    <div className="section kata-details">
      <h3 className="kata-details__title">Stats:</h3>
      <div className="kata-stats">
        <div className="kata-stats__block">
          <div className="kata-stats__item">
            <span>Created</span>
            <span>{dayjs(data.createdAt).format('MMM DD, YYYY')}</span>
          </div>
          <div className="kata-stats__item">
            <span>Published</span>
            <span>{dayjs(data.publishedAt).format('MMM DD, YYYY')}</span>
          </div>
          <div className="kata-stats__item">
            <span>Category</span>
            <span>{data.category}</span>
          </div>
          <div className="kata-stats__item">
            <span>Total Code Submissions</span>
            <span>{data.totalAttempts}</span>
          </div>
          <div className="kata-stats__item">
            <span>Total Times Completed</span>
            <span>{data.totalCompleted}</span>
          </div>
          <div className="kata-stats__item">
            <span>Total Stars</span>
            <span>{data.totalStars}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
