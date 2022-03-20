import React from 'react';
import {ToDoMain} from "./components/ToDoMain/ToDoMain";
import {ToDoProvider} from "./context/ToDoState";

function App() {
  return (
      <ToDoProvider >
        <ToDoMain />
      </ToDoProvider>
  );
}

export default App;
