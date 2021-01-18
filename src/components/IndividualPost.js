import React, { useEffect, useState } from "react";
import { blogData } from "./Data";
import Comment from "./Comment";
import {Container,Row,Col,Button,Image} from "react-bootstrap";
import Forms from "./Forms";

function IndividualPost ({ match, history }) {

  const Id = match.params.id;
  const [blog, setBlog] = useState([]);
  console.log(blog);

  function search (id, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === parseInt(id)) {
        return arr[i];
      }
    }
  };

  useEffect(() => {
    const searchBlog = search(Id, blogData);
    if (searchBlog) {
      setBlog(searchBlog);
    }
  }, [Id]);

  const handleClick = () => {
    history.push("/");
  };


  return (
    <Container>
      <Row>
        <Col lg={12}>
          <h3 className="mt-3">{blog.title}</h3>
          <p>(By: {blog.author})</p>
          <p>{blog.content}</p>
          <br />
          <Image rounded fluid src="https://picsum.photos/400/300" />
          <br/><br/>
          <Forms />
          <hr />
          <p>{blog.date}</p>
          <Comment />
        </Col>
      </Row>
      <Button onClick={handleClick} style={{backgroundColor:"#d9312b",border:"none",marginLeft: "1140px"}}>
        Back
      </Button>
    </Container>
  );
};

export default IndividualPost;