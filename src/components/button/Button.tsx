import React, { Fragment, useContext } from "react";
import { Button as BootstrapButton } from "react-bootstrap";
import { AppContext } from "../../context/context";

const Button = () => {
  const { state, dispatch } = useContext(AppContext);
  const { isDisplay } = state;
  return (
    <Fragment>
      <BootstrapButton
        onClick={() => {
          dispatch({
            type: "DISPLAY_USERS",
            payload: state.users,
          });
        }}
        variant={isDisplay ? "success" : "primary"}
      >
        {isDisplay ? "Albums chargés!" : "Charger les albums"}
      </BootstrapButton>
    </Fragment>
  );
};

export default Button;
