import { useState } from 'react';
import Header from '../components/Header';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Layout from "../Layout";
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function FeedBack() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make a POST request with formData
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Feedback submitted successfully');
        alert('Thank you for your feedback!')
      } else {
        // Handle errors
        console.error('Failed to submit feedback');
        alert('Failed to submit feedback!')
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <Layout>
      <Header />
      <div style={{ padding: "6px", maxWidth: "600px", display: "block", margin: "0 auto", paddingTop: "10px" }}>
        <h1>Kindly provide us with your feedback 😄</h1>
        <form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Label column sm="2">Name</Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Kevin Guerrero" name="name" value={formData.name} onChange={handleChange} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label column sm="2">Email address</Form.Label>
            <Col sm="10">
              <Form.Control type="email" placeholder="dibbuc@govjo.fk" name="email" value={formData.email} onChange={handleChange} />
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Label column sm="2">Comments...</Form.Label>
            <Col sm="10">
              <Form.Control as="textarea" rows={3} placeholder="The app is ..." name="comment" value={formData.comment} onChange={handleChange} />
            </Col>
          </Row>
          <Button type="submit" variant="dark">Submit</Button>
        </form>
      </div>
    </Layout>
  );
}

export default FeedBack;
