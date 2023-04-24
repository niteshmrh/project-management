import axios from "axios";
import React, { useState, useEffect } from "react";

function AddProjectModel(props) {
  const [formData, setFormData] = useState({});
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [clients, setClients] = useState([]);
  // client Fetching

  useEffect(() => {
    fetchClintApi();
  }, []);

  const fetchClintApi = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/allClients",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setClients(response.data.data);
        console.log(response.data.data);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      setIsFormSubmit(true);
      const response = await axios.post(
        "http://localhost:4000/api/v1/createproject",
        {
          Name: formData.name,
          Description: formData.description,
          Status: formData.status,
          Client: formData.client,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        setIsFormSubmit(false);
        window.location = "/";
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal fade" id="addProject" tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModelLabel">
              Add New Project
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
              <div className="mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  onChange={(e) => handleChange(e)}
                ></textarea>
              </div>

              <div className="mb-2">
                <label className="form-label">Status</label>
                <select
                  className="form-control"
                  name="status"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Select Status</option>
                  <option>Not Started</option>
                  <option>Pending</option>
                  <option>Started</option>
                  <option>Completed</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Client</label>
                <select
                  className="form-control"
                  name="client"
                  onChange={(e) => handleChange(e)}
                >
                  <option>Select Client</option>
                  {clients.length > 0 &&
                    clients?.map((client) => (
                      <option value={client.id} key={client.id}>
                        {client?.Name}
                      </option>
                    ))}
                  {/* <option>Abc</option>
                  <option>def</option> */}
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProjectModel;
