const metadata = {
  1: {
    description: "Lovely Mabel design on a Cup of Coffee.",
    image:
      "https://ipfs.io/ipfs/QmWqbBgmjnCbog9GA4wYqpvaSGyehqPSUL1p4CDkhsvNqH?filename=Mabel1.JPG",
    name: "Lovely Mabel",
    creators: ["Andreshvas"],
  },
};

export default function handler(req, res) {
  res.status(200).json(metadata[req.query.id] || {});
}
