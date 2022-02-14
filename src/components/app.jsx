import React from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import Icon from "@mui/material/Icon";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Icon className="iconStyle" fontSize="large">
          import_contacts
        </Icon>
        <SearchBar placeholder="Enter a Book title ..." />
      </div>
    );
  }
}

export default App;
