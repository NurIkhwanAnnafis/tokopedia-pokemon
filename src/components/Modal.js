import { Modal } from 'antd';
import React, { Component } from 'react';

class Index extends Component {

  state = {
    isModalVisible: false
  };

  setIsModalVisible = flag => this.setState({ isModalVisible: flag });

  showModal = () => {
    this.setIsModalVisible(true);
  };

  handleOk = () => {
    this.setIsModalVisible(false);
  };

  handleCancel = () => {
    this.setIsModalVisible(false);
  };

  render() {
    const { title, children, footer } = this.props;
    const { isModalVisible } = this.state;

    return (
      <Modal width={320} title={title} visible={isModalVisible} onOk={this.handleOk} onCancel={this.handleCancel} footer={footer}>
        {children}
      </Modal>
    );
  }
}

export default Index;