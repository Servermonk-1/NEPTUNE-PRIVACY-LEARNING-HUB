export default async function handler(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	try {
		const response = await fetch('https://api.mexc.com/api/v3/ticker/24hr?symbol=XNTUSDT');
		const data = await response.json();
		res.status(200).json(data);
	} catch (e) {
		res.status(500).json({ error: 'Failed to fetch price' });
	}
}