import React, { useEffect, useState } from "react";
import { blogData } from "./Data";
import Comment from "./Comment";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import Forms from "./Forms";

const IndividualPost = ({ match, history }) => {
  const blogId = match.params.id;
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);

  const searchArray = (id, array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === parseInt(id)) {
        return array[i];
      }
    }
  };

  useEffect(() => {
    const searchedBlog = searchArray(blogId, blogData);
    if (searchedBlog) {
      setBlogs(searchedBlog);
    }
  }, [blogId]);

  const handleClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <Button variant="outline-primary" onClick={handleClick} className="mt-3">
        Go Back
      </Button>
      <Row>
        <Col lg={12}>
          <h1 className="mt-4">{blogs.title}</h1>
          <p className="lead">-{blogs.author}</p>
          <p>{blogs.date}</p>
          <hr />
          <Image rounded fluid src="https://picsum.photos/1000/400" />
          <hr />
          <p className="lead">{blogs.content}</p>
          <Forms />
          <Comment />
          <Comment />
        </Col>
      </Row>
    </Container>
  );
};

export default IndividualPost;