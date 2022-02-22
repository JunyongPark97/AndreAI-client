/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import InputDiv from "../../components/InputDiv";
import Button from "../../components/Button";
import { sendName } from "../../_reducers/register_reducer";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import FormDiv from "../../components/FormDiv";
import Navbar from "../../components/Navbar";

function Name() {
  const history = useHistory();
  const myRef = useRef();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.register);
  const [name, setName] = useState("");
  const [type, setType] = useState(false);
  const [msg, setMsg] = useState(0);

  const onNameHandler = (event) => {
    setName(event.target.value);
  };

  const onFocusHandler = (event) => {
    event.stopPropagation();
    myRef.current.style.transform = "TranslateY(-10000px)";
    myRef.current.focus();
    setTimeout(function () {
      myRef.current.style.transform = "none";
    }, 100);
  };

  useEffect(() => {
    setType(name.length > 0);
  }, [name]);

  const onSubmitHandler = () => {
    const body = {
      phone: store.phone,
      shop_name: name,
    };
    dispatch(sendName(body)).then(() => {
      history.push("/register/target");
    });
  };
  return (
    <>
      <Navbar goBack={true} />
      <Container>
        <InputDiv color={msg == 1 ? "purple" : "pink"}>
          <h3>쇼핑몰 이름을 입력해주세요.</h3>
          <FormDiv>
            <form onFocus={onFocusHandler} ref={myRef}>
              <label>쇼핑몰명</label>
              <input
                type="text"
                value={name}
                placeholder="앙드레 쇼핑몰"
                onChange={onNameHandler}
              ></input>
            </form>
          </FormDiv>
          <Button
            onClick={onSubmitHandler}
            color={!type ? "lightPink" : "pink"}
            disable={!type ? "lightPink" : "pink"}
          >
            다음
          </Button>
        </InputDiv>
        <Footer />
      </Container>
    </>
  );
}

export default Name;
