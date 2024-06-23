import axios from 'axios';

const handler = async (req, res) => {
  const apiUrl = process.env.NEXT_PUBLIC_NODE_API_URL;
  
  if (req.method === 'GET') {
    const response = await axios.get(`${apiUrl}/api/books`);
    res.status(200).json(response.data);
  } else if (req.method === 'POST') {
    const response = await axios.post(`${apiUrl}/api/books`, req.body);
    res.status(201).json(response.data);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

