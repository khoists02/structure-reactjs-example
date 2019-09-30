import React, { Component } from "react";

import injectReducer from "../../../core/reducer/inject-reducer";
import injectSaga from "../../../core/saga/inject-saga";
import { createStructuredSelector } from "reselect";
import { compose } from "recompose";
import { connect } from "react-redux";
import saga from "../../../modules/example/sagas";
import reducer from "../../../modules/example/reducers";
import { FEATURE_NAME } from "../../../modules/example/constants";
import { selectExample } from "../../../modules/example/selectors";
import { example } from "../../../modules/example/actions";
import { push as navigate } from "react-router-redux";
class ExamplePage extends Component {
  componentDidMount() {
    console.log(this.props.loaded);
    this.props.example();
  }

  componentDidUpdate() {
    console.log(this.props.loaded);
  }

  //   logOut = () => {
  //     localStorage.clear();
  //     window.location.href = "/sign-in";
  //   };

  render() {
    // const accessToken = localStorage.getItem("accessToken");
    return (
      <div>
        <h1>Example Page</h1>
        {/* <p>accessToken : {accessToken}</p>
        <a onClick={this.logOut}>Logout</a> */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loaded: selectExample()
});

const mapDispatchToProps = {
  example,
  navigate
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: FEATURE_NAME, reducer });

const withSaga = injectSaga({
  key: FEATURE_NAME,
  saga
});

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ExamplePage);
