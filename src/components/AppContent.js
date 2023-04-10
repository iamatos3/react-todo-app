import React from 'react';
import { useSelector } from 'react-redux';
import TodoComp from './TodoComp';

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  return (
    <div>
      {sortedTodoList && sortedTodoList.length > 0
        ? sortedTodoList.map((todo) => <TodoComp key={todo.id} todo={todo} />)
        : 'no todo found'}
    </div>
  );
}

export default AppContent;
