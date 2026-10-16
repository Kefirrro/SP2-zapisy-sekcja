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

  return (
    <div className="container mt-4">
      <h2>Liczba sekcji: {sectionNames.length}</h2>

      <ol>
        {sectionNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imieNazwisko" className="form-label">
            Imię i nazwisko:
          </label>
          <input
            type="text"
            className="form-control"
            id="imieNazwisko"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="numerSekcji" className="form-label">
            Numer sekcji:
          </label>
          <input
            type="number"
            className="form-control"
            id="numerSekcji"
            value={sectionNumber}
            onChange={(e) => setSectionNumber(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Zapisz
        </button>

        </form>
      </div>
      )
}

export default App