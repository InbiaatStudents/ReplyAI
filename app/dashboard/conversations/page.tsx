import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ConversationsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-[300px_1fr]">
      <Card>
        <h2 className="font-semibold">Conversations</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li className="rounded-lg bg-slate-100 p-2">Acme Retail - WhatsApp</li>
          <li className="rounded-lg p-2">Nova Fitness - Instagram</li>
          <li className="rounded-lg p-2">Skyline Cafe - Email</li>
        </ul>
      </Card>
      <Card>
        <h2 className="font-semibold">Message history</h2>
        <div className="mt-4 space-y-2 text-sm">
          <p><strong>Customer:</strong> What is your pricing?</p>
          <p><strong>AI:</strong> Our plans start at $49/month for up to 2,000 messages.</p>
        </div>
        <div className="mt-4 flex gap-2"><Button>AI Reply</Button><Button variant="outline">Assign to Human</Button></div>
      </Card>
    </div>
  );
}
