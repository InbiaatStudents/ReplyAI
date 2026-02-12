import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function AuthForm({ title, cta, footer }: { title: string; cta: string; footer: React.ReactNode }) {
  return (
    <Card className="mx-auto w-full max-w-md">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="mt-4 space-y-3">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button className="w-full">{cta}</Button>
        <Button variant="outline" className="w-full">Continue with Google</Button>
      </div>
      <div className="mt-4 text-sm text-slate-600">{footer}</div>
    </Card>
  );
}
