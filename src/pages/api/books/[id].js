import axios from 'axios';

const handler = async (req, res) => {
  const apiUrl = process.env.NEXT_PUBLIC_NODE_API_URL;
  const { id } = req.query;
  
  if (req.method === 'GET') {
    const response = await axios.get(`${apiUrl}/api/books/${id}`);
    res.status(200).json(response.data);
  } else if (req.method === 'PUT') {
    const response = await axios.put(`${apiUrl}/api/books/${id}`, req.body);
    res.status(200).json(response.data);
  } else if (req.method === 'DELETE') {
    const response = await axios.delete(`${apiUrl}/api/books/${id}`);
    res.status(200).json(response.data);
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

