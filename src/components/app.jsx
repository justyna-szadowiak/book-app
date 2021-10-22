import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <SearchBar searchBook={this.searchBook} placeholder="Enter a Book title ..." />
            </div>
        );
    }
}

export default App;
