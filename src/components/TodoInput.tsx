import { useState, type FormEvent } from 'react';

interface Props {
  onAdd: (text: string) => void;
  hasTodos: boolean;
  allCompleted: boolean;
  onToggleAll: () => void;
}

export default function TodoInput({ onAdd, hasTodos, allCompleted, onToggleAll }: Props) {
  const [value, setValue] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100"
    >
      {hasTodos ? (
        <button
          type="button"
          onClick={onToggleAll}
          aria-label={allCompleted ? 'Mark all as active' : 'Mark all as done'}
          className={`ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition ${
            allCompleted ? 'text-indigo-500 hover:text-indigo-600' : 'text-slate-300 hover:text-slate-500'
          }`}
        >
          ✓
        </button>
      ) : (
        <span className="ml-1 h-8 w-8 shrink-0" />
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 bg-transparent px-2 py-2 text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none"
        autoFocus
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
      >
        Add
      </button>
    </form>
  );
}
