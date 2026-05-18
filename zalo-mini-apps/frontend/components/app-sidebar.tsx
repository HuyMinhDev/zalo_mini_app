'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  LogOut,
  Shield,
  BarChart3,
  Bell,
  ChevronDown,
  User,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarNav,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';


const adminNavItems = [
  {
    title: 'Dashboard',
    href: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    href: '/admin/users',
    icon: Users,
    badge: 12,
  },
  {
    title: 'Analytics',
    href: '/admin/analytics',
    icon: BarChart3,
  },
  {
    title: 'Documents',
    href: '/admin/documents',
    icon: FileText,
  },
];

const settingsNavItems = [
  {
    title: 'Settings',
    href: '/admin/settings',
    icon: Settings,
  },
  {
    title: 'Notifications',
    href: '/admin/notifications',
    icon: Bell,
    badge: 3,
  },
];

interface NavGroupProps {
  title?: string;
  items: Array<{
    title: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
    badge?: string | number;
  }>;
  defaultOpen?: boolean;
}

function NavGroup({ title, items, defaultOpen = true }: NavGroupProps) {
  const { state } = useSidebar();
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  if (state === 'collapsed') {
    return (
      <SidebarNav items={items} />
    );
  }

  return (
    <div className="px-3 py-2 space-y-1">
      {title && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex w-full items-center justify-between px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-sidebar-accent-foreground/50 hover:text-sidebar-accent-foreground transition-colors duration-150"
        >
          <span>{title}</span>
          <ChevronDown
            className={cn(
              'h-4 w-4 transition-transform duration-200',
              isOpen ? 'rotate-0' : '-rotate-90'
            )}
          />
        </button>
      )}
      <div className={cn(
        'overflow-hidden transition-all duration-200 ease-in-out',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}>
        <SidebarNav items={items} />
      </div>
    </div>
  );
}

function AppHeader() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-active text-white shadow-sm transition-transform group-hover:scale-105 shrink-0">
        <Shield className="h-4 w-4" />
      </div>
      {!isCollapsed && (
        <div className="flex flex-col gap-0.5 overflow-hidden transition-all duration-200 ease-in-out">
          <span className="text-sm font-bold whitespace-nowrap">Zalo Mini Apps</span>
          <span className="text-xs text-sidebar-accent-foreground/60 whitespace-nowrap">Management</span>
        </div>
      )}
    </Link>
  );
}

function UserSection() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <div className="flex items-center gap-3 rounded-lg px-3 py-2 transition-colors hover:bg-sidebar-accent">
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium shrink-0">
        <User className="h-4 w-4" />
      </div>
      {!isCollapsed && (
        <div className="flex flex-col gap-0.5 flex-1 min-w-0 transition-all duration-200 ease-in-out">
          <span className="text-sm font-medium truncate">Admin User</span>
          <span className="text-xs text-sidebar-accent-foreground/60 truncate">
            admin@example.com
          </span>
        </div>
      )}
    </div>
  );
}

function LogOutButton() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <Button
      variant="ghost"
      className={`w-full gap-3 cursor-pointer text-sidebar-accent-foreground/70 hover:text-sidebar-accent-foreground hover:bg-sidebar-accent ${isCollapsed ? 'justify-center' : 'justify-start'}`}
    >
      <LogOut className="h-4 w-4 shrink-0" />
      {!isCollapsed && <span>Log out</span>}
    </Button>
  );
}



export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-sidebar-border">
      <SidebarHeader>
        <AppHeader />
      </SidebarHeader>

      <SidebarContent className='h-[75%]'>
        <NavGroup title="Main" items={adminNavItems} />
        <NavGroup title="System" items={settingsNavItems} />
      </SidebarContent>

      <SidebarFooter className='h-[25%]'>
        <UserSection />
        <LogOutButton />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
