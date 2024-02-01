// pages/api/members.ts
import { db } from '@/lib/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { slug } = req.query;

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({ error: 'Missing or invalid community slug' });
  }

  try {
    const memberCount = await db.subscription.count({
      where: {
        subreddit: {
          name: slug,
        },
      },
    });

    res.status(200).json({ memberCount });
  } catch (error: any) {
    console.error('Error fetching member count:', error);
    res.status(500).json({ error: `Internal Server Error: ${error.message || 'Unknown error'}` });
  }
}
