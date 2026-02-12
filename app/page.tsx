import Link from 'next/link';
import { HeroSection } from '@/components/marketing/hero';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const features = ['Omnichannel inbox', 'RAG-powered responses', 'Automation builder', 'Live analytics'];

export default function LandingPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-8">
      <header className="flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">ReplyAI</span>
        <div className="space-x-2">
          <Link href="/auth/login"><Button variant="ghost">Login</Button></Link>
          <Link href="/auth/register"><Button>Sign up</Button></Link>
        </div>
      </header>
      <HeroSection />
      <section className="grid gap-4 md:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature} className="text-center font-medium">{feature}</Card>
        ))}
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {['Starter $49', 'Growth $149', 'Scale $399'].map((plan) => (
          <Card key={plan}><h3 className="text-xl font-semibold">{plan}</h3><p className="mt-2 text-sm">Premium support and automation workflows.</p></Card>
        ))}
      </section>
      <section className="grid gap-4 md:grid-cols-3">
        {['“Saved 12h/week.”', '“Replies are instant.”', '“Our CSAT increased 32%.”'].map((quote) => (
          <Card key={quote}>{quote}</Card>
        ))}
      </section>
      <Card className="text-center">
        <h2 className="text-3xl font-bold">Ready to automate support?</h2>
        <Link href="/auth/register"><Button className="mt-4">Create your workspace</Button></Link>
      </Card>
    </main>
  );
}
