import React from "react";
import SearchBar from "./SearchBar";

class app extends React.Component {
    render() {
      return (
          <div className="app">
            <SearchBar placeholder="Enter a Book title ..." />
          </div>
      );
    }
  }

export default app;
