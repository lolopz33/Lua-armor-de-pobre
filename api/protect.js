export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const authKey = req.headers['authorization'] || req.query.key;
  const validKey = '12345-abcde'; // Key fixa de exemplo

  if (authKey !== validKey) {
    return res.status(403).json({ error: 'Key inválida' });
  }

  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Código Lua ausente' });
  }

  // Simula "proteção" do código
  const protectedCode = `-- Script protegido\n-- HASH: ${Buffer.from(code).toString('base64').slice(0, 12)}\n\n${code}`;

  return res.status(200).json({ protected: protectedCode });
}
