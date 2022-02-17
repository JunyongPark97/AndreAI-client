/* eslint-disable */
import React, { useState } from "react";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { useHistory } from "react-router";
import LandingNav from "./LandingNav";
import { customMedia } from "../../styles/GlobalStyle";
import images from "../../assets";
import Modal from "../../components/modals/ComingSoonModal";
import ModalContent from "../../components/modals/ModalContent";

const StyledBtn = styled.button`
  width: 160px;
  height: 62px;
  background-color: ${(props) => props.theme.palette.pink};
  color: ${(props) => props.theme.palette.white};
  font-size: 18px;
  font-weight: 500;
  border-radius: 12px;

  &:hover {
    background-color: ${(props) => props.theme.palette.darkPink};
    color: ${(props) => props.theme.palette.grey};
  }

  ${customMedia.lessThan("mobile")`
    width: 128px;
    height: 52px;
    font-size: 16px;
  `}
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.palette.black};
  padding-top: 60px;
  h1 {
    font-size: 64px;
    margin-bottom: 60px;
    font-weight: 900;
    line-height: 92px;
    text-shadow: 0px 3px 6px black;
  }
  h2 {
    font-size: 48px;
    line-height: 70px;
    font-weight: 700;
  }
  h3 {
    font-weight: bold;
    font-size: 32px;
    text-shadow: 0px 3px 6px black;
  }
  p {
    font-size: 24px;
  }
  ${customMedia.lessThan("mobile")`
  padding-top: 56px;
  section {
    width: 100%;
  }
  h1 {
    font-size: 48px;
    margin-bottom: 32px;
    line-height: 70px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 24px
  }
  `}
`;

const Section1 = styled.section`
  padding: 200px 0px;
  /* background-color: ${(props) => props.theme.palette.powderPurple}; */
  position: relative;
  color: ${(props) => props.theme.palette.white};
  button {
    margin-bottom: 48px;
  }
  div.img-web {
    z-index: -100;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(/img/main_web.png);
    background-size: cover;
    background-position: center;
  }

  div.img-mobile {
    display: none;
  }
  ${customMedia.lessThan("mobile")`
    height: calc(var(--vh, 1vh) * 100);
    width: 100vw;
    div.img-web {
      display: none;
    }
    div.img-mobile {
      display: inline-block;
      z-index: -100;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: url(/img/main_mobile.png);
      // background: black;
      background-size: cover;
      background-position: center;
    }
  `}
`;

const Section2 = styled.section`
  padding: 200px 0px;
  background-color: ${(props) => props.theme.palette.lightPurple};
  color: ${(props) => props.theme.palette.powderGrey};
  p {
    font-size: 32px;
    font-weight: 500;
    line-height: 48px;
  }
  & > .mobile {
    display: none;
  }
  ${customMedia.lessThan("mobile")`
  padding: 96px 24px;
  
  & > .web {
    display: none;
  }
  & > .mobile {
    display: block;
    font-size: 24px;
    line-height: 35px;
  }
`}
`;

const Section3 = styled.section`
  padding: 0 0 200px 0;
  width: 960px;
  margin: auto;
  div {
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 200px;
  }
  img {
    width: 400px;
    height: 400px;
  }
  h2 {
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    line-height: 30px;
    color: ${(props) => props.theme.palette.powderGrey};
  }

  ${customMedia.lessThan("mobile")`
    padding: 96px 24px 0 24px;
    h2 {
      margin-bottom: 12px;
    }
    div {
      flex-direction: column;
      align-items: flex-start;
      margin: 0 0 128px 0;
      & > .second-img {
        order:3
      }
      & > .second-title {
        order:1
      }
      & > .second-desc {
        order:2
      }
      & > .fourth-img {
        order:3
      }
      & > .fourth-title {
        order:1
      }
      & > .fourth-desc {
        order:2
      }
    }
    img {
      width: 327px;
      height: 327px;
      margin-top: 80px;
    }
    h2 {
      line-height: 48px;
    }
    p {
      font-size: 16px;
      line-height: 26px;
    }
  `}
`;
const Section4 = styled.section`
  padding: 200px 0px;
  background-color: ${(props) => props.theme.palette.black};
  h2 {
    color: ${(props) => props.theme.palette.lightGrey};
    margin-bottom: 20px;
  }
  p {
    color: ${(props) => props.theme.palette.grey};
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 29px;
  }
  .added-web {
    font-size: 18px;
    color: "#FF99B6"
  }
  & > .mobile {
    display: none;
  }
  button {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    background-color: transparent;
    width: 120px;
    height: 29px;
    color: ${(props) => props.theme.palette.flowerPink};
    img {
      width: 16px;
      height: 16px;
    }
  }
  ${customMedia.lessThan("mobile")`
  padding: 96px 24px;
  & > .web {
    display: none;
  }
  & > .mobile {
    display: block;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 12px;
  }
  h2 {
    margin-bottom: 12px;
  }
  button {
    font-size: 16px;
  }

  `}
`;

