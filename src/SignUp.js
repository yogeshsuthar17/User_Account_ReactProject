import React from "react";
import axios from "axios";

class SignUp extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {name1 : "", gender : "", email: "", mobileno: "", password: "" }
  }
  
  handleChange = (event) => {
    this.setState ( { [event.target.name]: event.target.value });
  };

  signSubmit = (event) => {
    event.preventDefault();

    let myformdata = new FormData();
    myformdata.append("st_name" , this.state.name1);
    myformdata.append("st_gender" , this.state.gender);
    myformdata.append("st_email" , this.state.email);
    myformdata.append("st_mobileno" , this.state.mobileno);
    myformdata.append("st_password" , this.state.password);

    axios.post("https://akashsir.in/myapi/crud/student-add-api.php", myformdata).then(function (response) {
      console.log(response)

      if (response.data.flag == "1")
      {
        // var msg = response.data.message;
        alert('Record Added')
      }
    }).catch(function(response) {
      console.log(response)
    });
  };

  render() {
    return (
      <>
        <h1>SignUp Here</h1>
        <br />
        <form onSubmit={this.signSubmit}>
          <label>
            Enter Name : &nbsp;
            <input type="text" name="name1" onChange={this.handleChange.bind(this)}/>
          </label>
          <br/>
          <br/>
          <label>
            Select Gender : &nbsp;
            <input type="radio" name="gender" value="Male" onChange={this.handleChange.bind(this)}/>
            <label>Male</label>
            <input type="radio" name="gender" value="FeMale" onChange={this.handleChange.bind(this)}/>
            <label>FeMale</label>
          </label>
          <br/>
          <br/>
          <label>
            Enter Email ID : &nbsp;
            <input type="email" name="email" onChange={this.handleChange.bind(this)} />{" "}
          </label>
            <br />
          <br />
          <label>
            Enter Mobile No : &nbsp;
            <input type="number" name="mobileno" onChange={this.handleChange.bind(this)} />{" "}
          </label>
          <br/>
          <br/>
          <label>
            Enter Password : &nbsp;
            <input
              type="password"
              name="password"
              onChange={this.handleChange}
            />{" "}
            <br />
          </label>
          <br />
          <button type="submit"> Submit </button>
        </form>
        
      </>
    );
  }
}

export default SignUp;
