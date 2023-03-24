import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountAPI } from '../../api/AccountAPI';
import useActions from '../../hooks/useActions';
import { Dialog } from '../UI/Dialog';
import { Modal } from '../UI/Modal';

export const DeleteAccountButton = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { signOut, signOutAccount } = useActions();
  const navigate = useNavigate();

  const deleteAccount = async () => {
    await AccountAPI.delete();
    signOut();
    signOutAccount();
    navigate('/');
  };

  return (
    <>
      <button className="delete-btn btn btn-dark red" onClick={() => setIsOpened(true)}>
        Delete My Account
      </button>
      {isOpened && (
        <Modal onClose={() => setIsOpened(false)}>
          <Dialog
            onConfirm={deleteAccount}
            title="Are you sure?"
            text="Yep, I'm serious about doing this"
            cancelBtnText="Nooo stop! I was just kidding!"
          >
            You are about to delete everything you have worked so hard for. If all you wish to do is
            stop receiving notification emails you can simply turn them off without deleting your
            account.
          </Dialog>
        </Modal>
      )}
    </>
  );
};
