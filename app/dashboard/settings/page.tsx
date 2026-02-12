import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card><h2 className="font-semibold">Business info</h2><Input className="mt-3" placeholder="Business name" /><Input className="mt-3" placeholder="Support email" /></Card>
      <Card><h2 className="font-semibold">WhatsApp connection</h2><Input className="mt-3" placeholder="Phone Number ID" /><Input className="mt-3" placeholder="Access Token" /></Card>
      <Card><h2 className="font-semibold">AI settings</h2><Input className="mt-3" placeholder="Gemini model" /><Input className="mt-3" placeholder="Temperature" /></Card>
      <Card><h2 className="font-semibold">Billing</h2><p className="mt-2 text-sm">Current plan: Growth</p><Button className="mt-3">Manage subscription</Button></Card>
    </div>
  );
}
