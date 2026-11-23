import { useEffect, useState } from "react";

function App() {
  const [exercices, setExercices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3310/api/exercices")
      .then((res) => res.json())
      .then((data) => setExercices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1>Training Journal</h1>
      <ul>
        {exercices.map((ex) => (
          <li key={ex.id}>{ex.name}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
