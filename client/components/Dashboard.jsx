import React from 'react';
import { Link } from 'react-router-dom';

 export function Dashboard() {
  return (
    <div className="main-content p-4 mb-10">
      <h1 className="text-center mb-4">Dashboard</h1>
       <div className='d-flex flex-row justify-content-between'>
       <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      2021-2022   
      
      </button>
  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" href="#">2021-2022</a>
    <a className="dropdown-item" href="#">2023-2024</a>
    <a className="dropdown-item" href="#">2024-2025</a>
  </div>

  <input
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Link to='/createnewleave' className='btn btn-danger' >+Create New Leave</Link>
        
</div>

       </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Enroll Number</th>
            <th>Student Name</th>
            <th>Class Email</th>
            <th>Section</th>
            <th>Email</th>
            <th>Reason</th>
            <th>Leave Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
            
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Doe</td>
            <td>jane@example.com</td>
            <td>User</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

// export default Dashboard;
