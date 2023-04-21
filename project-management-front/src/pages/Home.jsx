import React, { useEffect, useState } from "react";
// import AddClientModel from "../components/AddClientModel";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";
// import { color } from "@mui/system";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";
import EditIcon from "@mui/icons-material/Edit";

function Home(props) {
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isDeleteClient, setIsDeleteClient] = useState(false);
  const [isLoading, setLoading] = useState(false);
  let [color, setColor] = useState("black");

  setColor = (e) => {
    if (e.toLowerCase() === "not started") return (color = "red");
    if (e.toLowerCase() === "started") return (color = "blue");
    if (e.toLowerCase() === "pending") return (color = "orange");
    if (e.toLowerCase() === "completed") return (color = "green");
    if (e.toLowerCase() === "in progress") return (color = "yellow");

    // return color;
  };

  useEffect(() => {
    fetchClientApi();
    fetchProjectApi();
  }, [isDeleteClient]); // bracket me put krne pe delete ke action pe bs whi potion rerender hoga jo delete hoga

  const fetchClientApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4000/api/v1/allClients",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        // console.log("----", response.data.data);
        setClients(response.data.data);
        setLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("+++++++++", clients[0]?.Name);
  // `http://localhost:4000/api/v1/deleteClient?id=${id}`, when we use req.query

  const handleDeleteClient = async (id) => {
    try {
      setIsDeleteClient(true);
      const responce = await axios.delete(
        `http://localhost:4000/api/v1/deleteClient/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (responce.status === 201) {
        setIsDeleteClient(false);
        window.location = "/";
        // comming this to not reload the whole page
      } else {
        alert("Somethings went wrong !!!!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProjectApi = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:4000/api/v1/allProjects",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setProjects(response.data.data);
        setLoading(false);
      } else {
        alert("Something went wrong!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log("projects-----", projects);
  // console.log("data----", clients.data);
  // console.log("Attributes----", clients.data.attributes);
  // console.log("dataName----", clients.data[0].attributes.client_name);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
          {/* Project Lists */}
          {/* {isLoading == false ? ( */}
          {projects.map((project) => (
            <div className="col-md-6 mb-3" key={project.id}>
              <div className="card d-flex">
                <div className="card-body">
                  <div className="d-flex justify-content-between  align-items-center">
                    <div>
                      <h5>{project.Name}</h5>
                      <p className="fs-6 mt-2 mb-0">
                        Status :{" "}
                        <b
                          style={{
                            color: setColor(project.Status),
                          }}
                        >
                          {project.Status}
                        </b>
                      </p>
                    </div>
                    <NavLink to={`${project.id}`}>
                      <button className="btn btn-light">View</button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* // ) : (
          //   <Loader />
          // )} */}

          <hr className="mt-5" />
          {/* Client Lists */}
          <div className="mt-5 text-center">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody>
                {/* {isLoading == false ? ( */}
                {clients.map((client) => (
                  <tr className="client-lists" key={client.id}>
                    <td>{client.Name}</td>
                    <td>{client.Email}</td>
                    <td>{client.Mobile}</td>
                    <th>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeleteClient(client.id)}
                      >
                        {isDeleteClient ? (
                          <span>....</span>
                        ) : (
                          <DeleteForeverIcon
                            style={{ fontSize: "22px", marginright: "5px" }}
                          />
                        )}
                      </button>
                    </th>
                    <th>
                      <NavLink to={`${client.id}`}>
                        <button className="btn btn-success">
                          <EditIcon
                            style={{ fontSize: "22px", marginright: "5px" }}
                          />
                        </button>
                      </NavLink>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
