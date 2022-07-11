import React, { useState } from 'react';
import axios from 'axios';

import { ThemeProvider, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { BookListWrapper } from '../../styles/BookListWrapper';

function Search() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("insert+your+api+key+here");

    function handleChange(e) {
        const book = e.target.value;
        setBook(book);
    };

    function handleSubmit(e) {
        e.preventDefault();

        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=16`, {
            headers: {
                'Content-Type': 'application/json;Charset=utf-8',
            }
        })
            .then((data) => {
                console.log(data.data.items);
                setResult(data.data.items);
            })
            .catch((error) => {
                console.log(error.response);
            })
    };

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}>
            <>
                <Container className="my-5">
                    <Row className="justify-content-md-center pb-5">
                        <Col xs lg={6} className="mx-auto">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-2" controlId="inputSearch">
                                    <Form.Control type="text" size="lg" placeholder="Search for books by title, author or keyword" onChange={handleChange} autoComplete="off" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Go!
                                </Button>
                            </Form>
                            <BookListWrapper>
                                {result.map((book, key) => {
                                    return (
                                        <li key={key}>
                                            <a href={book.volumeInfo.canonicalVolumeLink} target="_blank" rel="noreferrer">
                                                <img
                                                    src={book.volumeInfo.imageLinks?.thumbnail} 
                                                    className="img-fluid" 
                                                    alt={book.volumeInfo.title} 
                                                    />
                                            </a>
                                        </li>
                                    )
                                })};
                            </BookListWrapper>
                        </Col>
                    </Row>
                </Container>
            </>
        </ThemeProvider>
    );
}

export default Search;
