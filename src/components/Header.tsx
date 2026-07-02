export default function Header({ remaining }: { remaining: number }) {
  return (
    <header className="mb-6 flex items-baseline justify-between">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Todos
      </h1>
      <span className="text-sm font-medium text-slate-500">
        {remaining} {remaining === 1 ? 'task' : 'tasks'} left
      </span>
    </header>
  );
}
