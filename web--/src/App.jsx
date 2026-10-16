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
  
  console.log(fullName);
  if(isValidNumber) {
    console.log(sectionNames[number - 1]);
  } else {
    console.log('Nieprawidłowy numer sekcji');
  }
};

  return {
    <div className="container mt-4">
      <h2>Liczba sekcji: {sectionNames.length}</h2>

      <ol>
        {sectionNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>

      </div>
  }
}

export default App