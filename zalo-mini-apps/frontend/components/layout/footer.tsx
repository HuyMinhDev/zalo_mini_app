import * as React from 'react';
import Link from 'next/link';

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`border-t bg-background ${className}`}>
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Zalo Mini Apps</h3>
            <p className="text-sm text-muted-foreground">
              Building amazing experiences with modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Privacy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Zalo Mini Apps. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
