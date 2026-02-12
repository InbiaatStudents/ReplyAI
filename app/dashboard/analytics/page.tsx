import { Card } from '@/components/ui/card';
import { LineChart } from '@/components/charts/line-chart';

export default function AnalyticsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card><h2 className="mb-3 font-semibold">Response speed</h2><LineChart /></Card>
      <Card><h2 className="mb-3 font-semibold">AI performance</h2><p className="text-3xl font-bold text-accent">91%</p><p className="text-sm">Avg confidence across all channels</p></Card>
      <Card className="md:col-span-2"><h2 className="font-semibold">Customer engagement</h2><p className="mt-2 text-sm">Open rate: 72% · Resolved chats: 84%</p></Card>
    </div>
  );
}
