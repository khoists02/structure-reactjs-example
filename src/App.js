import React, { Component } from "react";
import logo from "./logo.svg";
import  Header from "./components/Layout/Header";
import "./App.css";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      isAdmin : props.isAdmin
    }
  }

  test = () => {

  }

  render(){
    const { isAdmin } = this.props;
    return (
      <div className="body">
        <Header>
          Header's
        </Header>
      </div>
    );
  }
  
}

export default App;
