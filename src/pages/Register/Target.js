/* eslint-disable */

import React, { useState, useEffect, useRef } from "react";
import InputDiv from "../../components/InputDiv";
import Button from "../../components/Button";
import { sendTarget } from "../../_reducers/register_reducer";
import styled, { css } from "styled-components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import FormDiv from "../../components/FormDiv";
import Navbar from "../../components/Navbar";
import { customMedia } from "../../styles/GlobalStyle";

function Target() {
  const history = useHistory();
  const myRef = useRef();
  const dispatch = useDispatch();
  const store = useSelector((store) => store.register);
  const [target, setTarget] = useState(null);
  const [count, setCount] = useState("");
  const [type, setType] = useState(false);

  useEffect(() => {
    setType(target !== null);
  }, [target]);

  const onTargetHandler = (event) => {
    setTarget(event.target.files[0]);
    const len = event.target.files.length;
    setCount(`${len}장의 사진이 선택되었습니다.`);
  };

  const onFocusHandler = (event) => {
    event.stopPropagation();
    myRef.current.style.transform = "TranslateY(-10000px)";
    myRef.current.focus();
    setTimeout(function () {
      myRef.current.style.transform = "none";
    }, 100);
  };

  const onSubmitHandler = () => {
    const dataTosubmit = {
      id: store.userId,
      target: target,
      // FormData 객체 생성은 액션생성함수에서 진행. axios options 설정과 같이 진행하기 위함.
    };
    dispatch(sendTarget(dataTosubmit)).then(() => {
      history.push("/register/ref");
    });
  };

  return (
    <>
      <Navbar goBack={true} />
      <Container>
        <StyledDiv>
          <h3>사용할 착용 사진을 업로드 해주세요</h3>
          <form onFocus={onFocusHandler} ref={myRef}>
            <label for="upload_file">모델 컷 업로드</label>
            <input
              type="file"
              id="upload_file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={onTargetHandler}
            ></input>
            <p>{count}</p>
          </form>
          <Button
            onClick={onSubmitHandler}
            color={!type ? "lightPink" : "pink"}
            disable={!type ? "lightPink" : "pink"}
          >
            다음
          </Button>
        </StyledDiv>
        <Footer />
      </Container>
    </>
  );
}

export default Target;

const StyledDiv = styled.div`
  width: 640px;
  margin: auto;
  padding-top: 60px;
  padding-bottom: 180px;
  position: relative;
  flex: 1 0 auto;
  color: ${(props) => props.theme.palette.black};

  h3 {
    margin-bottom: 8px;
    font-weight: 700;
  }
  h4 {
    font-weight: 400;
    color: ${(props) => props.theme.palette.darkGrey};
  }
  p {
    font-weight: 400;
    ${(props) => {
      if (props.color == "purple") {
        return css`
          color: ${(props) => props.theme.palette.purple};
        `;
      } else {
        return css`
          color: ${(props) => props.theme.palette.darkGrey};
        `;
      }
    }}
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  form:focus-within {
    label {
      ${(props) => {
        const selected = props.theme.palette[props.color];
        return css`
          color: ${selected};
        `;
      }}
    }
    p {
      ${(props) => {
        if (props.color == "purple") {
          const selected = props.theme.palette[props.color];
          return css`
            color: ${selected};
          `;
        } else {
          return css`
            color: props.theme.palette.darkGrey;
          `;
        }
      }}
    }
  }

  input#upload_file {
    display: none;
  }
  label {
    background: ${(props) => props.theme.palette.pink};
    width: 200px;
    height: 40px;
    color: ${(props) => props.theme.palette.white};
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  ${customMedia.lessThan("mobile")`
  padding: 24px 24px 0 24px;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100 - 56px); // 100vh - Navbar height
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
  h4 {
    font-size: 14px;
  }
  input {
    font-size: 24px;
  }
  p {
    font-size: 12px;
  }
    `}
`;
