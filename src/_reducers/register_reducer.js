/* eslint-disable */

import axios from "axios";

const CONFIRM_MARKETING = "register/CONFIRM_MARKETING";
const ENTER_PHONENUM = "register/ENTER_PHONENUM";
const ENTER_NAME = "register/ENTER_NAME";
const ENTER_TARGET = "register/ENTER_TARGET";
const SIGNUP_SUCCESS = "register/SIGNUP_SUCCESS";
const SIGNUP_FAILURE = "register/SIGNUP_FAILURE";

export const confirmMarketing = (confirmed) => {
  return {
    type: CONFIRM_MARKETING,
    payload: confirmed,
  };
};

// store에 전화번호 저장
export const sendPhoneNum = (phoneNum) => {
  return {
    type: ENTER_PHONENUM,
    payload: phoneNum,
  };
};

// 전화번호, 쇼핑몰 이름을 서버에 전송 후 응답으로 사용자의 id를 받아옴
export const sendName = async (body) => {
  try {
    const req = await axios.post("/andre/user/", body);
    return {
      type: ENTER_NAME,
      payload: req.data.id, // userId가 담겨있다고 가정
    };
  } catch (e) {
    return {
      payload: e,
    };
  }
};

// 사용자 id, target을 서버에 전송 후 응답으로 target id를 받아옴
export const sendTarget = async (dataTosubmit) => {
  try {
    const formData = new FormData();
    formData.append("target", dataTosubmit.target);
    formData.append("id", dataTosubmit.id);
    const options = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const req = await axios.post("/andre/target/", formData, options); // TODO: url 넣기
    return {
      type: ENTER_TARGET,
      payload: req.data.target_id, // target id가 담겨있다고 가정
    };
  } catch (e) {
    console.log(e);
    return {
      payload: e,
    };
  }
};

// 서버에 회원가입 요청하는 액션
// 사용자 id, target id, ref를 서버에 전송 후 응답으로 결과(list of urls)를 받아옴
export const signUp = async (dataTosubmit) => {
  try {
    const formData = new FormData();
    // formData.append("ref", dataTosubmit.ref);
    formData.append("target_id", dataTosubmit.target_id);
    const files = [...dataTosubmit.ref];
    files.map((file) => {
      formData.append("ref", file);
    });
    const options = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const req = await axios.post("/andre/reference/", formData, options);
    return {
      type: SIGNUP_SUCCESS,
      payload: req.data,
    };
  } catch (e) {
    return {
      type: SIGNUP_FAILURE,
      payload: e,
    };
  }
};

export default function register(state = {}, action) {
  switch (action.type) {
    case ENTER_PHONENUM:
      return {
        ...state,
        phone: action.payload,
      };
    case CONFIRM_MARKETING:
      return {
        ...state,
        is_marketing: action.payload,
      };
    case ENTER_NAME:
      return {
        userId: action.payload,
      };
    case ENTER_TARGET:
      return {
        ...state,
        targetId: action.payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
}
