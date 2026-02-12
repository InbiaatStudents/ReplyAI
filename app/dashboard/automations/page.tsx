import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function AutomationsPage() {
  return (
    <Card>
      <h2 className="font-semibold">Automation Rules</h2>
      <p className="mt-2 text-sm text-slate-600">Create intent-based automation flows for replies.</p>
      <div className="mt-4 grid gap-2 md:grid-cols-2">
        <Input placeholder='IF message contains "price"' />
        <Input placeholder='THEN send template "pricing_overview"' />
      </div>
      <Button className="mt-3">Save rule</Button>
    </Card>
  );
}
