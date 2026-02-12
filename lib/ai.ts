import { prisma } from '@/lib/prisma';

export async function retrieveKnowledge(businessId: string, query: string) {
  const chunks = await prisma.aITrainingData.findMany({
    where: { businessId, content: { contains: query.split(' ')[0], mode: 'insensitive' } },
    take: 5
  });
  return chunks.map((chunk) => chunk.content).join('\n');
}

export async function generateBusinessReply(params: { businessId: string; conversationId: string; customerMessage: string }) {
  const context = await retrieveKnowledge(params.businessId, params.customerMessage);
  const history = await prisma.message.findMany({ where: { conversationId: params.conversationId }, orderBy: { createdAt: 'asc' }, take: 10 });

  // Placeholder for Gemini API call: this prompt enforces business-only scope with RAG context.
  const response = `Using business context only:\n${context}\nHistory: ${history.map((m) => m.content).join(' | ')}\nReply: Thanks for contacting us!`;

  return { text: response, confidence: 0.91 };
}
