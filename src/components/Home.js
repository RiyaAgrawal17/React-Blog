import React from "react";
import {Dropdown,Button} from 'react-bootstrap';
import { Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Cards from "./Card";
import { blogData } from "./Data";
import "../index.css";


function Home () {
  return (
<div>
<Dropdown className="drp-position" style={{marginTop:"50px"}}>
  <Dropdown.Toggle id="dropdown-basic">
    Sort By
  </Dropdown.Toggle>
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Vote-Ascending</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Vote-Descending</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Container style={{marginTop:"40px"}}>
        <Row>
          <Cards blogData={blogData} />
        </Row>
      </Container>
      <LinkContainer
        style={{ padding: "15px", borderRadius: "100%" }}
        to="/post" >
        <Button className="btn-position">
          <i className="lni lni-lg lni-plus"></i>
        </Button>
          </LinkContainer>

</div>
  )
}
export default Home;