/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Button from "../../components/Button";
import { customMedia } from "../../styles/GlobalStyle";
import { sendEmail } from "../../_reducers/register_reducer";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MsgModal from "../../components/modals/MsgModal";

function Result() {
  const store = useSelector((store) => store.register);
  // 여기 담겨있는 Img url들을 화면에 보여준다.
  const [modal, setModal] = useState(false);
  const onClickHandler = () => {
    const body = {
      target_id: store.targetId,
    };
    sendEmail(body).then((req) => {
      setModal(true);
    });
  };
  // const onClickHandler = e => {
  //   console.log(e.target.href);
  //   fetch(e.target.href, {
  //     method: "GET",
  //     headers: {}
  //   })
  //       .then(response => {
  //         response.arrayBuffer().then(function(buffer) {
  //           const url = window.URL.createObjectURL(new Blob([buffer]));
  //           const link = document.createElement("a");
  //           link.href = url;
  //           link.setAttribute("download", "image.png")
  //         })
  //       })
  // }

  history.pushState(null, null);
  window.onpopstate = function (event) {
    history.go(1);
  };
  window.onpageshow = function (event) {
    if (
      event.persisted ||
      (window.performance && window.performance.navigation.type == 2)
    ) {
      window.location.reload();
    }
  };

  window.onLoad = function () {
    setTimeout(function () {
      scrollTo(0, 0);
    }, 100);
  };

  // 스와이프 방식의 뒤로가기를 제어
  function blockTouchStart(event) {
    if (event.pageX > 20) return;
    event.preventDefault();
  }
  window.addEventListener("touchstart", blockTouchStart);

  // // 복사되었습니다 모달
  // useEffect(() => {
  //   if (modal) {
  //     let timer = setTimeout(() => {
  //       setModal(false);
  //     }, 2000);
  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [modal]);

  return (
    <>
      <Navbar />
      <Container>
        <StyledDiv>
          {/*<h3>쇼핑몰 이름을 입력해주세요.</h3>*/}
          <ImgContainer>
            {store.result.result.map((item, i) => {
              return (
                <ImgItem>
                  <img src={item} key={i} />
                </ImgItem>
              );
            })}
          </ImgContainer>
          <StaticBtn onClick={onClickHandler} color="pink">
            메일 받기
          </StaticBtn>
          <MsgModal show={modal} share center />
        </StyledDiv>
        <Footer />
      </Container>
    </>
  );
}

export default Result;

const StaticBtn = styled(Button)`
  position: static;
  margin: auto;
  ${customMedia.lessThan("mobile")`
  margin: 24px 0;
  `}
`;

const StyledDiv = styled.div`
  color: ${(props) => props.theme.palette.black};
  * {
    text-align: center;
  }
  width: 100%;
  flex-grow: 1;
  align-items: center;

  ${customMedia.lessThan("mobile")`
  padding-top: 24px;

  `}
`;

const ImgContainer = styled.div`
  margin: auto;
  overflow: auto;
`;
const ImgItem = styled.div`
  margin-bottom: 20px;
`;
