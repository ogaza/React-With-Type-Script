import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../actions/actionCreators';

export default function MainPanelContainer() {
  const dispatch = useDispatch();
  return (
    <section>
      This is main panel
      <button
        onClick={() => {
          toggleModal();
        }}
      >
        toggle
      </button>
    </section>
  );

  function toggleModal() {
    dispatch(Actions.toggleModal());
  }
}
