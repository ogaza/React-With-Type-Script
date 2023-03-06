import * as React from 'react';
import { useSelector } from 'react-redux';
import { IAppState } from '../store/state';

export default function StatusBarContainer() {
  const modalIsVisible = useSelector((state: IAppState) => state.modal.isVisible);

  return <section>This is status bar. Modal is shown: {modalIsVisible ? 'true' : 'false'}</section>;
}