const Section5 = styled.section`
  padding: 120px 0px;
  background-color: ${(props) => props.theme.palette.paleYellow};
  h2 {
    margin-bottom: 60px;
  }
  & > .mobile {
    display: none;
  }
  ${customMedia.lessThan("mobile")`
    padding: 80px 0px;
    & > .web {
      display: none;
    }
    & > .mobile {
      display: block;
      line-height: 48px;
      margin-bottom: 32px;
    }
  `}
`;
function LandingPage() {
  const history = useHistory();
  const [modalOpen, setModalOpen] = useState(false);

  const onClickHandler = () => {
    history.push("/register");
  };
  return (
    <>
      <LandingNav />

      <Container>
        <Section1>
          <div className="img-web"></div>
          <div className="img-mobile"></div>
          <h3>
	  셀러의 촬영 시간과 비용을 줄여주는
	  <br />
	  
	  </h3>
	  <h1>앙드레AI</h1>
 	  <p><br /> </p> 
          <StyledBtn onClick={onClickHandler}>체험하러 가기</StyledBtn>
        </Section1>
        <Section2>
          <p className="web">
            여러가지 색상의 옷을 촬영하기 힘드신가요?
            <br />
	    고객들에게 색상별 분위기가 어떤지 보여주고 싶으시다면
	    <br />
	    앙드레AI로 색변환을 해보세요.
	    <br />
          </p>
          <p className="mobile">
            여러가지 색상의 옷을
	    <br />
	    촬영하기 힘드신가요?
	    <br />
	    고객들에게 색상별 분위기가
	    <br />
	    어떤지 보여주고 싶으시다면
            <br />
            앙드레AI로 색변환을 해보세요.
          </p>
        </Section2>
        <Section3>
          <div>
            <span>
              <h2>
                안녕하세요 판매자님!
                <br />
                먼저 메인으로 이용 할
	   	<br />
	        착용샷을 올려주세요
              </h2>
            </span>
            <img src={images.mini_01} />
          </div>
          <div>
            <img className="second-img" src={images.mini_02} />
            <span>
              <h2 className="second-title">
                실제 색상과 가장 가까운
                <br />
                디테일컷을 색상 별로
	  	<br />
	  	업로드 해주세요!
              </h2>
            </span>
          </div>
          <div>
            <span>
              <h2>
                10초만에 앙드레AI가
                <br />
                디테일컷의 색상들로
	        <br />
	  	메인 착용샷을 바꿔드려요
              </h2>
            </span>
            <img src={images.mini_03} />
          </div>
          <div>
            <img src={images.mini_04} className="fourth-img" />
            <span>
              <h2 className="fourth-title">
                변경된 사진들로
	  	<br />
	  	고객들에게 색상별
	  	<br />
	  	분위기를 보여주세요
              </h2>
            </span>
          </div>
        </Section3>
        <Section4>
          <h2>어떻게 색을 바꾸나요?</h2>
          <p className="web">
            앙드레AI는 수만개의 옷 사진들을 학습하여
            <br />
            자연스럽게 사진의 색상을 바꾸는 능력을 갖고 있어요!
            <br />
            판매자님이 올려주신 디테일컷의 팔부분, 목부분등의 실제 색상과 특징을
            <br />
            앙드레AI가 정확히 인식해서 메인 착용샷에 적용시켜 드립니다.
            <br />
          </p>
	  <p className="web" style={{color:"#FF99B6"}}>
	    단, 메인착용샷은 가장 밝은 컬러로 올려주셔야 앙드레AI가 일하기 편해요!</p>
          <p className="mobile">
            앙드레AI는 수만개의 옷 사진들을
	    <br />
	    학습하여 자연스럽게 사진의 색상을
            <br />
	    바꾸는 능력을 갖고 있어요!
            <br />
	    판매자님이 올려주신 디테일컷의
            <br />
	    팔부분, 목부분등의 색상과 특징을
            <br />
	    앙드레AI가 정확히 인식해서
            <br />
	    메인 착용샷에 적용시켜 드립니다.
	    <br />
          </p>
	  <p className="mobile" style={{color:"#FF99B6"}}>
	  단, 메인 착용샷은 가장 밝은 컬러로 올려주셔야
	  <br />
	  앙드레AI가 일하기 편해요!
	  </p>
        </Section4>
        <Section5>
          <h2 className="web">
            다양한 색상의 착용사진을,
            <br />
            지금 무료로 만들어보세요
          </h2>
          <h2 className="mobile">
            다양한 색상의
	    <br />
	    착용사진을,
            <br />
            지금 무료로
            <br />
            만들어보세요
          </h2>
          <StyledBtn onClick={onClickHandler}>체험하러 가기</StyledBtn>
        </Section5>
        {modalOpen && (
          <Modal
            visible={modalOpen}
            closable={true}
            maskClosable={true}
            onClose={() => {
              setModalOpen(false);
            }}
          >
            <ModalContent>
              <h2 className="modal-title">
                기술력으로 패션산업에 혁신을!
              </h2>
              <p className="modal-desc">
                스토리 페이지는 현재 업데이트 준비중에 있습니다.
                <br />
                빠른 시일내에 준비하여 찾아뵙겠습니다.
              </p>
            </ModalContent>
          </Modal>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default LandingPage;
