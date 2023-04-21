// import axios from "axios";
import React from "react";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

function ClientDetails(props) {
  // const { id } = useParams();
  // console.log(id);

  //   useEffect(() => {
  //     axios
  //       .get("http://3.108.40.132:1337/api/clients/74" + id)
  //       .then((res) => console.log(res));
  //   });
  return (
    <div>
      <h1>I am client page</h1>
      <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
      </ul>
    </div>
  );
}

export default ClientDetails;
