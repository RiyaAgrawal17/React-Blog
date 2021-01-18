import React from "react";
import { Badge, Card, Col, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


function Cards ({ blogData }) {
  return blogData.map((item) => (
<div style={{marginTop:"70px"}}>
    <Col key={item.id} lg={12} sm={12}>
      <Card style={{ height: "250px" }} className="mt-4">
      <Card.Body>
          <LinkContainer to={`/post/${item.id}`}>
            <h3 className="heading-title">{item.title}</h3>
          </LinkContainer>
          <Card.Text>
            <Badge pill variant="light">
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
              <Badge key={tag} className="float-right mx-1" variant="primary">
                {tag}
              </Badge>
            ))}
          </Card.Text>
        </Card.Body>
        <hr />
        <div className="d-flex">
          <span className="ml-2 mb-2">
            <i className="lni lni-comments mr-1"></i>
            {item.Count}
          </span>
          <div className="ml-auto">
            <i className="lni lni-pencil mx-1 lnr-icon"></i>
            <i className="lni lni-trash mx-1 lnr-icon"></i>
          </div>
        </div>
      </Card>
    </Col>
    </div>
  ));
};

export default Cards;