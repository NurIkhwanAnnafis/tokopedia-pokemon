/* eslint-disable react-hooks/exhaustive-deps */
import { Button, message, Form, Input } from "antd";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailPokemon } from "../../data/pokemon";
import { STATUS_CATCH } from "./settings/enum";
import Modal from '../../components/Modal';
import { catchPokemon } from "../../store/actions/pokemon.action";
import { checkPokemonIsTaken } from "./settings/detail.helper";
import { loading } from "../../store/actions/global.action";

const Detail = (props) => {
  const { listMyPokemon } = props;
  const modalRef = useRef(null);
  const params = useParams();
  const dispatch = useDispatch();
  const [detailPokemon, setDetailPokemon] = useState(null);

  useEffect(async() => {
    const temp = await dispatch(getDetailPokemon(params.id));
    setDetailPokemon(temp);
  },[])

  const handleCatchPokemon = () => {
    const result = Math.floor(Math.random() * 2);
    dispatch(loading(true, "catch"));

    setTimeout(() => {
      if(result === STATUS_CATCH.SUCCESS) {
        message.success('Congratulation');
        modalRef.current.showModal();
      } else {
        message.error('Pokemon mocks you');
      }
      dispatch(loading(false));
    }, 2000);
  }

  const onFinish = (values) => {
    const isTaken = checkPokemonIsTaken(listMyPokemon, values.nickname, detailPokemon.name);
    if(isTaken) {
      return message.warning('Nickname already used');
    }

    const result = { ...detailPokemon, nickname: values.nickname };
    dispatch(catchPokemon(result));
    modalRef.current.handleOk();
  };

  return (
    <Fragment>
      {detailPokemon && (
        <div>
          <img src={detailPokemon.sprites.front_default} alt="" />
          <p>{detailPokemon.name}</p>
          <br />
          <Button type="primary" onClick={handleCatchPokemon}>
            Try to Catch
          </Button>
        </div>
      )}
      <Modal
        title="Give The Name"
        ref={modalRef}
        footer={null}
      >
       <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Nickname"
            name="nickname"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item className="text-center">
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form> 
      </Modal>
    </Fragment>
  );
}

export default Detail;
