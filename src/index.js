import React from "react";
import ReactDOM from "react-dom";

// Import css file
import "./index.css";

// Import components
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";

const App = () => {
  return (
    <div class="container bootstrap snippets bootdeys bootdey">
      <div class="row decor-default">
        <SideBar />
        <Main />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));
