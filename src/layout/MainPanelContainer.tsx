import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../actions/actionCreators';
import './MainPanelContainer.scss';

export default function MainPanelContainer() {
  const dispatch = useDispatch();
  return (
    <section className="main-panel">
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
