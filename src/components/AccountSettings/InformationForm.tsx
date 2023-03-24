import React, { useEffect, useState } from 'react';
import { AccountAPI } from '../../api/AccountAPI';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/useTypedSelector';
import Loader from '../UI/Loader';
import { FileInput } from './FileInput';
import { InputField } from './InputField';

export const InformationForm = () => {
  const { username, name, clan } = useTypedSelector((state) => state.account);
  const [usernameValue, setUsernameValue] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [clanValue, setClanValue] = useState('');
  const [success, setSuccess] = useState(false);
  const [avatarImage, setAvatarImage] = useState<File | null>(null);
  const { editAccountInfo } = useActions();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (username) setUsernameValue(username);
    if (name) setNameValue(name);
    if (clan) setClanValue(clan);
  }, [username, name, clan]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess(false);
    const formData = new FormData();
    formData.append('newUsername', usernameValue);
    formData.append('name', nameValue);
    formData.append('clan', clanValue);
    if (avatarImage) formData.append('avatarImage', avatarImage);
    try {
      setLoading(true);
      const data = await AccountAPI.editInfo(formData);
      if (data) {
        editAccountInfo(data);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 4000);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      {loading && (
        <div className="form__loader">
          <Loader />
        </div>
      )}
      <div className={`form__success ${success ? '' : 'hidden'}`}>
        <i className="icon-moon icon-moon-user"></i>
        Info updated successfully
      </div>
      <h3 className="title">INFORMATION</h3>
      <div className="form__content">
        <FileInput setImage={setAvatarImage} success={success} />
        <InputField title="Username" value={usernameValue} setValue={setUsernameValue} />
        <InputField title="Name" value={nameValue} setValue={setNameValue} />
        <InputField title="Clan" value={clanValue} setValue={setClanValue} />
      </div>
      <button className="btn" type="submit">
        Update
      </button>
    </form>
  );
};
