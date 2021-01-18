import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function Forms () {
  const [comments, setComments] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    console.log(comments);
    setComments("");
  };

function handleChange(e){
  setComments(e.target.value);
}
  return (
    <Card className="my-6">
      <Card.Header>New Comment</Card.Header>
      <Card.Body>
        <Form onSubmit={handleComment}>
          <Form.Group>
            <Form.Control
              value={comments}
              onChange={handleChange}
              as="textarea"
              rows={5}
            />
          </Form.Group>

          <Button type="submit" style={{backgroundColor:"#d9312b", border:"none"}}>
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Forms;