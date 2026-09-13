// Mock data for the dashboard UI. Temporary stand-in until the database is wired up.
// Shapes loosely follow the Prisma schema in context/project-overview.md.

export type ContentType = "TEXT" | "URL" | "FILE";

export type ItemType = {
  id: string;
  name: string;
  icon: string; // lucide-react icon name
  color: string;
  isSystem: boolean;
  count: number;
};

export type Collection = {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
  color: string;
  itemCount: number;
  itemTypeIds: string[];
};

export type Item = {
  id: string;
  title: string;
  description: string;
  contentType: ContentType;
  content?: string;
  url?: string;
  fileName?: string;
  language?: string;
  itemTypeId: string;
  collectionIds: string[];
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
  isPro: boolean;
};

export const currentUser: User = {
  id: "user-1",
  name: "John Doe",
  email: "john@example.com",
  isPro: false,
};

export const itemTypes: ItemType[] = [
  { id: "type-snippet", name: "Snippets", icon: "Code", color: "#3b82f6", isSystem: true, count: 24 },
  { id: "type-prompt", name: "Prompts", icon: "Sparkles", color: "#8b5cf6", isSystem: true, count: 18 },
  { id: "type-command", name: "Commands", icon: "Terminal", color: "#f97316", isSystem: true, count: 15 },
  { id: "type-note", name: "Notes", icon: "StickyNote", color: "#fde047", isSystem: true, count: 12 },
  { id: "type-file", name: "Files", icon: "File", color: "#6b7280", isSystem: true, count: 5 },
  { id: "type-image", name: "Images", icon: "Image", color: "#ec4899", isSystem: true, count: 3 },
  { id: "type-link", name: "Links", icon: "Link", color: "#10b981", isSystem: true, count: 8 },
];

export const collections: Collection[] = [
  {
    id: "collection-react-patterns",
    name: "React Patterns",
    description: "Common React patterns and hooks",
    isFavorite: true,
    color: "#3b82f6",
    itemCount: 12,
    itemTypeIds: ["type-snippet", "type-note", "type-link"],
  },
  {
    id: "collection-python-snippets",
    name: "Python Snippets",
    description: "Useful Python code snippets",
    isFavorite: false,
    color: "#3b82f6",
    itemCount: 8,
    itemTypeIds: ["type-snippet", "type-file"],
  },
  {
    id: "collection-context-files",
    name: "Context Files",
    description: "AI context files for projects",
    isFavorite: true,
    color: "#6b7280",
    itemCount: 5,
    itemTypeIds: ["type-file", "type-note"],
  },
  {
    id: "collection-interview-prep",
    name: "Interview Prep",
    description: "Technical interview preparation",
    isFavorite: false,
    color: "#fde047",
    itemCount: 24,
    itemTypeIds: ["type-note", "type-snippet", "type-link", "type-prompt"],
  },
  {
    id: "collection-git-commands",
    name: "Git Commands",
    description: "Frequently used git commands",
    isFavorite: true,
    color: "#f97316",
    itemCount: 15,
    itemTypeIds: ["type-command", "type-note"],
  },
  {
    id: "collection-ai-prompts",
    name: "AI Prompts",
    description: "Curated AI prompts for coding",
    isFavorite: false,
    color: "#8b5cf6",
    itemCount: 18,
    itemTypeIds: ["type-prompt", "type-snippet", "type-note"],
  },
];

export const items: Item[] = [
  {
    id: "item-use-auth-hook",
    title: "useAuth Hook",
    description: "Custom authentication hook for React applications",
    contentType: "TEXT",
    content: `import { useContext } from 'react'
import { AuthContext } from './AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}`,
    language: "typescript",
    itemTypeId: "type-snippet",
    collectionIds: ["collection-react-patterns"],
    tags: ["react", "auth", "hooks"],
    isFavorite: true,
    isPinned: true,
    createdAt: "2024-01-15",
    updatedAt: "2024-01-15",
  },
  {
    id: "item-api-error-handling",
    title: "API Error Handling Pattern",
    description: "Fetch wrapper with exponential backoff retry logic",
    contentType: "TEXT",
    content: `async function fetchWithRetry(url: string, retries = 3) {
  try {
    return await fetch(url)
  } catch (err) {
    if (retries === 0) throw err
    await new Promise((r) => setTimeout(r, 2 ** (3 - retries) * 1000))
    return fetchWithRetry(url, retries - 1)
  }
}`,
    language: "typescript",
    itemTypeId: "type-snippet",
    collectionIds: ["collection-react-patterns"],
    tags: ["fetch", "error-handling"],
    isFavorite: false,
    isPinned: true,
    createdAt: "2024-01-12",
    updatedAt: "2024-01-12",
  },
  {
    id: "item-git-undo-last-commit",
    title: "Undo Last Commit",
    description: "Undo the last commit but keep the changes staged",
    contentType: "TEXT",
    content: "git reset --soft HEAD~1",
    itemTypeId: "type-command",
    collectionIds: ["collection-git-commands"],
    tags: ["git", "undo"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2024-01-10",
    updatedAt: "2024-01-10",
  },
  {
    id: "item-explain-code-prompt",
    title: "Explain This Code",
    description: "Prompt for getting a plain-English explanation of a code block",
    contentType: "TEXT",
    content: "Explain what the following code does, step by step, as if to a junior developer:\n\n{code}",
    itemTypeId: "type-prompt",
    collectionIds: ["collection-ai-prompts"],
    tags: ["ai", "explain"],
    isFavorite: true,
    isPinned: false,
    createdAt: "2024-01-08",
    updatedAt: "2024-01-08",
  },
  {
    id: "item-react-context-file",
    title: "react-project-context.md",
    description: "Baseline context file for React project AI sessions",
    contentType: "FILE",
    fileName: "react-project-context.md",
    itemTypeId: "type-file",
    collectionIds: ["collection-context-files"],
    tags: ["context", "react"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2024-01-05",
    updatedAt: "2024-01-05",
  },
  {
    id: "item-nextjs-docs-link",
    title: "Next.js Documentation",
    description: "Official Next.js docs",
    contentType: "URL",
    url: "https://nextjs.org/docs",
    itemTypeId: "type-link",
    collectionIds: ["collection-interview-prep"],
    tags: ["nextjs", "docs"],
    isFavorite: false,
    isPinned: false,
    createdAt: "2024-01-03",
    updatedAt: "2024-01-03",
  },
];
