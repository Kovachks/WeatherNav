export default async function handler(req, res) {
    alert('wtf')
    const { query } = req;
    const response = await fetch(`https://maps.googleapis.com/maps/api/${query}`);
    const data = await response.json();
    res.status(200).json(data);
}