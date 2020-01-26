import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

import "./Dashboard.css";

const DASHBOARD_ITEMS = [
  {
    name: "HSR Fare Subsidy",
    organization: "By: Hamilton Street Rail",
    description: "Low income families receive 50% lower fares on monthly passses with the HSR!",
    price: 50.99
  },
  {
    name: "HSR Fare Subsidy",
    organization: "By: Hamilton Street Rail",
    description: "Low income families receive 50% lower fares on monthly passses with the HSR!",
    price: 50.99
  },
  {
    name: "HSR Fare Subsidy",
    organization: "By: Hamilton Street Rail",
    description: "Low income families receive 50% lower fares on monthly passses with the HSR!",
    price: 50.99
  },
  {
    name: "HSR Fare Subsidy",
    organization: "By: Hamilton Street Rail",

    description: "Low income families receive 50% lower fares on monthly passses with the HSR!",
    price: 50.99
  },
  {
    name: "HSR Fare Subsidy",
    organization: "By: Hamilton Street Rail",

    description: "Low income families receive 50% lower fares on monthly passses with the HSR!",
    price: 50.99
  },
  {
    name: "HSR Fare Subsidy",
    organization: "By: Hamilton Street Rail",

    description: "Low income families receive 50% lower fares on monthly passses with the HSR!",
    price: 50.99
  },
  {
    name: "HSR Fare Subsidy",
    organization: "By: Hamilton Street Rail",

    description: "Low income families receive 50% lower fares on monthly passses with the HSR!",
    price: 50.99
  },
  {
    name: "HSR Fare Subsidy",
    organization: "By: Hamilton Street Rail",

    description: "Low income families receive 50% lower fares on monthly passses with the HSR!",
    price: 50.99
  }
];

const Profile = () => {
  const { loading, user } = useAuth0();
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    setTimeout(() => setItems(DASHBOARD_ITEMS), 3000);
  });

  if (loading || !user || items.length == 0) {
    return <Loading />;
  }

  const dashboardItems = items.map((item) => (
    <div className="dashboard-item">
      <h3>{ item.name }</h3>
      <h5>{ item.organization }</h5>
      <h4>{ item.description }</h4>
      <h4>{ item.price }</h4>
    </div>

  ));

  return (
    <div className="dashboard-container">
      { dashboardItems }
    </div>
  );
};

export default Profile;
