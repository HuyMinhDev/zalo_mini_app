'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';



interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className={cn('sticky top-0 z-40 w-full justify-between border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60', className)}>
      <div className="container flex h-16 items-center justify-between px-4 mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/admin/dashboard" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Zalo Mini Apps</span>
          </Link>

        
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Login
          </Button>
          <Button size="sm" className="hidden md:flex bg-sidebar-active text-white">
            Get Started
          </Button>

          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
          
          </Sheet>
        </div>
      </div>
    </header>
  );
}
