import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

const Forms = () => {
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    e.preventDefault();
    console.log(comment);
    setComment("");
  };

  return (
    <Card className="my-4">
      <Card.Header>Leave a comment</Card.Header>
      <Card.Body>
        <Form onSubmit={handleComment}>
          <Form.Group>
            <Form.Control
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              as="textarea"
              rows={3}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Forms;