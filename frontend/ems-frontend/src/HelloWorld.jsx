import { Link } from 'react-router-dom'

function HelloWorld() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Employee Management System!</h1>

      <p className="mt-3">
        Manage your employee records in one place.
      </p>

      <Link to="/employees" className="btn btn-primary mt-3">
        Employees List
      </Link>
    </div>
  )
}

export default HelloWorld