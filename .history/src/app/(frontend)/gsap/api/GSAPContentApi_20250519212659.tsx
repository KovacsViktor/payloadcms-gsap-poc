'use server';

import { getPayload } from 'payload';
import { GsapContent } from '@/payload-types';

export async function getGSAPContent() {
  try {
    const payload = await getPayload({
      secret: process.env.PAYLOAD_SECRET || '',
    });
    
    const { docs } = await payload.find({
      collection: 'gsap-content',
      where: {
        isActive: {
          equals: true
        }
      },
      sort: '-createdAt', // Get the most recently created active content
      limit: 1, // Get only one active content set
    });

    if (!docs.length) {
      return null;
    }

    // Sort paragraphs by their order field
    const content = docs[0] as GsapContent;
    const sortedParagraphs = [...content.paragraphs].sort((a, b) => a.order - b.order);

    return {
      title: content.title,
      paragraphs: sortedParagraphs.map(p => p.content)
    };
  } catch (error) {
    console.error('Error fetching GSAP content:', error);
    return null;
  }
}
