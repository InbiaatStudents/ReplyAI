import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';

export default function LoginPage() {
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <AuthForm title="Welcome back" cta="Login" footer={<><Link href="/auth/forgot-password">Forgot password?</Link> · <Link href="/auth/register">Create account</Link></>} />
    </main>
  );
}
