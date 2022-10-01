import React from "react";

const Dashboard = () => {
  return (
    <div className="col main pt-5 mt-3">
      <p className="lead d-none d-sm-block">Add Certifications</p>
      <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
          <span className="sr-only">Close</span>
        </button>
        <strong>Data and Records</strong> Learn more about employee
      </div>
      <div className="row mb-3">
        <div className="col-xl-3 col-sm-6 py-2">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <div className="rotate">
                <h6 className="text-center text-uppercase">
                  <i
                    className="text-center fa fa-plus fa-6x"
                    aria-hidden="true"
                  ></i>
                </h6>
              </div>
              <h6 className="text-center text-uppercase"></h6>
              <h6 className="text-center text-uppercase">Add</h6>
              <h6 className="text-center text-uppercase">Certifications</h6>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* <div className="row ">
        <div className="col-lg-7 col-md-6 col-sm-12">
          <h5 className="mt-3 mb-3 text-secondary">
            Check More Records of Employees
          </h5>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th>No</th>
                  <th>Label</th>
                  <th>Header</th>
                  <th>Column</th>
                  <th>Record Data</th>
                </tr>
              </thead>
              <tbody>
                {record.slice(0, 5).map((output) => (
                  <tr>
                    <td>{output.id}</td>
                    <td>{output.name}</td>
                    <td>{output.email}</td>
                    <td>{output.username}</td>
                    <td>{output.website}</td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div classNameName="col-lg-5 col-md-6 col-sm-12 col-sm-offset-5"></div>
      </div> */}
      <hr />
      <h3 className="sub-header mt-5">Certifications</h3>
      <h3 className="sub-header mt-5"></h3>
      <div className="mb-3">
        <div className="card-deck">
          <div className="card card-inverse card-success text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>Img of certificate</p>

                <footer>
                  <cite title="Source Title">Name of Certificate </cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="card card-inverse card-danger text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>Img of certificate</p>

                <footer>
                  <cite title="Source Title">Name of Certificate </cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="card card-inverse card-warning text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>Img of certificate</p>

                <footer>
                  <cite title="Source Title">Name of Certificate </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <div className="card-deck">
          <div className="card card-inverse card-info text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>Img of certificate</p>

                <footer>
                  <cite title="Source Title">Name of Certificate </cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="card card-inverse card-info text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>Img of certificate</p>

                <footer>
                  <cite title="Source Title">Name of Certificate </cite>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="card card-inverse card-info text-center">
            <div className="card-body">
              <blockquote className="card-blockquote">
                <p>Img of certificate</p>

                <footer>
                  <cite title="Source Title">Name of Certificate </cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Dashboard;
