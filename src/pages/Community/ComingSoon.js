/* eslint-disable*/
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import { customMedia } from "../../styles/GlobalStyle";
import images from "../../assets";

function ComingSoon() {
  return (
    <>
      <Navbar goBack={true} />
      <StyledContainer>
        <h2>AI로 패션 산업을 혁신한다.</h2>
        <p className="desc">
	  <br /><br/>
          인공지능의 가능성은 무궁무진 합니다.
            <br />
          핀테크, 교육 등의 다양한 분야에서 많은 기술들이
            <br />
          인공지능으로 혁신을 이루어 냈습니다.
            <br /><br />
          패션 산업에서는 아직 인공지능으로 산업 구조를 바꾸고자
            <br />
          리드하는 팀이 없다고 생각합니다.

            <br />
          저희 앙드레AI가 시장에서 유의미한 결과를 내는 선두주자로서,
            <br />
          패션 시장을 인공지능으로 효율화, 혁신을 이끌겠습니다.
            <br /><br/>
          정식 출시가 5월 30일 예정입니다.
            <br/>
            고화질, 자연스러운 변환 결과를 보실 수 있도록
            <br/>
            열심히 준비하겠습니다.
          <br /><br/><br/>
          빠른 시일내에 정식으로 찾아뵙겠습니다.
            <br/><br/>
            감사합니다.
            <br/>
            앙드레AI 드림.

        </p>
        {/*<img src={images.community} />*/}
      </StyledContainer>
      <Footer />
    </>
  );
}

export default ComingSoon;

const StyledContainer = styled.div`
  color: ${(props) => props.theme.palette.powderGrey};
  text-align: center;
  justify-content: center;
  height: 100%;
  padding-top: 60px;
  h1 {
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  p.desc {
    font-size: 20px;
    margin-bottom: 60px;
  }
  img {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
  ${customMedia.lessThan("mobile")`
  h1 {
      font-size: 28px;
      margin-bottom: 12px;
  }
  p.desc {
      font-size: 14px;
      margin-bottom: 32px;
  }
  img {
      width: 300px;
      height: 150px;
  }
  `}
`;
