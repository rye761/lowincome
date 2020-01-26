import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import Highlight from "../components/Highlight";
import Loading from "../components/Loading";
import { useAuth0 } from "../react-auth0-spa";


const Profile = () => {
  const { loading, user } = useAuth0();
  const [ income, setIncome ] = useState(null);
  const [ familyMembers, setFamilyMembers ] = useState(1);

  if (loading || !user) {
    return <Loading />;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(familyMembers==1 && income<=17750){
    	alert('Income verified!');
    }else if(familyMembers==2 && income<=21834){
    	alert('Income verified!');    	
    }else if(familyMembers==3 && income<=26628){
    	alert('Income verified!');
    }else if(familyMembers==4 && income<=33221){
    	alert('Income verified!');
    }else if(familyMembers==5 && income<=37828){
    	alert('Income verified!');
    }else if(familyMembers==6 && income<=41953){
    	alert('Income verified!');
    }else if(familyMembers>=7 && income<=46077){
    	alert('Income verified!');
    }else{
    	alert("Income too high!");
    }

  }

  function handleIncomeChange(e) {
    setIncome(e.target.value);
  }

  function handleFamilyChange(e) {
    setFamilyMembers(e.target.value);
  }

  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />

        </Col>
        <Col md>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>
      <Row>


        <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
      </Row>
          <h4>Income Form</h4>
          <form onSubmit={handleSubmit}>
            <label>Income:
              <input type="text" value={income} onChange={handleIncomeChange} />
            </label>
            <br />
            <label>Family members:
              <input type="number" value={familyMembers} onChange={handleFamilyChange} min="0" />
            </label>
            <br />
            <input type="submit" value="Verify" />
          </form>
    </Container>
  );
};

export default Profile;
