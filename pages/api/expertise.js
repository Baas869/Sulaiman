const expertise = [
    {
        id: 0,
        title: 'Web Developer',
        desc: "I am a skilled Web Developer with expertise in HTML5, CSS3, JavaScript, TypeScript, and modern front-end frameworks. I specialize in building responsive, visually appealing, and high-performance websites and applications. By leveraging clean coding practices, cutting-edge tools, and a deep understanding of web development principles, I deliver innovative and scalable solutions tailored to client requirements. My goal is to create seamless digital experiences that combine functionality, aesthetics, and user engagement.",
    },
    {
        id: 1,
        title: 'React Js',
        desc: "As a developer, I'm proficient in React.js for building dynamic and interactive user interfaces. I leverage React's component-based architecture to create scalable and maintainable web applications. By utilizing features like hooks, context API, and state management libraries, I ensure seamless performance and an exceptional user experience. My expertise in React.js allows me to deliver high-quality, responsive solutions efficiently.",
    },
    {
        id: 2,
        title: 'Next Js',
        desc: "As a developer, I'm proficient in Next.js, a powerful React framework for building server-rendered and static web applications. I use Next.js to optimize performance with features like server-side rendering (SSR), static site generation (SSG), and API routes. Its built-in routing and scalability streamline development, allowing me to deliver high-quality, fast, and SEO-friendly web applications efficiently.",
    },
    {
        id: 3,
        title: 'Git',
        desc: "As a developer, I am proficient in using Git for version control, enabling efficient collaboration and code management across teams. I use Git to track changes, manage branches, and handle merge conflicts, ensuring a smooth and organized development process. My expertise in Git helps maintain code integrity and streamline collaboration, leading to the timely delivery of high-quality software.",
    },
    {
        id: 4,
        title: 'Data Management/Analyst',
        desc: "As a data analyst, I am proficient in MySQL, Excel, Python, Power BI, and Tableau. I use MySQL and Python for data extraction, manipulation, and analysis, ensuring accurate insights. Excel aids in organizing data efficiently, while Power BI and Tableau enable me to create dynamic visualizations and dashboards. My expertise ensures actionable insights are delivered effectively to support data-driven decision-making.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
