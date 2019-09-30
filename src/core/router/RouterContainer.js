import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import React from "react";
import { renderRoutes } from "react-router-config";
import { Route, Switch } from "react-router-dom";
import { PageNotFound, ScrollToTop } from "../../components/Pages";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

// import { OidcSettings } from "../../constants/index";
// import { UserManager } from "oidc-client";
// import FetchHelper from "../../helpers/FetchHelper";
import PrivateLayout from "../../components/Layout/PrivateLayout";
import HomeLayout from "../../components/Layout/HomeLayout";

class RouterContainer extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  //   async componentDidMount() {
  //     await this.authorize();
  //   }

  //   async authorize() {
  //     this.userManager = new UserManager(OidcSettings());
  //     this.userManager.events.addUserLoaded(this.onUserLoaded);
  //     await this.userManager
  //       .getUser()
  //       .then(async user => {
  //         // Cheat Code
  //         const access_token = localStorage.getItem("accessToken");
  //         const expires_at = Math.floor(Date.now() / 1000) + 100;
  //         const userCheat = {
  //           access_token,
  //           id_token: access_token,
  //           expires_at
  //         };
  //         if (
  //           userCheat &&
  //           userCheat["access_token"] !== null &&
  //           userCheat["access_token"] !== undefined
  //         ) {
  //           // const currentTime = Math.floor(Date.now() / 1000) + 50;
  //           // if (userCheat["expires_at"] < currentTime) {
  //           //   await this.userManager
  //           //     .signinSilent()
  //           //     .then(user => this.onUserLoaded(user), () => this.signin());
  //           // } else {
  //           //   this.onUserLoaded(user);
  //           // }
  //           this.onUserLoaded(userCheat);
  //         } else if (window.location.href.includes("#id_token")) {
  //           // await this.userManager
  //           //   .signinRedirectCallback()
  //           //   .then(user => {
  //           //     const history = createBrowserHistory()
  //           //     history.push('/')
  //           //     this.onUserLoaded(user)
  //           //   })
  //           //   .catch(function(err) {
  //           //     console.log('Error signinRedirectCallback: ', err) // eslint-disable-line
  //           //   })
  //           this.setState({ isShow: false });
  //         } else {
  //           this.signin();
  //         }
  //         // this.getAccessTokenJira();
  //         // this.props.setAdUser(true);
  //       })
  //       .catch(e => {
  //         console.log(e); // eslint-disable-line
  //       });
  //   }

  //   onUserLoaded = user => {
  //     if (user) {
  //       FetchHelper.addDefaultHeader(
  //         "Authorization",
  //         `Bearer ${user.access_token}`
  //       );
  //       localStorage.setItem("AUTHORIZE_TOKEN", user.id_token);
  //       this.setState({ isShow: true, isExistingAdUser: true, isLogined: true });
  //     }
  //   };

  //   signin = () => {
  //     const urlRedirect = !(
  //       window.location.href === window.location.origin ||
  //       window.location.href === window.location.origin + "/" ||
  //       window.location.href === window.location.origin + "/login"
  //     )
  //       ? window.location.href
  //       : window.location.origin + "/home";
  //     localStorage.setItem("URL_REDIRECT_LOGIN", urlRedirect);
  //     this.userManager
  //       .signinRedirect()
  //       .then(function() {
  //         console.log("signinRedirect ok"); // eslint-disable-line
  //       })
  //       .catch(function(err) {
  //         console.log("signinRedirect error:", err); // eslint-disable-line
  //       });
  //   };

  render() {
    const { history, routes, loginRoutes } = this.props;
    console.log("history, routes", history, routes);
    const { isShow } = this.state;
    return (
      <React.Fragment>
        <ConnectedRouter history={history}>
          <ScrollToTop>
            <Switch>
              {isEmpty(routes) ? (
                <Route component={PageNotFound} exact path="/" />
              ) : (
                <HomeLayout>{renderRoutes(routes)}</HomeLayout>
              )}
              <Route component={ScrollToTop} path="*" />
            </Switch>
          </ScrollToTop>
        </ConnectedRouter>
      </React.Fragment>
    );

    // (
    //   <React.Fragment>
    //     <ConnectedRouter history={history}>
    //       <ScrollToTop>
    //         <Switch>
    //           {isEmpty(loginRoutes) ? (
    //             <Route component={NotFoundPage} exact path="/" />
    //           ) : (
    //             renderRoutes(loginRoutes)
    //           )}
    //           <Route component={ScrollToTop} path="*" />
    //         </Switch>
    //       </ScrollToTop>
    //     </ConnectedRouter>
    //   </React.Fragment>
    // );
  }
}

RouterContainer.propTypes = {};
export default RouterContainer;
