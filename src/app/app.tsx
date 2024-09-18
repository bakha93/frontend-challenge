import { todoListState } from '../atoms/todo-atom';
import Checkbox from '../components/checkbox';
import Container from '../components/container';
import { useRecoilState } from 'recoil';
import Input from '../components/input';
import Button from '../components/button';
import { useState } from 'react';

export function App() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const [todo, setTodo] = useState('');

  const handleCheck = (index: number) => {
    const updatedTodo = todos.map((todo, i) => {
      return i === index ? { ...todo, checked: !todo.checked } : todo;
    });

    setTodos(updatedTodo);
  };

  const addTodo = (name: string) => {
    setTodos((prev) => {
      const updatedTodos = [...prev, { name, checked: false }];
      return updatedTodos;
    });
  };

  return (
    <Container className="h-screen ">
      <Container className="w-10/12 items-start gap-2">
        <h1 className="text-black text-3xl font-bold mb-8">Todo List</h1>
        {todos.map((el, i) => (
          <Container key={i} className="flex-row gap-2">
            <Checkbox isChecked={el.checked} onChange={() => handleCheck(i)} />
            <p>{el.name}</p>
          </Container>
        ))}

        <Container className="flex-row gap-2 md:w-full justify-between">
          <div className="flex gap-2 items-center">
            <Checkbox />
            <Input onChange={(e) => setTodo(e.target.value)} />
          </div>
          <Button
            onClick={() => addTodo(todo)}
            name="Add Item"
            className="bg-purple-700 w-24"
          />
        </Container>
      </Container>
    </Container>
  );
}

export default App;
