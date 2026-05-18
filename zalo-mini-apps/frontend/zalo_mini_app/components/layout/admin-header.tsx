"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AdminHeaderProps {
  title?: string;
  showSearch?: boolean;
  showNotifications?: boolean;
  showUser?: boolean;
}

export function AdminHeader({
  title = "Admin Dashboard",
  showSearch = false,
  showNotifications = false,
  showUser = false,
}: AdminHeaderProps) {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />

      <div className="flex items-center gap-2">
        {showSearch ? (
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-10 h-9" />
            </div>
          </div>
        ) : (
          <span className="text-sm text-muted-foreground">{title}</span>
        )}

        <div className="flex items-center gap-2 ml-auto">
          {showNotifications && (
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-sidebar-active" />
            </Button>
          )}
          <Separator orientation="vertical" className="h-4" />

          {showUser && (
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
