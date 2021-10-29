import { css } from "@emotion/react";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import useAuth from "./../../Hooks/useAuth";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const PrivateRoute = ({ children, ...rest }) => {
  const { userData, isLoading } = useAuth();
  //   let [color, setColor] = useState("#ffffff");

  if (isLoading) {
    return (
      <GridLoader
        color="#61E0C7"
        loading={isLoading}
        css={override}
        size={50}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        userData.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
