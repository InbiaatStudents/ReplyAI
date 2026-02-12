import Link from 'next/link';
import { AuthForm } from '@/components/auth-form';

export default function RegisterPage() {
  return (
    <main className="grid min-h-screen place-items-center p-4">
      <AuthForm title="Create your ReplyAI workspace" cta="Register" footer={<Link href="/auth/login">Already have an account?</Link>} />
    </main>
  );
}
