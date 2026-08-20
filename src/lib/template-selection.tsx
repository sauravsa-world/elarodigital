import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { SelectedTemplate } from "./templates";

const STORAGE_KEY = "elaro.template-selection.v1";

type Ctx = {
  selected: SelectedTemplate[];
  isSelected: (id: string) => boolean;
  toggle: (t: SelectedTemplate) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const TemplateSelectionContext = createContext<Ctx | null>(null);

export function TemplateSelectionProvider({ children }: { children: ReactNode }) {
  const [selected, setSelected] = useState<SelectedTemplate[]>([]);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setSelected(JSON.parse(raw) as SelectedTemplate[]);
    } catch {
      /* ignore malformed storage */
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(selected));
    } catch {
      /* storage unavailable */
    }
  }, [selected]);

  const toggle = useCallback((t: SelectedTemplate) => {
    setSelected((prev) => (prev.some((p) => p.id === t.id) ? prev.filter((p) => p.id !== t.id) : [...prev, t]));
  }, []);

  const remove = useCallback((id: string) => {
    setSelected((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const clear = useCallback(() => setSelected([]), []);

  const value = useMemo<Ctx>(
    () => ({
      selected,
      isSelected: (id: string) => selected.some((s) => s.id === id),
      toggle,
      remove,
      clear,
    }),
    [selected, toggle, remove, clear],
  );

  return <TemplateSelectionContext.Provider value={value}>{children}</TemplateSelectionContext.Provider>;
}

export function useTemplateSelection() {
  const ctx = useContext(TemplateSelectionContext);
  if (!ctx) throw new Error("useTemplateSelection must be used inside TemplateSelectionProvider");
  return ctx;
}