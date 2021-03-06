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
	  ????????? ?????? ????????? ????????? ????????????
	  <br />
	  
	  </h3>
	  <h1>?????????AI</h1>
 	  <p><br /> </p> 
          <StyledBtn onClick={onClickHandler}>???????????? ??????</StyledBtn>
        </Section1>
        <Section2>
          <p className="web">
            ???????????? ????????? ?????? ???????????? ????????????????
            <br />
	    ??????????????? ????????? ???????????? ????????? ???????????? ???????????????
	    <br />
	    ?????????AI??? ???????????? ????????????.
	    <br />
          </p>
          <p className="mobile">
            ???????????? ????????? ??????
	    <br />
	    ???????????? ????????????????
	    <br />
	    ??????????????? ????????? ????????????
	    <br />
	    ????????? ???????????? ???????????????
            <br />
            ?????????AI??? ???????????? ????????????.
          </p>
        </Section2>
        <Section3>
          <div>
            <span>
              <h2>
                ??????????????? ????????????!
                <br />
                ?????? ???????????? ?????? ???
	   	<br />
	        ???????????? ???????????????
              </h2>
            </span>
            <img src={images.mini_01} />
          </div>
          <div>
            <img className="second-img" src={images.mini_02} />
            <span>
              <h2 className="second-title">
                ?????? ????????? ?????? ?????????
                <br />
                ??????????????? ?????? ??????
	  	<br />
	  	????????? ????????????!
              </h2>
            </span>
          </div>
          <div>
            <span>
              <h2>
                10????????? ?????????AI???
                <br />
                ??????????????? ????????????
	        <br />
	  	?????? ???????????? ???????????????
              </h2>
            </span>
            <img src={images.mini_03} />
          </div>
          <div>
            <img src={images.mini_04} className="fourth-img" />
            <span>
              <h2 className="fourth-title">
                ????????? ????????????
	  	<br />
	  	??????????????? ?????????
	  	<br />
	  	???????????? ???????????????
              </h2>
            </span>
          </div>
        </Section3>
        <Section4>
          <h2>????????? ?????? ?????????????</h2>
          <p className="web">
            ?????????AI??? ???????????? ??? ???????????? ????????????
            <br />
            ??????????????? ????????? ????????? ????????? ????????? ?????? ?????????!
            <br />
            ??????????????? ???????????? ??????????????? ?????????, ??????????????? ?????? ????????? ?????????
            <br />
            ?????????AI??? ????????? ???????????? ?????? ???????????? ???????????? ????????????.
            <br />
          </p>
	  <p className="web" style={{color:"#FF99B6"}}>
	    ???, ?????????????????? ?????? ?????? ????????? ??????????????? ?????????AI??? ????????? ?????????!</p>
          <p className="mobile">
            ?????????AI??? ???????????? ??? ????????????
	    <br />
	    ???????????? ??????????????? ????????? ?????????
            <br />
	    ????????? ????????? ?????? ?????????!
            <br />
	    ??????????????? ???????????? ???????????????
            <br />
	    ?????????, ??????????????? ????????? ?????????
            <br />
	    ?????????AI??? ????????? ????????????
            <br />
	    ?????? ???????????? ???????????? ????????????.
	    <br />
          </p>
	  <p className="mobile" style={{color:"#FF99B6"}}>
	  ???, ?????? ???????????? ?????? ?????? ????????? ???????????????
	  <br />
	  ?????????AI??? ????????? ?????????!
	  </p>
        </Section4>
        <Section5>
          <h2 className="web">
            ????????? ????????? ???????????????,
            <br />
            ?????? ????????? ??????????????????
          </h2>
          <h2 className="mobile">
            ????????? ?????????
	    <br />
	    ???????????????,
            <br />
            ?????? ?????????
            <br />
            ??????????????????
          </h2>
          <StyledBtn onClick={onClickHandler}>???????????? ??????</StyledBtn>
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
                ??????????????? ??????????????? ?????????!
              </h2>
              <p className="modal-desc">
                ????????? ???????????? ?????? ???????????? ???????????? ????????????.
                <br />
                ?????? ???????????? ???????????? ?????????????????????.
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
