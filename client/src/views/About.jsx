import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Row className="mt-5">
            <Col className="text-center">
                <Button
                    variant="primary"
                    href="https://github.com/doanhthuc?tab=repositories"
                    size="lg"
                >
                    Go to github repositories
                </Button>
            </Col>
        </Row>
    );
};

export default About;
