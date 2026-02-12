import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();
  const rule = await prisma.automationRule.create({
    data: {
      businessId: body.businessId,
      name: body.name,
      condition: body.condition,
      action: body.action
    }
  });
  return NextResponse.json(rule, { status: 201 });
}
