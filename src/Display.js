import React from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import SignUp from "./SignUp";

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {st_id: "",st_name:"",st_gender:"",st_email:"",st_mobileno:"" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]:event.target.value });
  };
  componentDidMount() {
    var p = JSON.parse(localStorage.getItem("st_id"));
    //  console.log(p)
    this.setState({ st_id: p });
    console.log(p);
    console.log(this.state.st_id)

    
}


  signSubmit = (event) => {
    event.preventDefault();

  
  const uid = this.state.st_id;
    axios
      .get(`https://akashsir.in/myapi/crud/student-detail-api.php?st_id=${uid}`)
      .then( (response) => {
        console.log(response.data);
        console.log(response.data.st_name);
        
        if (response.data.flag == "1") {
          // var msg = response.data.message;
          alert("You display");
          this.setState({ st_name:response.data.st_name})
          this.setState({ st_gender:response.data.st_gender})
          this.setState({ st_email:response.data.st_email})
          this.setState({ st_mobileno:response.data.st_mobileno})
          
          
         
            
          } 

      })
      .catch( (response) =>  {
        console.log(response);
      });
  
  };

  render() {
    return (
      <>
      <h1>Display</h1>
        Name : <input type="text" name="uname" value={this.state.st_name} readOnly></input><br/><br/>
      Gender :<input type="text" name="ugender" value={this.state.st_gender} readOnly></input> <br/><br/>
        
      Email : <input type="text" name="uemail" value={this.state.st_email} readOnly></input><br/><br/>
      Mobileno :<input type="text" name="umobileno" value={this.state.st_mobileno} readOnly></input> <br/><br/>
      
        <br />
        <form onSubmit={this.signSubmit}>
          {/* <label>
            Enter  ID : &nbsp;
            <input
              type="number"
              name="id"
              onChange={this.handleChange.bind(this)}
            />
          </label> */}
          <br />
          <br />
          <button type="submit"> Display </button>
        </form>
      </>
    );
  }
}

export default Display;
