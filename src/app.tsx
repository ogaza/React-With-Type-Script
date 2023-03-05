import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Actions } from './actions/actionCreators';
import Hello from './components/hello';
import { IAppState } from './store/state';
import { store } from './store/store';

interface IAppProps {
  showModal: boolean;
  dispatch: any;
}

const mapStateToProps = (state: IAppState) => {
  return {
    showModal: state.modal.isVisible
  };
};

const AppConnected = connect(mapStateToProps)(
  class App extends React.Component<IAppProps, {}> {
    constructor(props) {
      super(props);
      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
    }

    showModal() {
      const { dispatch } = this.props;
      dispatch(Actions.showModal());
    }

    hideModal() {
      const { dispatch } = this.props;
      dispatch(Actions.hideModal());
    }

    toggleModal() {
      const { dispatch } = this.props;
      dispatch(Actions.toggleModal());
    }

    render() {
      const { showModal } = this.props;

      return (
        <div>
          <Hello name="Type Script Application" />
          <button onClick={this.toggleModal}>toggle</button>
          showModal : {showModal ? 'true' : 'false'}
          {showModal}
        </div>
      );
    }
  }
);

ReactDOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  document.getElementById('root')
);
