import React from "react";
import axios from "axios";

class ForgetPass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signSubmit = (event) => {
    event.preventDefault();

    let myformdata = new FormData();
    myformdata.append("st_email", this.state.email);

    axios
      .post(
        "https://akashsir.in/myapi/crud/student-forgot-password-api.php",
        myformdata
      )
      .then(function (response) {
        console.log(response);

        if (response.data.flag == "1") {
          // var msg = response.data.message;
          alert("Your Password Is : ");
        }
      })
      .catch(function (response) {
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <h1>Forget Password</h1>
        <br />
        <form onSubmit={this.signSubmit}>
          <label>
            Enter Email ID : &nbsp;
            <input
              type="email"
              name="email"
              onChange={this.handleChange.bind(this)}
            />
          </label>
          <br />
          <br />
          <button type="submit"> Forget Password </button>
        </form>
      </>
    );
  }
}

export default ForgetPass;
