import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. get the text from that input
    console.log(this);

    // 3. Change the page to /store/whatever-they-entered
  };
    render() {
      console.log(this);
      return (
        <form className="store-selector">
          <h2>Please Enter A Store</h2>
          <input type="text" 
          required 
          placeholder="Store Name" 
          defaultValue={getFunName()} 
          />
          <button type="submit">Visit Store →</button>
        </form>
      );
    }
}

export default StorePicker;