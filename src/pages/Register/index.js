/* eslint-disable */
import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import PhoneNum from "../Register/PhoneNum";
import Name from "./Name";
import Target from "./Target";
import Ref from "./Ref";
import Result from "./Result";

function Register({ match }) {
  return (
    <>
      <Route exact path={`${match.path}`} component={PhoneNum}></Route>
      <Route path={`${match.path}/name`} component={Name}></Route>
      <Route path={`${match.path}/target`} component={Target}></Route>
      <Route path={`${match.path}/ref`} component={Ref}></Route>
      <Route path={`${match.path}/result`} component={Result}></Route>
    </>
  );
}

export default Register;
