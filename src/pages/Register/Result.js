/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import JSZip from "jszip";
import FileSaver from "file-saver";

import Button from "../../components/Button";
import { customMedia } from "../../styles/GlobalStyle";
import Container from "../../components/Container";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Result() {
  const store = useSelector((store) => store.register.result);
  // 여기 담겨있는 Img url들을 화면에 보여준다.
  const [modal, setModal] = useState(false);
  const historyHook = useHistory();
  const onClickHandler = () => {
    store.result.map((url, i) => {
      axios({
        url: decodeURIComponent(url),
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        console.log(response.data);
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `test${i}.jpg`);
        document.body.appendChild(link);
        // link.click();
      });
    });
  };

  const CreateZip = () => {
    const zip = new JSZip();
    fakeImgs.map((item, i) => {
      zip.folder("result").file(`result${i}`, item, { binary: true });
    });
    zip.folder("result").file("꾸생.txt", "Hello 꾸생!\n");
    zip.generateAsync({ type: "blob" }).then((resZip) => {
      FileSaver(resZip, "Download.zip");
    });
  };

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

  // 복사되었습니다 모달
  useEffect(() => {
    if (modal) {
      let timer = setTimeout(() => {
        setModal(false);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [modal]);

  return (
    <>
      <Navbar />
      <Container>
        <StyledDiv>
          <ImgContainer>
            {store.result.map((item, i) => {
              return (
                <ImgItem>
                  <img src={item} key={i} />
                </ImgItem>
              );
            })}
          </ImgContainer>
          <StaticBtn onClick={onClickHandler} color="pink">
            다운 받기
          </StaticBtn>
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
  img {
    width: 240px;
    height: 240px;
  }
  margin-bottom: 20px;
`;

const fakeImgs = [
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
];
