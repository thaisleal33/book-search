import React, { useState } from 'react';
import axios from 'axios';

import { ThemeProvider, Container, Row, Col, Form, Button } from 'react-bootstrap';

function About() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyCcXFVnBErlVWS");

    function handleChange(e) {
        const book = e.target.value;
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=20`, {
            headers: {
                'Content-Type': 'application/json;Charset=utf-8',
            }
            .then((data) => {
                console.log(data.data.items);
                setResult(data.data.items);
            })
            .catch((error) => {
                console.log(error.response);
            })
        })
    

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <>
                <Container className="mt-5">
                    <Row className="justify-content-md-center">
                        <Col xs lg={6} className="mx-auto">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-2" controlId="inputSearch">
                                    <Form.Control type="text" placeholder="Search"  onChange={handleChange} autoComplete="off" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Go!
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        </ThemeProvider>

    )
}

export default About;