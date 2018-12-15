import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import SearchComponent from './searchComponent';

class MyApp extends React.Component{
  render() {
    return (
      <div className="myClass">
        <p>Git Repository Search</p>
        <SearchComponent />
      </div>
    );
  }
}
ReactDOM.render(<MyApp />, document.getElementById("root"));
