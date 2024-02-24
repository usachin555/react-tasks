import { Component } from "react";

class Empinfo extends Component {
  constructor() {
    super();
    this.state = {
      Empinfo: [
        {
          id: 1,
          name: "rohit",
          designation: "frontend-developer",
          salary: 10000,
        },
        {
          id: 2,
          name: "virat",
          designation: "frontend-developer",
          salary: 12000,
        },
        {
          id: 3,
          name: "klRahul",
          designation: "backend-developer",
          salary: 13000,
        },
        {
          id: 4,
          name: "siraj",
          designation: "backend-developer",
          salary: 14000,
        },
        {
          id: 5,
          name: "ishan",
          designation: "frontend-developer",
          salary: 15000,
        },
        {
          id: 6,
          name: "bumrah",
          designation: "backend-developer",
          salary: 18000,
        },
        {
          id: 7,
          name: "dhoni",
          designation: "backend-developer",
          salary: 18000,
        },
        {
          id: 8,
          name: "ashwin",
          designation: "frontend-developer",
          salary: 20000,
        },
        {
          id: 9,
          name: "surya",
          designation: "frontend-developer",
          salary: 10000,
        },
        {
          id: 10,
          name: "mithali",
          designation: "backend-developer",
          salary: 20000,
        },
      ],
      filter:[]
    };
  }
  sortFrontEnd=()=>{
     let res1 = this.state.Empinfo.filter((item)=>item.designation==="frontend-developer");
     console.log(res1)
     this.setState(
      {
        filter:res1
      }
     )
  }
  sortBackEnd=()=>{
    let res2 = this.state.Empinfo.filter((item)=>item.designation==="backend-developer");
    console.log(res2)
    this.setState(
     {
      // console.log(res1)
       filter:res2
     }
    )
  }
  render() {
    return (
      <div>       
        <h2>productData</h2>
        <button onClick={this.sortFrontEnd}>frontend</button>
        <button onClick={this.sortBackEnd}>Backend</button>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>designation</th>
              <th>salary</th>
            </tr>
          </thead>
            {this.state.filter.map((eachObject) => {
              return (
                <tbody>
                <tr key={eachObject.id}>
                  <td>{eachObject.id}</td>
                  <td>{eachObject.name}</td>
                  <td>{eachObject.designation}</td>
                  <td>{eachObject.salary}</td>
                </tr>
                </tbody>
              );
            })}
        </table>
      </div>
    );
  }
}
export default Empinfo;
// sortFunction=()=>{
//     // let result =
// }
