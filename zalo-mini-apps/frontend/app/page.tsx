import { Header } from '@/components/layout/header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Layers, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Layers,
    title: 'Feature-Based Architecture',
    description: 'Organize code by features for better maintainability and scalability.',
  },
  {
    icon: Zap,
    title: 'React Query Integration',
    description: 'Powerful data fetching and caching with TanStack Query.',
  },
  {
    icon: Shield,
    title: 'Type-Safe Development',
    description: 'Full TypeScript support with strict type checking.',
  },
  {
    icon: Code,
    title: 'Modern UI Components',
    description: 'Beautiful, accessible components built with Radix UI.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              v1.0.0 - Now with React Query!
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Modern Next.js
              <br />
              <span className="text-sidebar-active">Application</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              A well-structured, scalable application with React Query, Zustand, 
              TypeScript, and Tailwind CSS. Built for modern web development.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-sidebar-active text-white">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Documentation
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-sidebar-active mb-2" />
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
