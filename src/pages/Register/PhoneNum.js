/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import InputDiv from "../../components/InputDiv";
import Button from "../../components/Button";
import SmallBtn from "../../components/SmallBtn";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isEmail } from "../../utils/regexes";
import {
  confirmMarketing,
  sendPhoneNum,
} from "../../_reducers/register_reducer";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import checked from "../../assets/checked.png";
import unchecked from "../../assets/unchecked.png";
import { customMedia } from "../../styles/GlobalStyle";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import FormDiv from "../../components/FormDiv";
import Navbar from "../../components/Navbar";

function PhoneNum() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [phoneNum, setPhoneNum] = useState("");
  const [msg, setMsg] = useState(0);
  const [activateBtn, setActivateBtn] = useState(false);
  const myRef = useRef();
  const [phoneType, setPhoneType] = useState(false);
  const [term, setTerm] = useState(true); // checkbox input에 클릭 시 토글
  const [marketing, setMarketing] = useState(true);

  const messages = [
    "이메일 주소를 입력 해 주세요",
    "올바른 이메일 형식이 아니에요",
    "이미 네오가 있는 전화번호에요",
    "",
  ];

  // 페이지 렌더링 시 Scroll to top
  useEffect(() => {
    window.onload = function () {
      setTimeout(function () {
        scrollTo(0, 0);
      }, 100);
    };
  }, []);
  useEffect(() => {
    if (!phoneType && phoneNum.length == 0) {
      setMsg(0);
    }
  }, [phoneType, phoneNum]);

  useEffect(() => {
    setActivateBtn(phoneType && term);
  }, [phoneType, term]);

  const onTermHandler = () => {
    setTerm(!term);
  };

  const onMarketingHandler = () => {
    setMarketing(!marketing);
  };

  const onBlurHandler = () => {
    if (phoneNum.length == 0) {
      setMsg(0);
    } else if (!phoneType) {
      setMsg(1);
    }
    if (phoneType) {
      setMsg(3);
    }
  };
  const onPhoneNumHandler = (event) => {
    setPhoneNum(event.target.value);
    setPhoneType(isEmail(event.target.value));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch(confirmMarketing(marketing));
    dispatch(sendPhoneNum(phoneNum));
    history.push("/register/name");
  };
  const onFocusHandler = (event) => {
    event.stopPropagation();
    myRef.current.style.transform = "TranslateY(-10000px)";
    myRef.current.focus();
    setTimeout(function () {
      myRef.current.style.transform = "none";
    }, 100);
  };

  const onClickHandler = () => {
    history.push("/login");
  };

  return (
    <>
      <Navbar goBack={true} color="white" />
      <Container>
        <InputDiv
          className="input-container"
          color={msg == 1 || msg == 2 ? "purple" : "pink"}
        >
          <h3>이메일주소를 입력해주세요</h3>
          <h4>색 변환이 완료된 사진을 메일로 전달드려요</h4>
          <FormDiv>
            <form onFocus={onFocusHandler} ref={myRef}>
              <label>이메일</label>
              <input
                type="text"
                value={phoneNum}
                placeholder="abc@abc.com"
                onChange={onPhoneNumHandler}
                onBlur={onBlurHandler}
              ></input>
              <p>{messages[msg]}</p>
            </form>
            <AgrDiv>
              <CheckBox>
                <span type="button" onClick={onTermHandler}>
                  <img src={!term ? unchecked : checked} />
                </span>
                <span>
                  <StyledLink>
                    <a href="https://foremost-avocado-334.notion.site/5592e83a44fc414d81b8bb5b5f2ca9d6">
                      개인정보 처리방침
                    </a>
                  </StyledLink>
                  &nbsp;및&nbsp;
                  <StyledLink>
                    <a href="https://foremost-avocado-334.notion.site/72c7e2423d9d4e75af4a239bfac0494c">
                      앙드레AI 이용약관
                    </a>
                  </StyledLink>
                  &nbsp;필수 동의
                </span>
              </CheckBox>
              <CheckBox>
                <span type="button" onClick={onMarketingHandler}>
                  <img src={!marketing ? unchecked : checked} />
                </span>
                <span>
                  <StyledLink>
                    <a href="https://foremost-avocado-334.notion.site/a79bcee6344749b497b9229248655710">
                      마케팅 수신
                    </a>
                  </StyledLink>
                  &nbsp;선택 동의
                </span>
              </CheckBox>
            </AgrDiv>
          </FormDiv>
          <Button
            onClick={onSubmitHandler}
            disabled={!phoneType || !term || !activateBtn}
            color={!activateBtn ? "lightPink" : "pink"}
          >
            다음
          </Button>
        </InputDiv>
        <Footer />
      </Container>
    </>
  );
}

export default PhoneNum;

const CheckBox = styled.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 400;
  button {
    background: none;
    border: none;
  }
  img {
    width: 20px;
    height: auto;
    cursor: pointer;
  }
  span {
    margin-right: 12px;
    font-size: 14px;
    color: ${(props) => props.theme.palette.gray};
  }

  ${customMedia.lessThan("mobile")`
  img {
    width: 16px;
    height: 16px;
  }
  span {
    font-size: 12px;
  }
    `}
`;

const AgrDiv = styled.div`
  margin-top: 16px;
`;

const StyledLink = styled.button`
  color: ${(props) => props.theme.palette.gray};
  font-weight: 400;
  font-size: 14px;
  a:link {
    color: ${(props) => props.theme.palette.gray};
    text-decoration: underline ${(props) => props.theme.palette.gray};
  }
  a:visited {
    color: ${(props) => props.theme.palette.gray};
    text-decoration: none;
  }
  a:hover {
    color: ${(props) => props.theme.palette.gray};
    text-decoration: none;
  }
  ${customMedia.lessThan("mobile")`
    font-size: 12px;
    `}
`;
