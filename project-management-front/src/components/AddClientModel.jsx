// import { WindowSharp } from "@mui/icons-material";
import axios from "axios";
import React, { useState } from "react";

function AddClientModel(props) {
  const [formData, setFormData] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const handleChange = (e) => {
    // setFormData(client);
    // setFormData([...formData, { [e.target.name]: e.target.value }]);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("inside submit======", formData);
    console.log("http://localhost:4000/api/v1/createclient");

    try {
      setIsFormSubmit(true);
      const response = await axios.post(
        "http://localhost:4000/api/v1/createclient",
        {
          Name: formData.name,
          Email: formData.email,
          Mobile: formData.phone,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setIsFormSubmit(false);
        window.location = "/";
      } else {
        alert("Something went Wrong !!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal fade" id="addClient" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModelLabel">
              Add Client
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  // value={formData.name}
                  // onChange={(e) => console.log(e.target.value)}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  // value={formData.email}
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  name="phone"
                  // value={formData.phone}
                  className="form-control"
                  onChange={(e) => handleChange(e)}
                />
              </div>
              {isFormSubmit ? (
                <button type="submit" className="btn btn-primary">
                  Submmiting....
                </button>
              ) : (
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddClientModel;
