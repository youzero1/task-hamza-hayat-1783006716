import type { Todo } from '@/types/todo';
import TodoItem from './TodoItem';

interface Props {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoList({ todos, filter, onToggle, onRemove, onEdit }: Props) {
  if (todos.length === 0) {
    const message =
      filter === 'active'
        ? 'No active tasks. Nice work!'
        : filter === 'completed'
        ? 'No completed tasks yet.'
        : 'Nothing here yet — add your first task above.';
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-white/50 px-6 py-12 text-center text-slate-400">
        {message}
      </div>
    );
  }

  return (
    <ul className="divide-y divide-slate-100 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}
