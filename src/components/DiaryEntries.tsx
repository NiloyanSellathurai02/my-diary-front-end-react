// src/components/DiaryEntries.tsx
import React, { useEffect, useState } from 'react';
import { getDiaryEntries } from '../services/apiServices';
import { Container, Row, Col, Card, Spinner, Alert } from 'react-bootstrap';

interface DiaryEntry {
  id: number;
  title: string;
  content: string;
  created: string;
}

const DiaryEntries: React.FC = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDiaryEntries();
        setEntries(data);
      } catch (error) {
        setError('Failed to fetch entries');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (
    <Container>
      <h1 className="my-4 text-center">Diary Entries</h1>
      <Row>
        {entries.map((entry) => (
          <Col md={4} key={entry.id} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{entry.title}</Card.Title>
                <Card.Text>{entry.content}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  Created on {new Date(entry.created).toLocaleDateString()}
                </small>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DiaryEntries;
