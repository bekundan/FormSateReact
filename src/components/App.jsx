import React, { useState } from "react";

function App() {
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  // function updateFname(event) {
  //   const firstName = event.target.value;
  //   setFname(firstName);
  // }
  // function updateLname(event) {
  //   const lastName = event.target.value;
  //   setLname(lastName);
  // }
  //******* now we using the compledx and  *******?**** */
  ///**** Here we go the array and destructure and set the new value */
  const [fullName, setFullname] = useState({
    fName: "",
    lName: ""
  });
  //******** this function on when changes in inputs* */
  function handleChange(event) {
    //****** Here we get the events values */
    const newValue = event.target.value;
    const inputName = event.target.name;
    // console.log(inputName);
    //******* How we update normaly but it delete the prev value **** */
    // if (inputName === "fName") {
    //   setFullname({ fName: newValue });
    // } else if (inputName === "lName") {
    //   setFullname({ lName: newValue });
    // }
    //*****8** Now we set the fname as which events is triger  **8*8 */
    setFullname((prevValue) => {
      // console.log(prevValue);
      if (inputName === "fName") {
        return {
          fName: newValue,
          lName: prevValue.lName
        };
      } else if (inputName === "lName") {
        return {
          fName: prevValue.fName,
          lName: newValue
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello
        {fullName.fName}
        {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
