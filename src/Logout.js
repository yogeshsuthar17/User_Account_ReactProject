import React from "react";
import axios from "axios";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { st_id: "" };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]:event.target.value });
  };
  componentDidMount() {
    var p = JSON.parse(localStorage.getItem("st_id"));
    //  console.log(p)
    this.setState({ st_id: p });
    console.log(p);
  }

  signSubmit = (event) => {
    event.preventDefault();

    let myformdata = new FormData();
    myformdata.append("st_id", this.state.st_id);
    console.log(this.state.st_id)
    axios
      .post("https://akashsir.in/myapi/crud/student-logout-api.php", myformdata)
      .then( (response) => {
        console.log(response);
        if(response.data.flag == "1")
        {
            localStorage.clear()
            alert("loged out")
        }

      })
      .catch( (response) =>  {
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <h1>Logout</h1>
      
        <br />
        <form onSubmit={this.signSubmit}>
        
          
          <br />
          <br />
          <button type="submit"> logOut </button>
        </form>
      </>
    );
  }
}

export default Logout;
