import { createFileRoute, Outlet } from "@tanstack/react-router";
import { TemplateSelectionProvider } from "@/lib/template-selection";

export const Route = createFileRoute("/templates")({
  component: TemplatesLayout,
});

function TemplatesLayout() {
  return (
    <TemplateSelectionProvider>
      <Outlet />
    </TemplateSelectionProvider>
  );
}
