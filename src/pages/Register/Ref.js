/* eslint-disable */
import React, { useState, useRef } from "react";
import InputDiv from "../../components/InputDiv";
import Button from "../../components/Button";
import styled, { css } from "styled-components";
import { isPassword } from "../../utils/regexes";
import { signUp } from "../../_reducers/register_reducer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import LoadingModal from "../../components/modals/LoadingModal";
import { customMedia } from "../../styles/GlobalStyle";

function Ref() {
  const dispatch = useDispatch();
  const myRef = useRef();

  const store = useSelector((state) => state.register);
  const [ref, setRef] = useState(null);
  const [count, setCount] = useState("");
  const [type, setType] = useState(false);
  const [loadingModalVisible, setLoadingModalVisible] = useState(false);

  const onRefHandler = (event) => {
    console.log(event.target.files);
    setRef(event.target.files);
    const len = event.target.files.length;
    setCount(`${len}장의 사진이 선택되었습니다.`);
  };

  const openLoadingModal = () => {
    setLoadingModalVisible(true);
  };
  const closeLoadingModal = () => {
    setLoadingModalVisible(false);
  };

  useEffect(() => {
    setType(ref !== null);
  }, [ref]);

  const onClickHandler = () => {
    const dataTosubmit = {
      target_id: store.targetId,
      ref: ref,
    };
    openLoadingModal();
    dispatch(signUp(dataTosubmit)).then((response) => {
      if (response.type == "register/SIGNUP_SUCCESS") {
        closeLoadingModal();
        window.location.replace("/register/result");
      }
    });
  };

  const onFocusHandler = (event) => {
    event.stopPropagation();
    myRef.current.style.transform = "TranslateY(-10000px)";
    myRef.current.focus();
    setTimeout(function () {
      myRef.current.style.transform = "none";
    }, 100);
  };

  return (
    <>
      <Navbar goBack={true} />
      <Container>
        <StyledDiv>
          <h3>사용할 디테일 컷 사진을 업로드 해주세요</h3>
          <form className="first" onFocus={onFocusHandler} ref={myRef}>
            <label for="upload_file">디테일 컷 업로드</label>
            <input
              type="file"
              multiple
              id="upload_file"
              accept="image/jpg,image/png,image/jpeg,image/gif"
              onChange={onRefHandler}
            ></input>
            <p>{count}</p>
          </form>
          <Button
            onClick={onClickHandler}
            disabled={!type}
            color={!type ? "lightPink" : "pink"}
          >
            디테일 컷 업로드
          </Button>
        </StyledDiv>
        <Footer />
      </Container>
      {loadingModalVisible && (
        <LoadingModal
          visible={loadingModalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeLoadingModal}
        ></LoadingModal>
      )}
    </>
  );
}

export default Ref;

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
