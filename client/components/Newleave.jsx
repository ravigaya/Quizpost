import React, { useState } from 'react';
 import '../src/form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function App() {
  const [studentClass, setStudentClass] = useState('');
  const [section, setSection] = useState('');
  const [student, setStudent] = useState('');
  const [reason, setReason] = useState('');
  const [leaveDays, setLeaveDays] = useState('single');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('');

  const submit = (e) => {
    e.preventDefault();
    // Add submit logic here
  };

  return (
    <div className="d-flex flex-row vh-100 justify-content-center align-items-center">
      <form className="w-100 bg-yellow rounded p-3" onSubmit={submit}>
        <h3>Add Leave Request</h3>
        <Link to='/dashboard'>X</Link>
        <div className="mb-2">
          <label htmlFor="studentClass">Student Class</label>
          <select
            id="studentClass"
            className="form-control"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
          >
            <option value="">Select Class</option>
            <option value="class1">Class 1</option>
            <option value="class2">Class 2</option>
            {/* Add more classes as needed */}
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="section">Section</label>
          <select
            id="section"
            className="form-control"
            value={section}
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="">Select Section</option>
            <option value="A">A</option>
            <option value="B">B</option>
            {/* Add more sections as needed */}
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="student">Student</label>
          <select
            id="student"
            className="form-control"
            value={student}
            onChange={(e) => setStudent(e.target.value)}
          >
            <option value="">Select Student</option>
            <option value="student1">Student 1</option>
            <option value="student2">Student 2</option>
            {/* Add more students as needed */}
          </select>
        </div>

        <div className="mb-2">
          <label htmlFor="reason">Reason</label>
          <textarea
            id="reason"
            className="form-control"
            placeholder="Reason for leave"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          ></textarea>
        </div>

        <div className="mb-2">
          <label>Number of Leave Days</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="leaveDays"
              id="singleDay"
              value="single"
              checked={leaveDays === 'single'}
              onChange={(e) => setLeaveDays(e.target.value)}
            />
            <label className="form-check-label" htmlFor="singleDay">
              Single Day
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="leaveDays"
              id="multipleDays"
              value="multiple"
              checked={leaveDays === 'multiple'}
              onChange={(e) => setLeaveDays(e.target.value)}
            />
            <label className="form-check-label" htmlFor="multipleDays">
              Multiple Days
            </label>
          </div>
          {leaveDays === 'multiple' && (
            <div className="mt-2">
              <label htmlFor="date">Select Dates</label>
              <input
                type="date"
                className="form-control"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="mb-2">
          <label>Status</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="approved"
              value="Approved"
              checked={status === 'Approved'}
              onChange={(e) => setStatus(e.target.checked ? 'Approved' : '')}
            />
            <label className="form-check-label" htmlFor="approved">
              Approved
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="rejected"
              value="Rejected"
              checked={status === 'Rejected'}
              onChange={(e) => setStatus(e.target.checked ? 'Rejected' : '')}
            />
            <label className="form-check-label" htmlFor="rejected">
              Rejected
            </label>
          </div>
        </div>
   <div className='d-flex'>

    <button type="submit" className="btn btn-success rounded-0">Submit</button>
   <button type="submit" className="btn btn-success rounded-0">Reset</button>

    </div>
      </form>
    </div>
  );
}

export default App;
