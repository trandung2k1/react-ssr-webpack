import React from 'react';
const App = ({ initialText }) => {
  const [text, setText] = React.useState(initialText);
  const [todos, setTodos] = React.useState([]);
  const handleTextChange = () => {
    setText('changed in the browser!');
  };

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((rs) => rs.json())
      .then((result) => setTodos(result));
  }, []);
  return (
    <div>
      <p>{text}</p>
      <button onClick={handleTextChange}>change text</button>
      {todos.map((i) => (
        <li key={i.id}>{i.title}</li>
      ))}
    </div>
  );
};

export default App;
