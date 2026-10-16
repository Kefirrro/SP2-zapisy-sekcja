import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const sectionNames = ['Piłka nożna', 'Szachy', 'Robotyka', 'Pływanie'];

  const [fullName, setFullName] = useState('');
  const [sectionNumber, setSectionNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  const number = Number(sectionNumber);
  const isValidNumber =
    Number.isInteger(number) && number >= 1 && number <= sectionNames.length;
  
  return {

  }
}
}

export default App