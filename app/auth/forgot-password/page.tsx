import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ForgotPasswordPage() {
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <Card className="w-full max-w-md">
        <h1 className="text-2xl font-bold">Reset password</h1>
        <p className="mt-2 text-sm text-slate-600">We will send a recovery link to your email.</p>
        <Input className="mt-4" type="email" placeholder="Email" />
        <Button className="mt-3 w-full">Send link</Button>
        <Link href="/auth/login" className="mt-3 block text-sm">Back to login</Link>
      </Card>
    </main>
  );
}
