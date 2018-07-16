import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import { Button, Modal } from 'antd';
import { Actions } from './actions/actionCreators';
import Hello from './components/hello';
import { IAppState } from './store/state';
import { store } from './store/store';
/* Import styles */
import 'antd/lib/button/style';
import 'antd/lib/modal/style';

interface IAppProps {
  showModal: boolean,
  dispatch: any
}

const mapStateToProps = (state: IAppState) => {
  return {
    showModal: state.modal.isVisible
  };
};

const AppConnected = connect(mapStateToProps)(class App extends React.Component<IAppProps, {}> {

  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    const { dispatch } = this.props;
    dispatch(Actions.showModal());
  }

  hideModal() {
    const { dispatch } = this.props;
    dispatch(Actions.hideModal());
  }

  render() {

    const { showModal } = this.props;

    return (
      <div>
        <Hello name="Type Script Application" />
        <Button onClick={this.showModal}>Open</Button>
        <Modal visible={showModal} onOk={this.hideModal} onCancel={this.hideModal}>
          <p>some content</p>
        </Modal>
      </div>
    )
  }
});

ReactDOM.render(
  <Provider store={store}>
    <AppConnected />
  </Provider>,
  document.getElementById("root")
);