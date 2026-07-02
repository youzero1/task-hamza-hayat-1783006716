import type { Filter } from '@/types/todo';

interface Props {
  filter: Filter;
  onFilterChange: (f: Filter) => void;
  completedCount: number;
  onClearCompleted: () => void;
}

const FILTERS: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

export default function TodoFooter({
  filter,
  onFilterChange,
  completedCount,
  onClearCompleted,
}: Props) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
      <div className="inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
        {FILTERS.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              onClick={() => onFilterChange(f.value)}
              className={`rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                active
                  ? 'bg-indigo-500 text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      {completedCount > 0 ? (
        <button
          type="button"
          onClick={onClearCompleted}
          className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-500 hover:bg-red-50 hover:text-red-600"
        >
          Clear completed ({completedCount})
        </button>
      ) : (
        <span className="text-sm text-slate-400">No completed tasks</span>
      )}
    </div>
  );
}
