// Function Component
import React, { useState, useRef } from "react";
import "./ValidationSample.css";

const ValidationSample = () => {
  const [password, setPassword] = useState("");
  const [clicked, setClicked] = useState(false);
  const [validated, setValidated] = useState(false);
  const passwordBox = useRef();

  const onChange = (e) => {
    setPassword(e.target.value);
  };

  const onButtonClick = () => {
    setClicked(true);
    onCheckValidation();
  };

  const onCheckValidation = () => {
    if (password === "0000") {
      setValidated(true);
      alert("검증이 완료되었습니다.");
    } else {
      setValidated(false);
      passwordBox.current.focus();
    }
  };

  return (
    <div>
      <input
        ref={passwordBox}
        type="password"
        value={password}
        onChange={onChange}
        className={clicked ? (validated ? "success" : "failure") : ""}
      />
      <button onClick={onButtonClick}>검증하기</button>
    </div>
  );
};

// Class Component
// import React, { Component, useRef } from "react";
// import "./ValidationSample.css";

// class ValidationSample extends Component {
//   state = {
//     password: "",
//     clicked: false,
//     validated: false,
//   };

//   handleChange = (e) => {
//     this.setState({
//       password: e.target.value,
//     });
//   };

//   handleButtonClick = () => {
//     this.setState({
//       clicked: true,
//       validated: this.state.password === "0000",
//     });
//     this.input.focus();
//   };

//   render() {
//     return (
//       <div>
//         <input
//           ref={(ref) => (this.input = ref)}
//           type="password"
//           value={this.state.password}
//           onChange={this.handleChange}
//           className={
//             this.state.clicked
//               ? this.state.validated
//                 ? "success"
//                 : "failure"
//               : ""
//           }
//         />
//         <button onClick={this.handleButtonClick}>검증하기</button>
//       </div>
//     );
//   }
// }

export default ValidationSample;
