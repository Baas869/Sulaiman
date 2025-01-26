const review = [
    {
        id: 0,
        clientName: 'MKA Nigeria',
        clientLocation: 'Nigeria',
        clientSource: 'Remote',
        clientReview: "Working with him is always a pleasure. He completes tasks efficiently and often goes above and beyond what’s expected. It's evident that he possesses extensive knowledge in his field. We look forward to our next collaboration."
    },
    {
        id: 2,
        clientName: 'JEWEC',
        clientLocation: 'USA',
        clientSource: 'Remote',
        clientReview: 'Working with Sulaiman has been a pleasure. His strong communication skills and proactive approach to his duties made him a valuable worker. We appreciate his dedication and look forward to future collaborations. '
    },
    {
        id: 3,
        clientName: 'Oluwole Aguda (EPPME)',
        clientLocation: 'Senegal',
        clientSource: 'On-site',
        clientReview: "EPPME Digital Technologies team, Bravo Senegal, has been outstanding. Their professionalism, dedication, and skill in delivering high-quality solutions have been impressive. We are proud of their hard work and look forward to even more successful teamwork in the future."
    },
    {
        id: 4,
        clientName: 'Monsieur Karis',
        clientLocation: 'Nigeria',
        clientSource: 'On-site',
        clientReview: 'It has been a pleasure working with Sulaiman at Afron Concept International Limited. His dedication, expertise, and proactive approach consistently contributed to the success of our projects. Sulaiman is a valuable asset, and I look forward to more cooperation.'
    },
    {
        id: 5,
        clientName: 'Maulvi Nasir Ahmad',
        clientLocation: 'Togo',
        clientSource: 'On-site',
        clientReview: 'It has been a pleasure working with Sulaiman. His professionalism, dedication, and technical expertise consistently exceeded our expectations. He delivered excellent results and worked seamlessly. I look forward to future collaborations with him..'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
