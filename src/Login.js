import React from "react";
import axios from "axios";



// import {Link,Routes,Route,useNavigate, Navigate}from "react-router-dom"

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  signSubmit = (event) => {
    event.preventDefault();
    

    let myformdata = new FormData();
    myformdata.append("st_email", this.state.email);
    myformdata.append("st_password", this.state.password);

    axios
      .post("https://akashsir.in/myapi/crud/student-login-api.php", myformdata)
      .then(function (response) {
        console.log(response);

        if (response.data.flag == "1") {
          alert("SucessFully Login");
          var a = response.data.st_id
          var b = response.data.st_name
          // var c = response.data.st_gender
          // var d = response.data.st_email
          // var e = response.data.st_mobileno
          
          localStorage.setItem("st_id",JSON.stringify(a))
          localStorage.setItem("st_name",JSON.stringify(b))
          // localStorage.setItem("st_gender",JSON.stringify(c))
          // localStorage.setItem("st_email",JSON.stringify(d))
          // localStorage.setItem("st_mobileno",JSON.stringify(e))
        
                
        } else 
        {
          alert("You Enteres Wrong Email Id Or Pass");
        }
      
      })
      .catch(function (response) {
        console.log(response);
      });

     
      // const Navigate = useNavigate();
      // Navigate('/ForgetPass')
  };

  render() {
    return (
      <>
      
        <h1>Login Here</h1>
        <br />
        <form onSubmit={this.signSubmit} >
          <label>
            Enter Email ID : &nbsp;
            <input
              type="email"
              name="email"
              onChange={this.handleChange.bind(this)}
            />{" "}
          </label>
          <br />
          <br />
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

export default Login;
