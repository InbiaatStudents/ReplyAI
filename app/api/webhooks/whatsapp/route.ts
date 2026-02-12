import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { generateBusinessReply } from '@/lib/ai';

export async function POST(req: Request) {
  const payload = await req.json();
  const conversationId = payload.conversationId || crypto.randomUUID();

  const existing = await prisma.conversation.findUnique({ where: { id: conversationId } });
  const conversation = existing ?? (await prisma.conversation.create({
    data: {
      id: conversationId,
      businessId: payload.businessId,
      channel: 'whatsapp',
      customerName: payload.customerName || 'Unknown'
    }
  }));

  await prisma.message.create({
    data: { conversationId: conversation.id, senderType: 'customer', content: payload.message }
  });

  const ai = await generateBusinessReply({ businessId: payload.businessId, conversationId: conversation.id, customerMessage: payload.message });

  await prisma.message.create({
    data: { conversationId: conversation.id, senderType: 'ai', content: ai.text, aiConfidence: ai.confidence }
  });

  return NextResponse.json({ ok: true, reply: ai.text });
}
