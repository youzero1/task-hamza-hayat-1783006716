import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Todo, Filter } from '@/types/todo';

const STORAGE_KEY = 'todo-app.todos.v1';
const FILTER_KEY = 'todo-app.filter.v1';

function loadTodos(): Todo[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (t: any) =>
        t
