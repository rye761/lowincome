import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";

import Table from "../components/Table";

const Home = () => (
  <Fragment>
    <Hero />
    <Content />
    <Table/>
  </Fragment>
);

export default Home;
