import React from "react";
import "./Admin.css";
import AdminCard from "./AdminCard";

function Admin() {
  return (
    <div className="admin">
      <h1>Admin Logs</h1>
      <div className="headings">
        <div className="table-heading">Location</div>
        <div className="table-heading"> Customer Name</div>
        <div className="table-heading">Email Address</div>
        <div className="table-heading">Date</div>
        <div className="table-heading">Time</div>
        <div className="table-heading">Time Range</div>
      </div>

      <AdminCard
        location="MTCC"
        name="Abdul"
        email="akhan97@hawk.iit.edu"
        date="11/7/2021"
        time="10 AM"
        duration="2 hours"
      />
      <AdminCard
        location="MTCC"
        name="Abdul"
        email="akhan97@hawk.iit.edu"
        date="11/7/2021"
        time="10 AM"
        duration="2 hours"
      />
      <AdminCard
        location="MTCC"
        name="Abdul"
        email="akhan97@hawk.iit.edu"
        date="11/7/2021"
        time="10 AM"
        duration="2 hours"
      />
      <AdminCard
        location="MTCC"
        name="Abdul"
        email="akhan97@hawk.iit.edu"
        date="11/7/2021"
        time="10 AM"
        duration="2 hours"
      />
    </div>
  );
}

export default Admin;
