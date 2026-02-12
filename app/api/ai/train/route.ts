import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const body = await req.json();
  const record = await prisma.aITrainingData.create({
    data: {
      businessId: body.businessId,
      type: body.type,
      source: body.source,
      content: body.content,
      embeddingId: `supabase-vector-${Date.now()}`
    }
  });
  return NextResponse.json(record, { status: 201 });
}
