import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import heroImage from '../images/header-background.webp';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  InterestsSection,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Renji Joseph Sabu - Software Engineer',
  description: "Full Stack Developer with expertise in backend development, REST APIs, SQL, NoSQL and front end applications.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Interests: 'interests',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Renji Joseph Sabu.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am a US-based <strong className="text-stone-100">Full Stack Software Engineer</strong>. I recently graduated from <strong className="text-stone-100">North Carolina State University</strong> with
        a <strong>Master of Computer Science</strong> degree and I'm actively looking for opportunities where I can contribute to <strong className="text-stone-100">software development life cycle</strong>, 
        while giving myself back through <strong className="text-stone-100">self learning</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        With a combined experience of over 3 years at both <strong className="text-stone-100"><a href="https://www.hifx.in/" target="_blank">HiFX</a>
        </strong> and <strong className="text-stone-100"><a href="https://www.aboutamazon.com/" target="_blank">Amazon</a></strong>, I have demonstrated my ability to <strong className="text-stone-100">collaborate</strong> effectively with teams of varying sizes. 
        Having a high degree of <strong className="text-stone-100">initiative</strong>, I am committed to delivering work of exceptional quality and take pride in maintaining <strong className="text-stone-100">rigorous standards</strong>. 
        Additionally, I am passionate about <strong className="text-stone-100">contributing</strong> to the community and enjoy sharing my knowledge and expertise with others.
      </p>
    </>
  ),
  actions: [
    {
      href: '/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  descriptionIntro: `I recently graduated with a Master of Computer Science in May 2023, and I am eager to apply my learnings and expand my knowledge through new opportunities. 
  My expertise lies in designing and developing REST APIs using Go, Node.js, and Java, as well as working with SQL and NoSQL databases such as MySQL, Redis, and Firebase. 
  I am also highly proficient in developing single-page web applications using React and utilizing cloud tools, particularly AWS.`,
  descriptionEnd:`Beyond my work experience, I have actively pursued new technologies and languages, including IoT, Python, Ruby on Rails, and MongoDB, among others. 
  I thrive in collaborative and innovative environment by adapting to support the team and to exceed the project expectations.
  As a back-end development enthusiast, I envision myself growing into a leadership role where I can drive the design and implementation of back-end architecture while contributing to front end development.`,
  aboutItems: [
    {label: 'Location', text: 'Raleigh, NC', Icon: MapIcon},
    {label: 'Age', text: '26', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Study', text: 'North Carolina State University', Icon: AcademicCapIcon},
    {label: 'Strengths', text: 'REST APIs, Javascript, Databases, React, Cloud', Icon: TrophyIcon},
    {label: 'Focus', text: 'Back End Development, Documentation, Security, Clean Code', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Golang',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Java',
        level: 6,
      },
      {
        name: 'Python',
        level: 5
      }
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'MySQL',
        level: 9,
      },
      {
        name: 'Redis',
        level: 8,
      },
      {
        name: 'MongoDB',
        level: 5,
      },
      {
        name: 'Firebase',
        level: 5,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 9,
      },
      {
        name: 'CSS',
        level: 7,
      },
      {
        name: 'HTML',
        level: 9,
      },
    ],
  },
  {
    name: 'Cloud Services',
    skills: [
      {
        name: 'AWS',
        level: 7,
      },
      {
        name: 'Stripe',
        level: 7,
      },
      {
        name: 'Twilio',
        level: 7,
      },
      {
        name: 'Cloudflare',
        level: 5,
      },
    ],
  },
];


/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2021 to May 2023',
    location: 'North Carolina State University, Raleigh NC',
    title: 'Master of Computer Science',
    content: <><span className="text-sm font-bold">Relevant Coursework</span>
    <span className="text-sm">Design and Analysis of Algorithms, Object Oriented Design and Development, Software Engineering, Software Security, User Experience, Database Management Systems, Cloud Computing, Human Computer Interaction, Internet of Things</span>
    </>,
  },
  {
    date: 'August 2014 to May 2018',
    location: 'Mahatma Gandhi University, Kerala, India',
    title: 'Bachelor of Technology in Electrical and Electronics Engineering',
    content: <></>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2022 to August 2022',
    location: 'Amazon, Seattle',
    title: 'Software Development Engineer Intern',
    content: <>
        <li style={{textAlign: "left"}}>Constructed an API endpoint in Java and Spring Boot interacting with multiple microservices to return a customer’s
        progress towards fulfilling requirements of a promotion, and automated extensive unit testing using Junit.</li>
        <li style={{textAlign: "left"}}>Collaborated closely with UX designer to implement a design using CSS flexbox boosting alignment of products in
        promotions shopping page in Amazon website enhancing readability, scannability and habituation. </li>
    </>,
  },
  {
    date: 'July 2018 to July 2021',
    location: 'HiFX, Kerala, India',
    title: 'Software Engineer',
    content: <>
      <li style={{textAlign: "left"}}>Spearheaded development of relational databases (MySQL) and NoSQL databases (Redis, Firebase).</li>
      <li style={{textAlign: "left"}}>Selected and designed databases to suit relational, document and key-value data while maintaining cross-database data integrity.</li>
      <li style={{textAlign: "left"}}>Leveraged Go and Node.js with Echo and Express.js respectively to design and implement RESTful, well-structured, and documented APIs.</li>
      <li style={{textAlign: "left"}}>Developed fast and responsive single page web applications utilizing React with JavaScript.</li>
      <li style={{textAlign: "left"}}>Adopted nvD3 to construct various data representation components such as bar charts and line graphs for various projects.</li>
      <li style={{textAlign: "left"}}>Applied OAuth2.0 authentication modules utilizing JWT, access and refresh tokens and secure cookies.</li>
      <li style={{textAlign: "left"}}>Integrated social login support using Google, Apple and Facebook.</li>
      <li style={{textAlign: "left"}}>Devised robust payment solutions for web applications applying Stripe API and for mobile applications. </li>
    </>,
  },
];

export const projects: TimelineItem[] = [
  {
    date: 'March 2023 to April 2023',
    location: 'NC State University, Raleigh, NC',
    title: 'Personalized Home Automation in IoT',
    content: <>
        <li style={{textAlign: "left"}}>Led project to automate personalized settings using Raspberry Pi, supporting more than one occupant in room with RFIDs.</li>
        <li style={{textAlign: "left"}}>Conducted code reviews and designed API structure with Node and Express and MongoDB schema.</li>
        <li style={{textAlign: "left"}}>Leveraged MQTT Publish-Subscribe messaging to get live data, allowing users to control room settings in real time.</li>
    </>,
  },
  {
    date: 'May 2022 to August 2022',
    location: 'Amazon, Seattle, WA',
    title: 'Amazon Coupons',
    content: <>
        <li style={{textAlign: "left"}}>Implemented a new UX design in close collaboration with UX designer, increasing the readability and scannability of the page.</li>
        <li style={{textAlign: "left"}}>Authored an in depth documentation on the page layout, which would help the team in the future to add more features without breaking the current components.</li>
        <li style={{textAlign: "left"}}>Took initiative and resolved a phantom spacing issue through thorough research into the page layout, and created a detailed documentation on how to tackle it in the future.</li>
        <li style={{textAlign: "left"}}>Developed an API endpoint in Spring boot to implement multi-step promotions, allowing users to get a better offer on products once they reach a higher threshold of items in cart.</li>
    </>,
  },
  {
    date: 'March 2022 to May 2022',
    location: 'NC State University, Raleigh, NC',
    title: 'Security Analysis',
    content: <>
        <li style={{textAlign: "left"}}>Headed security risk assessment for OpenEMR, an open-source health records solution.</li>
        <li style={{textAlign: "left"}}>Leveraged different SAST, DAST, IAST tools and threat modelling methodologies to find and prioritize vulnerabilities.</li>
        <li style={{textAlign: "left"}}>Identified and rectified critical XSS and insecure cookie vulnerabilities which compromised user sessions and privacy.</li>
    </>,
  },
  {
    date: 'February 2022 to May 2022',
    location: 'NC State University, Raleigh, NC',
    title: 'Open-Source Contribution',
    content: <>
        <li style={{textAlign: "left"}}>Communicated with team to bring in internationalization on student portal built on Rails by leveraging I18n library.</li>
        <li style={{textAlign: "left"}}>Introduced latest ES modules into front end, replacing older React code and ES5 implementations.</li>
        <li style={{textAlign: "left"}}>Improved code readability by harnessing reusable components resulting in 25% reduction in total number of lines of code.</li>
    </>,
  },
  {
    date: 'March 2020 to October 2020',
    location: 'HiFX, Kerala, India',
    title: 'Telemedicine Application',
    content: <>
      <li style={{textAlign: "left"}}>Created a video call consultation system on Go and React.js to facilitate online consultation for medical practitioners and provide prescriptions adopting Twilio API and AWS Simple Storage Service.</li>
      <li style={{textAlign: "left"}}>Managed time slot availability on Redis hashes to achieve faster result fetching instead of storing in SQL.</li>
      <li style={{textAlign: "left"}}>Maintained doctor availability in Firebase real time database to display live status by syncing JSON data with client.</li>
      <li style={{textAlign: "left"}}>Modeled AWS Simple Email Service, Apple Push Notification Service and Firebase Cloud Messaging to send notifications and reminders through mail and push notifications.</li>
    </>,
  },
  {
    date: 'March 2019 to May 2019',
    location: 'HiFX, Kerala, India',
    title: 'Live Election Results',
    content: <>
      <li style={{textAlign: "left"}}>Developed the back end to publish live election results to a new website with 70 million visits per month during the state elections.</li>
      <li style={{textAlign: "left"}}>Used React, Node.js and Websockets API to publish results with almost zero delay.</li>
    </>,
  },
  {
    date: 'November 2018 to March 2019',
    location: 'HiFX, Kerala, India',
    title: 'Real Time Chat System',
    content: <>
      <li style={{textAlign: "left"}}>Employed cloud solutions such as AWS Simple Queue Service with consumer to develop a real-time chat system.</li>
      <li style={{textAlign: "left"}}>Achieved better availability and reliability by employing message queue and consumer for storing messages to database.</li>
      <li style={{textAlign: "left"}}>Improved horizontal scalability deploying Redis Pub/Sub in turn allowing multiple EC2 instances and Node.js clustering.</li>
    </>,
  },
];

/**
 * Interests section
 */
export const interestsSection: InterestsSection = {
  imageSrc: testimonialImage,
  interests: [
    {
      name: 'Documentation',
      text: 'Stripe inspired me to trust in the power of documentation. I believe that a great documentation is as important as a great product. Good documentations not only help the users use your product better, it also helps collaborators contribute effectively and saves a ton of time in the long run. Talk about a great investment!',
    },
    {
      name: 'Security',
      text: "After working in the industry for 3 years and taking measures to prevent threats, I got a deeper understanding of software security during my time at NC State. In this new world where more and more of an average person's life is intertwined with the internet, security is of the highest priority. From the smallest websites to cloud providers, anyone can be susceptible to an attack and I aim to keep security close to my work and learn more through it.",
    },
    {
      name: 'Clean Code',
      text: '"Clean code replaces the need of comments" - Even though I believe comments are sometimes neccessary, I cannot emphasis enough on the importance of clean code. It does the same effect as a great documentation, and works well with it raising the productivity of the entire team.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "I'm currently on the lookout for full stack developer roles. If you have a role that you think would match my skill set or if you just want to talk over a cup of coffee virtually, please reach out to me. ",
  items: [
    {
      type: ContactType.Email,
      text: 'rsabu@ncsu.edu',
      href: 'mailto:rsabu@ncsu.edu',
    },
    {
      type: ContactType.Location,
      text: 'Raleigh NC, United States',
      href: 'https://goo.gl/maps/NwGYP1egftLTCyBn6',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Renji Joseph Sabu',
      href: 'https://www.linkedin.com/in/renji-joseph-sabu/',
    },
    {
      type: ContactType.Github,
      text: 'renjiniravath',
      href: 'https://github.com/renjiniravath',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/renjiniravath'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/10689205/renji-joseph-sabu-niravath'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/renji-joseph-sabu/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/renji.joseph/'},
];
