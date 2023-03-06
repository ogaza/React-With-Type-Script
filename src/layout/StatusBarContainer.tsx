import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';
import './StatusBar.scss';

export default function StatusBarContainer() {
  const modalIsVisible = useSelector((state: IAppState) => state.modal.isVisible);

  return (
    <section className="status-bar">
      This is status bar. Modal is shown: {modalIsVisible ? 'true' : 'false'}
    </section>
  );
}
