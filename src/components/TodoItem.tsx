import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import type { Todo } from '@/types/todo';

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
  onEdit: (id: string, text: string) => void;
}

export default function TodoItem({ todo, onToggle, onRemove, onEdit }: Props) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  function commit() {
    setEditing(false);
    if (draft.trim() !== todo.text) {
      onEdit(todo.id, draft);
    }
  }

  function cancel() {
    setDraft(todo.text);
    setEditing(false);
  }

  function handleKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') commit();
    else if (e.key === 'Escape') cancel();
  }

  return (
    <li className="group flex items-center gap-3 px-4 py-3 hover:bg-slate-50">
      <button
        type="button"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? 'Mark as active' : 'Mark as done'}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
          todo.completed
            ? 'border-indigo-500 bg-indigo-500 text-white'
            : 'border-slate-300 bg-white hover:border-indigo-400'
        }`}
      >
        {todo.completed
