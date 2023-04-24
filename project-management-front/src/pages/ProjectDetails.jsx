import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallIcon from "@mui/icons-material/Call";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

function ProjectDetails(props) {
  const [project, setProject] = useState([]);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [particularClient, setParticularClient] = useState({});
  // const [updateData, setUpdateData] = useState({});

  // const handleChange = (e) => {
  //   setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   try {
  //     setIsFormSubmit(true);
  //     const response = await axios.post(
  //       "http://3.108.40.132:1337/api/projects/",
  //       {
  //         data: {
  //           project_name: formData.name,
  //           description: formData.description,
  //           status: formData.status,
  //           clients: formData.client,
  //         },
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(response);
  //     if (response.status === 200) {
  //       setIsFormSubmit(false);
  //       // window.location = "/";
  //     } else {
  //       alert("Something went wrong!!!");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [client, setClient] = useState("");

  useEffect(() => {
    fetchProjectApi();
    fetchClientApi();
  }, []);

  useEffect(() => {
    if (project && clients) {
      setProjectName(project?.Name);
      setDescription(project?.Description);
      setStatus(project?.Status);
      setClient(project?.clients?.data[0]?.id);
      // console.log("clients--______________", clients[0].id);
      for (let i = 0; i < clients.length; i++) {
        if (project.Client == clients[i].id) {
          setParticularClient(clients[i]);
          console.log("particular client---", clients[i]);
          break;
        }
      }
    }
  }, [project, clients]);

  // `http://3.108.40.132:1337/api/projects/${id}?populate=*`,

  const fetchProjectApi = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/particularProject/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setProject(response.data.data);
        console.log("project-----", response.data.data);
        setIsLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchClientApi = async () => {
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
        console.log("client in client api", response.data.data);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ON delete handle

  const handleDeleteProject = async () => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        "http://3.108.40.132:1337/api/projects/" + id,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // console.log("delete project-----", response);

      if (response.status === 200) {
        window.location = "/";
        setIsLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitForms = (e) => {
    e.preventDefault();
    updateProject();
  };

  // update project

  const updateProject = async () => {
    try {
      setIsLoading(true);
      const response = await axios.put(
        "http://3.108.40.132:1337/api/projects/" + id,
        {
          Name: projectName,
          Description: description,
          Status: status,
          Client: client,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        setIsLoading(false);
        window.location = "/";
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <div>
        {/* <h1>Loding................</h1> */}
        <Loader />
      </div>
    );
  }

  // console.log(project);
  // console.log("----------", project.attributes.clients);
  console.log(
    "particulat Client down***********",
    Object.keys(particularClient).length
  );

  return (
    <div className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="border p-3 rounded">
              <div className="text-end">
                <NavLink to="/">
                  <button className="btn btn-light">
                    <KeyboardBackspaceIcon
                      style={{ fontSize: "22px", marginRight: "5px" }}
                    />
                    Back
                  </button>
                </NavLink>
              </div>
              <div>
                <h3>{project?.Name}</h3>
                <p className="mb-4">{project?.Description}</p>
                <p className="fw-bold mb-0">Project Status:</p>
                <p>{project?.Status}</p>
              </div>
              {Object.keys(particularClient).length > 0 ? (
                <div className="mt-5">
                  <h5 className="mb-3">Client Information</h5>
                  <ul className="list-group">
                    <li className="list-group-item">
                      <AccountCircleIcon
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                      <span>{particularClient?.Name}</span>
                    </li>
                    <li className="list-group-item">
                      <MailOutlineIcon
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                      <span>{particularClient?.Email}</span>
                    </li>
                    <li className="list-group-item">
                      <CallIcon
                        style={{ fontSize: "22px", marginRight: "5px" }}
                      />
                      <span>{particularClient?.Mobile}</span>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="mt-5">
                  No Client Found. Please Add Client ......
                </div>
              )}
              <div className="mt-5">
                <h5 className="mb-3">Update Project</h5>
                <form
                  onSubmit={(e) => submitForms(e)}
                  // onSubmit={(e) => handleSubmit(e)}
                >
                  <div className="mb-2">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={`${projectName}`}
                      name="name"
                      onChange={(e) => setProjectName(e.target.value)}
                    />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Description</label>
                    <textarea
                      className="form-control"
                      onChange={(e) => setDescription(e.target.value)}
                      name="description"
                      value={`${description}`}
                    ></textarea>
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Status</label>
                    <select
                      className="form-control"
                      onChange={(e) => setStatus(e.target.value)}
                      name="status"
                      value={`${status}`}
                    >
                      <option>Select Status</option>
                      <option value="Not Started">Not Statred</option>
                      <option value="Pending">Pending</option>
                      <option value="Started">Started</option>
                      <option value="Completed">Completed</option>
                      <option value="In progress">In progress</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Client</label>
                    <select
                      className="form-control"
                      onChange={(e) => setClient(e.target.value)}
                      name="client"
                      value={`${client}`}
                    >
                      <option>Select Client</option>
                      {clients.length > 0 &&
                        clients?.map((client) => (
                          <option value={client.id} key={client.id}>
                            {client.Name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="text-end mt-4">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteProject()}
                >
                  <DeleteIcon
                    style={{ fontSize: "22px", marginRight: "5px" }}
                  />
                  Delete Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
