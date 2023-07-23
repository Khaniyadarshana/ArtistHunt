import React, { useState } from "react";
import { post } from "axios";
import { useNavigate } from "react-router-dom";

function CrudAdd(props) {
  const initialState = {
    artistName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const [crud, setCrud] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!crud.artistName || !crud.lastName || !crud.email || !crud.password) {
      setErrorMessage("Please fill out all the fields.");
      return;
    }

    setErrorMessage(""); // Clear any previous error message

    try {
      const response = await post("/api/cruds/", crud);
      navigate(`/cruds/${response.data._id}`);
    } catch (error) {
      console.log("Error:", error);
      setErrorMessage("Failed to create the artist.");
    }
  }

  function handleChange(event) {
    setCrud({ ...crud, [event.target.name]: event.target.value });
  }

  function handleCancel() {
    navigate("/cruds");
  }

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h1>Artist SignUp</h1>
      <hr />
      {/* Add onSubmit attribute to the form element */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Artist Name</label>
          <input
            name="artistName"
            type="text"
            required
            value={crud.artistName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            type="text"
            required
            value={crud.lastName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
            required
            value={crud.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            required
            value={crud.password}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <p className="text-danger">{errorMessage}</p>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CrudAdd;
