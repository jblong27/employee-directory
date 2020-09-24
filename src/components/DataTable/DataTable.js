import React from "react";
import Moment from "react-moment";
import "./styles.css";

function TableData(props) {
  return (

    <table className="tableEmployee ">
      <thead>
        <tr>
          <th></th>
          <th onClick={props.sortByName}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Date of Birth</th>
        </tr>
      </thead>
    </table>
  )
}