import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const events = await prisma.analyticsEvent.findMany({ take: 200, orderBy: { createdAt: 'desc' } });
  return NextResponse.json(events);
}
