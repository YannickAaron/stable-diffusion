import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { store, useAppDispatch } from '../../../app/store';
import IAIIconButton from '../../../common/components/IAIIconButton';
import useCheckParameters from '../../../common/hooks/useCheckParameters';

export default function AddToQueueButton() {
  const dispatch = useAppDispatch();
  const isReady = useCheckParameters();

  const handleClickAddToQueue = () => {
    // dispatch(addToQueue());
    console.log(store.getState().options);
  };

  return (
    <IAIIconButton
      icon={<MdAddCircle />}
      tooltip="Add to Queue"
      aria-label="add to queue"
      isDisabled={!isReady}
      onClick={handleClickAddToQueue}
      className="addToQueue-btn"
    />
  );
}
