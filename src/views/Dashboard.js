import React, { useState, useEffect } from "react";

import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";

import "./Dashboard.css";

const DASHBOARD_ITEMS = [
  {
    name: "Affordable Transit Pass",
    organization: "By: Hamilton Street Rail",
    description: "The program allows eligible residents to purchase an Adult Monthly Transit Pass for half price.",
    price: 50.99,
    url: "https://www.hamilton.ca/social-services/support-programs/affordable-transit-pass-program"

  },
  {
    name: "Ontario Renovates Program for Homeowners",
    organization: "By: Housing Services Divison",
    description: "Low-income homeowners recieve financial assistance to repair their homes to minimum level of health and safety.",
    price: 50.99,
    url: "https://www.hamilton.ca/social-services/support-programs/ontario-renovates-program-homeowners"
  },
  {
    name: "Ontario Electricity Support Program",
    organization: "By: Onatario Energy Board",
    description: "This program provides low-income consumers with a monthly on-bill credit to reduce their electricity bill.",
    price: 50.99,
    url: "https://www.oeb.ca/rates-and-your-bill/help-low-income-consumers/ontario-electricity-support-program"
  },
  {
    name: "Low-income Energy Assistance Program (LEAP)",
    organization: "By: Ontario Energy Board",
    description: "This is a one-time grant towards your electricity or natural gas bill if you are behind on your bill and may face having your service shut off. It is for emergency situations.",
    price: 50.99,
    url: "https://www.oeb.ca/rates-and-your-bill/help-low-income-consumers/low-income-energy-assistance-program"
  },
  {
    name: "Recreation Assistance Program",
    organization: "By: City of Hamilton",
    description: "This program allows low-income families the opportunity to participate in organized sports and recreation programs.",
    price: 50.99,
    url: "https://www.hamilton.ca/parks-recreation/registered-rec-programs/recreation-assistance-program"

  },
  
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
      <a href={ item.url } className="btn btn-link">More info</a>
    </div>

  ));

  return (
    <div className="dashboard-container">
    <h6>Postings</h6>
      { dashboardItems }
    </div>
  );
};

export default Profile;
