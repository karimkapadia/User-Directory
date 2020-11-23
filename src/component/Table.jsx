import React, { useEffect, useState } from "react";

function Table() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const result = await fetch(
      "https://randomuser.me/api/?results=10"
    ).then((r) => r.json());
    console.log(`[data function]`, result.results);
    setEmployees(result.results);
  };

  let sort = () => {
    console.log(`[sort function called]`)
let newOrder = [...employees]
     newOrder.sort(function (a, b) {
      if(a.name.first < b.name.first) {
        return -1
    }
    if(a.name.first > b.name.first) { 
        return 1
    }
    return 0;
    
    }); 
    // console.log(newOrder)
    // newOrder.forEach(item => {
    //   console.log(item.name)
      
    // })
    
    setEmployees(newOrder)
    console.log(employees)
    
  };
  let filterNum = (event) =>{
     console.log("inside filter function")
  //  let newList = employees.indexOf(employees.phone)
  //  console.log(newList);
    // setEmployees(newList)
  };

  return (
    <>
    <h1>Employee List</h1>
    <hr/>
    <input></input><button onClick={filterNum}>Filter by phone Number</button>
     <table className="table">
      <thead>
        <tr>
          <th scope="col">
            FirstName <button onClick={sort}>Sort</button>
          </th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((item, idx) => (
          <tr key={`emp-${idx}`}>
            <td>{item.name.first}</td>
            <td>{item.name.last}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr> 
          ))}
      
      </tbody>
    </table>
    </>
  );
  
}
export default Table;
