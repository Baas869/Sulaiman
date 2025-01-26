// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Abdur-Raqeeb Ajao',
    image: "images/roqeeb.jpeg",
    designation: 'Software Developer | React | Node.js | Typescript | Rust',
    view: "I had the privilege of working alongside Boladale Sulaiman on several university projects, and his talent and work ethic truly stood out. More recently, we were both part of the dynamic team at MKA Nigeria, where Boladale's professionalism and attention to detail made a significant impact. I wholeheartedly recommend Boladale for any opportunity that requires a highly skilled and dedicated individual.",
    linkednURL: "https://www.linkedin.com/in/abdraqeeb/"
  },
  {
    id: 1,
    name: 'Musaddiq Aderinbigbe Olamide',
    image: "images/musadiq.jpeg",
    designation: 'React JS | NEXT JS | Node | MongoDB',
    view: "I’d like to take a moment to recommend Boladale Sulaiman for any front-end development opportunities. I had the privilege of working with him on several projects, where he consistently demonstrated a deep understanding of React.js and Next.js. Boladale’s commitment to delivering high-quality code and his eagerness to tackle new challenges made him a standout team member. His proactive approach and ability to learn and adapt quickly make him an invaluable asset. I have no doubt that Boladale would be a fantastic addition to any development team. Highly recommended! 🌟👍",
    linkednURL: "https://www.linkedin.com/in/musodiq-aderibigbe-a70975227/"
  },
  {
    id: 2,
    name: 'Mahmud Ajao',
    image: "images/mahmud.jpeg",
    designation: 'Software Developer | Typescript | Nodejs',
    view: "I wholeheartedly recommend Boladale Sulaiman as a talented React front-end developer with a strong passion for Web development. His expertise in React.js further strengthens his ability to build robust and scalable applications. Boladale's keen attention to detail, problem-solving abilities, and commitment to delivering outstanding results make him an invaluable asset to any development team.",
    linkednURL: "https://www.linkedin.com/in/mahmud-ajao-71b5a0125/"
  },
  // {
  //   id: 3,
  //   name: 'Muhammad Ullah',
  //   image: "images/muhammad.jpeg",
  //   designation: 'MERN Stack Developer at Productbox',
  //   view: "I highly recommend Osama Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
  //   linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  // },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
