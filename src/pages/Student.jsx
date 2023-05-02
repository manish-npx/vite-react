import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";

function Student() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users`).then((res) => {
      console.log(res.data.users);
      setStudents(res.data.users);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loading />;
  }

  let studentResult = students.length && students.map((stu, i) => {
      return (
        <tr key={stu.id}>
          <td>{i + 1}</td>
          <td>{stu.firstName}</td>
          <td>{stu.lastName}</td>
          <td>{stu.email}</td>
          <td>{stu.gender}</td>
          <td>{stu.phone}</td>
          <td>
            <Link to="/" className="btn btn-sm btn-primary">
              Edit
            </Link>
          </td>
          <td>
            <Link to="/" className="btn btn-sm btn-danger">
              Delete
            </Link>
          </td>
        </tr>
      );
    });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Student List
                  <Link
                    to="/student/create"
                    className="btn btn-xs btn-primary float-end"
                  >
                    Add New
                  </Link>
                </h4>
              </div>
              <div className="card-boady">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Edit</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>{studentResult}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Student;
