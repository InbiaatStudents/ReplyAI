'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, Moon } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const links = [
  ['Dashboard', '/dashboard'],
  ['Conversations', '/dashboard/conversations'],
  ['AI Training', '/dashboard/training'],
  ['Automations', '/dashboard/automations'],
  ['Analytics', '/dashboard/analytics'],
  ['Settings', '/dashboard/settings']
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { toggle } = useTheme();

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[240px_1fr]">
      <aside className="border-r bg-white p-4">
        <h2 className="text-xl font-bold text-primary">ReplyAI</h2>
        <nav className="mt-6 space-y-1">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className={cn('block rounded-xl px-3 py-2 text-sm', pathname === href ? 'bg-primary text-white' : 'hover:bg-slate-100')}>
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main>
        <header className="flex items-center justify-end gap-2 border-b bg-white p-4">
          <button onClick={toggle} className="rounded-xl p-2 hover:bg-slate-100"><Moon size={16} /></button>
          <button className="rounded-xl p-2 hover:bg-slate-100"><Bell size={16} /></button>
        </header>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
