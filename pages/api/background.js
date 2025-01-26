const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Nasarawa State University, Keffi (NSUK)',
                degree: 'B.A, French',
                detail: "Bachelor's Degree in French from NSUK.",
                year: '2019-2024'
            },
            {
                id: 1,
                title: 'Ahmadiyya Community Secondary School Ara',
                degree: 'High School Certificate (HSC)',
                detail: "Obtained Junior School Certificate and West African Senior School Certificate Examination (WASSCE).",
                year: '2012-2018'
            },
            {
                id: 2,
                title: 'Gifted Kiddies Academy',
                degree: 'First School Leaving Certificate (FSLC)',
                detail: "Completed Primary 1-5 at Gifted Kiddies Academy",
                year: '- 2012'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'MKA Nigeria',
                role: 'Frontend Developer',
                url: 'No website',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '11/2023 - 01/2025',
                location: 'Lagos, Nigeria'
            },
            {
                id: 2,
                title: 'Rejoice Cyber Cafe',
                role: 'Data Analyst Intern',
                url: 'No website',
                desc: 'AAnalyzed large datasets using SQL, identifying key trends and patterns, which improved data-driven 00 decision02making by 30%.',
                year: '2023 - 2024',
                location: 'Abuja, Nigeria'
            },
            {
                id: 3,
                title: "LOOKMAN'S POINT OF SALE (POS)",
                role: 'Data Analysis Volunteer',
                url: 'No website',
                desc: "Volunteered in data analysis to optimize market sales.",
                year: '2023 - 2023',
                location: 'Abuja, Nigeria'
            },
            {
                id: 4,
                title: "JEREMY E. WATSON EDUCATIONAL CENTER, INC. ",
                role: 'French Tutor',
                url: 'https://jeremyewatsonecinc.org/',
                desc: "Volunteered in teaching French Language.",
                year: '07/2024 - present',
                location: 'Florida, USA'
            },
            {
                id: 5,
                title: "EPPME DIGITAL TECHNOLOGIES",
                role: 'IT Service Staff',
                url: 'http://www.eppmeapp.com/',
                desc: "Volunteered in teaching French Language.",
                year: '02/2024 - 03/2024',
                location: 'Dakkar, Senegal'
            },
            {
                id: 6,
                title: "AHMADIYYA DU TOGO",
                role: 'Contact Center Supervisor',
                url: 'No website',
                desc: "Supervising the center and volunteered in graphic design.",
                year: '07/2023 - 01/2024',
                location: 'Lomé, Togo'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
