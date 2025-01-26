const portfolio = [
    {
        id: 0,
        projectName: "Baas Tech",
        url: "https://inspiring-kangaroo-ec2193.netlify.app/",
        image: "projects/baasTech.png",
        projectDetail: "I developed a responsive website using HTML, CSS, and JavaScript, deployed on Netlify for fast and reliable performance. The site features a clean and modern design, offering seamless user experience and easy navigation, while ensuring fast load times and high accessibility across devices.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Netlify"
            },
        ]
    },
    {
        id: 0,
        projectName: "ARSHA",
        url: "https://polite-douhua-ff6352.netlify.app/",
        image: "projects/arsha.png",
        projectDetail: "I created a dynamic website using HTML, CSS, and JavaScript, hosted on Netlify for optimal performance. The site boasts a sleek, user-friendly design with interactive features, ensuring smooth navigation and fast loading speeds. It is fully responsive, offering an excellent browsing experience on all devices.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Netlify"
            },
        ]
    },
    {
        id: 0,
        projectName: "Atfal-360",
        url: "https://mkank-atfal-360.vercel.app/",
        image: "projects/atfal.png",
        projectDetail: "The Atfal dashboard page displays data on young boys aged 0-17 in the community, categorized by age groups: preschool (0-5), early childhood (6-10), pre-teen (11-13), and teen (14-17). The data is presented in various charts for better visualization and analysis.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "CSS"
            },
            {
                tech: "vercel"
            },
        ]
    },
    {
        id: 0,
        projectName: "Data Finance",
        url: "https://baas-data-finance-app.netlify.app/",
        image: "projects/dataFinance.png",
        projectDetail: "I developed Data Finance, a modern and user-friendly web application using ReactJS and styled with TailwindCSS for a clean and responsive design. Hosted on Netlify, the site delivers fast performance and seamless navigation, offering businesses an efficient platform to manage financial data effectively.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Netlify"
            },
        ]
    },
    {
        id: 0,
        projectName: "Data Analysis Portfolio",
        url: "/domain-expired",
        image: "projects/dataPortfolio.png",
        projectDetail: "A data analysis portfolio website using HTML5 and CSS3 to showcase projects and insights effectively. Hosted on GitHub, the site features a clean, responsive layout, highlighting analytical skills and providing easy access to detailed reports and visualizations.",
        technologiesUsed: [
            {
                tech: "HTML5"
            },
            {
                tech: "CSS3"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Netlify"
            },
        ]
    },
    {
        id: 0,
        projectName: "Feedback App",
        url: "https://baas-feedback-app.netlify.app/",
        image: "projects/feedback.png",
        projectDetail: "Developed a Feedback App with ReactJS and CSS3, designed to gather and manage user feedback efficiently. Hosted on Netlify, the app features a clean, responsive interface, enabling seamless user interaction and providing valuable insights for improving products and services.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "CSS3"
            },
            {
                tech: "Netlify"
            },
        ]
    },
    {
        id: 1,
        projectName: "Book List app",
        url: "https://book-list-typescript-app.vercel.app/",
        image: "projects/booklist.png",
        projectDetail: "I developed a Booklist App, a web application for storing and managing book records, using ReactJS, TypeScript, and CSS. Hosted on Vercel, the app features a sleek, user-friendly interface, ensuring efficient and seamless record management for book enthusiasts and professionals alike.",
        technologiesUsed: [
            {
                tech: "ReactJs"
            },
            {
                tech: "TypeScript"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Vercel"
            },
        ]
    },
    {
        id: 2,
        projectName: "FRSC",
        url: "https://baas869.github.io/frsc/",
        image: "projects/frsc.png",
        projectDetail: "Recreated the Nigeria FRSC (Federal Road Safety Commission) website using HTML, CSS, and JavaScript, ensuring a visually appealing design, responsive layout, and interactive elements. The project focused on replicating the original site’s functionality while improving usability and user experience.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "Github"
            },
        ]
    },
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
