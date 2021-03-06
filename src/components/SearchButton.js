import React from "react";
import { Link, Route } from "react-router-dom";

class AddButton extends React.Component {
  render() {
    return (
      <div className="open-search">
        <Route
          exact
          path="/"
          render={() => (
            <Link to="/search">
              Add a book
            </Link>
          )}
        />
      </div>
    );
  }
}
export default AddButton;
