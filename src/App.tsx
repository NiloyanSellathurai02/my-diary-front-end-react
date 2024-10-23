import DiaryEntries from './components/DiaryEntries';
import { Container } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Container className="py-4">
      <DiaryEntries />
    </Container>
  );
};

export default App;
