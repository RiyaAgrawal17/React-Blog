import React from "react";
import { Badge, Card, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Cards ({ blogData }) {
  return blogData.map((item) => (
<div style={{marginTop:"70px"}}>
    <Col key={item.id} lg={12} sm={6}>
      <Card style={{ height: "200px" }} className="mt-3">
      <Card.Body>
          <LinkContainer to={`/post/${item.id}`}>
            <h2 className="heading-title">{item.title}</h2>
          </LinkContainer>
          <Card.Text>
            <Badge pill variant="dark">
              <Image
                src="https://picsum.photos/30"
                roundedCircle
                fluid
                style={{ width: "30px", height: "30px" }}
                className="mr-auto"
              />
              <span className="ml-2">{item.author}</span>
            </Badge>
            {item.tags.map((tag) => (
              <Badge key={tag} className="float-right mx-2" style={{backgroundColor:"yellow"}}>
                {tag}
              </Badge>
            ))}
          </Card.Text>
        </Card.Body>
        <hr />
        <div className="d-flex">
          <span className="ml-2 mb-2">
          <LinkContainer to={`/post/${item.id}`}>
            <span>&#128195; </span></LinkContainer>
            {item.Count}
          </span>
          <div className="ml-auto">
          <LinkContainer to={`/post`}>
         <span>&#9999;&#65039;</span></LinkContainer>
            <span> &#10060;</span>
          </div>
        </div>
      </Card>
    </Col>
    </div>
  ));
};

export default Cards;