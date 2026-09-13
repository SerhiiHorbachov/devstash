import { FolderPlus, Layers, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DashboardPage() {
  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center gap-4 border-b border-border px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-500">
            <Layers className="size-4 text-white" />
          </div>
          <span className="font-semibold">DevStash</span>
        </div>
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-sm">
            <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search items..." className="pl-8" disabled />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" disabled>
            <FolderPlus />
            New Collection
          </Button>
          <Button disabled>
            <Plus />
            New Item
          </Button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-64 border-r border-border p-4">
          <h2>Sidebar</h2>
        </aside>
        <main className="flex-1 p-6">
          <h2>Main</h2>
        </main>
      </div>
    </div>
  );
}
