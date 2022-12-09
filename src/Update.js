import React from "react";
import axios from "axios";

class Update extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {st_id:"",name1 : "", gender : "", email: "", mobileno: ""}
  }
  
  handleChange = (event) => {
    this.setState ( { [event.target.name]: event.target.value });
  };
 
  componentDidMount()
  {
    var p = JSON.parse(localStorage.getItem("st_id"));
    //  console.log(p)
    this.setState({ st_id: p });
    console.log(p);
    console.log(this.state.st_id)
    const uid = this.state.st_id;
    axios
      .get(`https://akashsir.in/myapi/crud/student-detail-api.php?st_id=${p}`)
      .then( (response) => {
        console.log(response.data);
        console.log(response.data.st_name);
        
        if (response.data.flag == "1") {
          // var msg = response.data.message;
          // alert("You display");
          this.setState({ name1:response.data.st_name})
          this.setState({ gender:response.data.st_gender})
          this.setState({ email:response.data.st_email})
          this.setState({ mobileno:response.data.st_mobileno})}})
  
          
          
         
            
          } 

      
   
   
    
   
   
  
  
  // componentDidUpdate()
  // {
  // localStorage.setItem("st_name",JSON.stringify(this.state.name1))
  // localStorage.setItem("st_gender",JSON.stringify(this.state.gender))
  //      localStorage.setItem("st_email",JSON.stringify(this.state.email))
  //       localStorage.setItem("st_mobileno",JSON.stringify(this.state.mobileno))
        
     
  // }
 
 

  signSubmit = (event) => {
    event.preventDefault();

    let myformdata = new FormData();
    myformdata.append("st_id" , this.state.st_id);
    myformdata.append("st_name" , this.state.name1);
    myformdata.append("st_gender" , this.state.gender);
    myformdata.append("st_email" , this.state.email);
    myformdata.append("st_mobileno" , this.state.mobileno);
    

    axios.post("https://akashsir.in/myapi/crud/student-edit-api.php", myformdata).then(function (response) {
      console.log(response)

      if (response.data.flag == "1")
      {
        // var msg = response.data.message;
        
       
        
        alert('Record updated')
        
        
        
      }
    }).catch(function(response) {
      console.log(response)
    });
  };

  render() {
    return (
      <>
      <h1>Update Here</h1>
      <form onSubmit={this.signSubmit.bind(this)}>
       Name : <input type="text" name="name1" value={this.state.name1} onChange={this.handleChange.bind(this)}></input><br/><br/>
       Gender :<input type="text" name="gender" value={this.state.gender} onChange={this.handleChange.bind(this)}></input> <br/><br/>
       Email : <input type="text" name="email" value={this.state.email} onChange={this.handleChange.bind(this)}></input><br/><br/>
       Mobileno :<input type="text" name="mobileno" value={this.state.mobileno} onChange={this.handleChange.bind(this)}></input> <br/><br/>
       <br />
       <button type="submit"> Submit </button>
       </form>
       <br />
       <br />
        
        {/* <form onSubmit={this.signSubmit}>
        {/* <label>
            Enter id : &nbsp;
            <input type="text" name="id" onChange={this.handleChange.bind(this)}/>
          </label> */}
          {/* <br/>
          <br/>
          <label>
            Enter Name : &nbsp;
            <input type="text" name="name1" value={this.state.name1} onChange={this.handleChange.bind(this)}/>
          </label>
          <br/>
          <br/>
          <label>
           Gender : &nbsp;
            <input type="text" name="gender" value={this.state.gender}   onChange={this.handleChange.bind(this)}/>
            
          </label>
          <br/>
          <br/>
          <label>
            Enter Email ID : &nbsp;
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} />{" "}
          </label>
            <br />
          <br />
          <label>
            Enter Mobile No : &nbsp;
            <input type="number" name="mobileno" value={this.state.mobileno} onChange={this.handleChange.bind(this)} />{" "}
          </label>
          <br/>
          <br/>
         
          <br />
          <button type="submit"> Submit </button>
          <button type="submit" onClick={this.show.bind(this)}> Show </button>
        </form> */} 
      </>
    );
  }
}

export default Update;
