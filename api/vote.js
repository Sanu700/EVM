import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'votes.json');

export default async function handler(req, res) {
  try {
    // Read the current vote count
    const fileData = await fs.readFile(filePath, 'utf8');
    const data = JSON.parse(fileData);

    if (req.method === 'GET') {
      // Return the current vote count
      res.status(200).json({ voteCount: data.voteCount });
    } else if (req.method === 'POST') {
      // Increment the vote count
      data.voteCount += 1;

      // Write updated count back to JSON file
      await fs.writeFile(filePath, JSON.stringify(data), 'utf8');

      // Return the updated vote count
      res.status(200).json({ voteCount: data.voteCount });
    } else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Error handling vote:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
