import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function TrainingPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <h2 className="font-semibold">Knowledge source</h2>
        <Input className="mt-3" placeholder="Add website URL" />
        <Input className="mt-3" placeholder="Paste FAQ" />
        <Button className="mt-3">Upload document</Button>
      </Card>
      <Card>
        <h2 className="font-semibold">Knowledge base viewer</h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>pricing.pdf · embedded</li>
          <li>shipping policy · embedded</li>
          <li>support FAQ · embedded</li>
        </ul>
      </Card>
    </div>
  );
}
