import React, { memo } from 'react';

interface Props {
  title: string;
  value: string;
  setValue: (str: string) => void;
}

export const InputField = memo(function InputField({ title, value, setValue }: Props) {
  return (
    <div className="field">
      <label className="label" htmlFor={title}>
        {title}
      </label>
      <input
        className="input"
        id={title}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
});
