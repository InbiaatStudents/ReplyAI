import { Card } from '@/components/ui/card';
import { LineChart } from '@/components/charts/line-chart';
import { BarChart } from '@/components/charts/bar-chart';

const stats = [
  ['Messages today', '1,284'],
  ['Response time', '42 sec'],
  ['Active conversations', '96'],
  ['AI accuracy', '91%']
];

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        {stats.map(([label, value]) => (
          <Card key={label}><p className="text-sm text-slate-600">{label}</p><p className="mt-2 text-3xl font-bold">{value}</p></Card>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card><h3 className="mb-4 font-semibold">Message volume over time</h3><LineChart /></Card>
        <Card><h3 className="mb-4 font-semibold">Customer satisfaction</h3><BarChart /></Card>
      </div>
    </div>
  );
}
