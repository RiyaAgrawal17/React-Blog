import React, { useState } from 'react';
import { Form, Button, Col, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "../index.css";


function Post() {

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
      const add={id: id,
      title: title,
      author: author,
      tags: tags.split(","),
      category: category,
      content: content,
      date: Date().toString(),}
      console.log(add);

    setId("");
    setTitle("");
    setAuthor("");
    setTags("");
    setCategory("");
    setContent("");
  };
  

  return (
    <div>
    <h1 className="text-center my-4">Add a new Post</h1>
    <hr />
    <div className="border border-primary rounded container p-4 mx-auto">
    <Container>
    <Form onSubmit={handleSubmit}>

    <Form.Group controlId="formGridId">
        <Form.Control value={id}
          onChange={(e) => setId(e.target.value)}
          type="text" placeholder="Post Id" />
      </Form.Group>


      <Form.Group controlId="formGridTitle">
        <Form.Control value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text" placeholder="Post Title" />
      </Form.Group>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridAuthor">
          <Form.Control value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text" placeholder="Post Author" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Control as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="category">Category</option>
            <option value="react">React</option>
            <option value="js">Javascript</option>
            <option value="Html">HTML</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Group controlId="formGridTags">
          <Form.Control value={tags}
            onChange={(e) => setTags(e.target.value)}
            type="text" placeholder="Enter tags" />
        </Form.Group>

      <Form.Group controlId="formGridContent">
        <Form.Control value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text" placeholder="Post" />
      </Form.Group>

      <Button 
      style={{backgroundColor:"#d9312b",border:"none"}}
       type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  </div>
      <LinkContainer to="/">
      <Button className="btn-position">
          <i className="lni lni-lg lni-home"></i>
        </Button>
      </LinkContainer>
    </div>
);
};

export default Post;