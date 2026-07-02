import Header from '@/components/Header';
import TodoInput from '@/components/TodoInput';
import TodoList from '@/components/TodoList';
import TodoFooter from '@/components/TodoFooter';
import { useTodos } from '@/hooks/useTodos';

export default function Home() {
  const {
    todos,
    visible,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    removeTodo,
    editTodo,
    clearCompleted,
    toggleAll,
    remaining,
    completedCount,
  } = useTodos();

  const allCompleted = todos.length > 0
