import React from 'react';

export const TagsBlock = ({ tags }: { tags: string[] }) => {
  return (
    <div className="kata-tags">
      <i className="icon-moon icon-moon-tag "></i>
      {tags.map((tag) => (
        <div key={tag} className="keyword-tag">
          {tag}
        </div>
      ))}
    </div>
  );
};
