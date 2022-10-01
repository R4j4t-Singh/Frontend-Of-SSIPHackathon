import { useEffect, useState } from "react";
import React from "react";

const Dashboard = () => {
  const [record, setRecord] = useState([]);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resposne) => resposne.json())
      .then((res) => setRecord(res));
  };

  useEffect(() => {
    getData();
  });

  return (
    <div class="col main pt-5 mt-3">
      <p class="lead d-none d-sm-block">View,Edit and Add Students</p>
      <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
          <span class="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
      </div>
      <div class="row mb-3">
        <div class="col-xl-6 col-sm-6 py-2">
          <div class="text-right card text-white bg-white h-100">
            <div class="card-body">
              {/* <h5 class="text-info text-center ">Design </h5>
              <h4 class="text-info text-center ">Certificate</h4> */}
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="text-right card text-white bg-info h-100">
            <div class="card-body">
              <div class="rotate">
                <h6 class="text-center text-uppercase">
                  <i
                    class="text-center fa fa-file-word fa-5x"
                    aria-hidden="true"
                  ></i>
                </h6>
              </div>
              <h6 class="text-center text-uppercase"></h6>
              <h6 class="text-center text-uppercase">Design</h6>
              <h6 class="text-center text-uppercase">Certificate</h6>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6 py-2">
          <div class="text-right card text-white bg-info h-100">
            <div class="card-body">
              <div class="rotate">
                <h6 class="text-center text-uppercase">
                  <i
                    class="text-center fa fa-plus fa-5x"
                    aria-hidden="true"
                  ></i>
                </h6>
              </div>
              <h6 class="text-center text-uppercase"></h6>
              <h6 class="text-center text-uppercase">Add</h6>
              <h6 class="text-center text-uppercase">Student</h6>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div class="row ">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <h5 class="mt-3 mb-3 text-secondary">List of Courses</h5>
          <div class="table-responsive">
            <table class="table table-striped">
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>Course Name</th>
                  <th>Students In The Course</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {record.slice(0, 5).map((output) => (
                  <tr>
                    <td>{output.id}</td>
                    <td>{output.name}</td>
                    <td>{output.email}</td>
                    <td>
                      <button>View Course</button>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5"></div>
      </div>
    </div>
  );
};

export default Dashboard;
