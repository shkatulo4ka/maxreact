import Todo from './components/Todo';

const App = () => {
  
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React'/>
      <Todo text='Play guitar'/>
      <Todo text='Run'/>
    </div>
  );
}

export default App
