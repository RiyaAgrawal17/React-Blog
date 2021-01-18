import React from "react";
import { Image, Media } from "react-bootstrap";

const Comment = () => {
  return (
    <Media className="mb-4">
      <Image
        src="https://picsum.photos/50"
        roundedCircle
        className="mr-3 d-flex"
      />
      <Media.Body>
        <h4>Name</h4>
       This is a comment
      </Media.Body>
    </Media>
  );
};

export default Comment;