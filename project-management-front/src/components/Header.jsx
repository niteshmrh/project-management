import React from "react";
import { NavLink } from "react-router-dom";
import AddClientModel from "./AddClientModel";
import AddProjectModel from "./AddProjectModel";

function Header(props) {
  return (
    <nav className="bg-body-tertiary py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex  justify-content-between">
              <div className="logo fw-bold fs-4 text-danger">
                <NavLink to="/" className="linker">
                  <img
                    src="./project.png"
                    alt="Logo"
                    width={56}
                    height={36}
                    marginRight="14px"
                    className="d-inline-block align-text-top"
                  />
                  <span className="ms-3 mb-3 fs-10">Project Management</span>
                </NavLink>
              </div>
              <div className="menu-bar">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#addClient" // ye impotant h ye id ye form me addClient wale pge me present hoga
                >
                  Add Client
                </button>
                <button
                  type="button"
                  className="btn btn-success ms-3"
                  data-bs-toggle="modal"
                  data-bs-target="#addProject" // ye impotant h
                >
                  New Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddClientModel />
      <AddProjectModel />
    </nav>
  );
}

export default Header;
