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
import './style/detail.scss';
import { normalizeTypes } from "../../helpers/normalize";

const Detail = (props) => {
  const [form] = Form.useForm();
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
    form.resetFields();
    message.success('Now pokemon is in your bag!');
    modalRef.current.handleOk();
  };

  return (
    <div>
      {detailPokemon && (
        <Fragment>
          <p className="my-1"><i>{detailPokemon.name}</i></p>
          <div className="box-pokemon">
            <img src={detailPokemon.sprites.front_default} alt="" />
          </div>
          <div className="box-detail-pokemon">
            <p className="my-1">Battles</p>
            <div className="row" style={{ height: '72%' }}>
              <div className="col-sm-4 col-4 pr-title">
                <div className="box-detail-pokemon-battles title">
                  <p className="my-1 white">Types</p>
                </div>
              </div>
              <div className="col-sm-8 col-8 pl-desc">
                <div className="box-detail-pokemon-battles desc">
                  <p className="my-1 white">{normalizeTypes(detailPokemon.types)}</p>
                </div>
              </div>
              <div className="col-sm-12 col-12">
                <div className="box-detail-pokemon-moves title">
                  <p className="my-1">Moves</p>
                </div>
              </div>
              <div className="col-sm-12 col-12" style={{ height: '95%' }}>
                <div className="box-detail-pokemon-moves desc">
                  {detailPokemon.moves.map(val => (
                    <p className="my-1">
                      {val.move.name}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <Button type="primary" onClick={handleCatchPokemon}>
            Try to Catch
          </Button>
        </Fragment>
      )}
      <Modal
        title="Give The Name"
        ref={modalRef}
        footer={null}
      >
       <Form
          form={form}
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
    </div>
  );
}

export default Detail;
