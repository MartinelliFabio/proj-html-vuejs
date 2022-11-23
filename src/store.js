import { reactive } from 'vue';

export const store = reactive ({
    links: [
        {
            title: 'Home',
            url: '#nogo',
            arrow: true,
            current: true,
            hover: false,
            pippo: true,
            linksDropdown: [
                {
                   text:  'Driving School'
                },
                {
                   text:  'High School'
                },
                {
                   text:  'Kinder Garten'
                },
                {
                   text:  'Header Video'
                },
            ]
        },
        {
            title: 'Courses',
            url: '#nogo',
            arrow: true,
            current: false,
            hover: false,
            pippo: true,
            linksDropdown: [
                {
                   text:  'Our Courses'
                },
                {
                   text:  'Single Course'
                },
                {
                   text:  'Intructor Profile'
                },
                {
                   text:  'Become a Teacher'
                },
            ]
        },
        {
            title: 'About Us',
            url: '#nogo',
            current: false,
        },
        {
            title: 'News',
            url: '#nogo',
            arrow: true,
            current: false,
            hover: false,
            pippo: true,
            linksDropdown: [
                {
                   text:  'EduPrime Blog'
                },
                {
                   text:  'Single Post'
                },
                {
                   text:  'Category Posts'
                },
            ]
        },
        {
            title: 'Pages',
            url: '#nogo',
            arrow: true,
            current: false,
            hover: false,
            pippo: true,
            linksDropdown: [
                {
                   text:  'How it Works'
                },
                {
                   text:  'Single Event'
                },
                {
                   text:  'University Shop'
                },
                {
                   text:  'Single Product'
                },
            ]
        },
        {
            title: 'Contact',
            url: '#nogo',
            current: false,
        },
        {
            title: 'Purchase',
            url: '#nogo',
            current: false,
        },
    ],
    imgFirstMain: [
        {
            img: '../public/img/Gavel-v2.png',
            text: 'law faculty',
            active: false
        },
        {
            img: '../public/img/Coins-tabs-v2.png',
            text: 'economy',
            active: false
        },
        {
            img: '../public/img/Medicine-tabs-v2.png',
            text: 'medicine',
            active: false
        },
        {
            img: '../public/img/Computer-tabs-v2.png',
            text: 'computer science',
            active: false
        },
        {
            img: '../public/img/Palette-tabs-v2.png',
            text: 'graphic design',
            active: false
        },
    ],
    imgPartners: [
        {
            img: '../public/img/partner-2.png',
            text: 'Partner 1',
        },
        {
            img: '../public/img/partner-3.png',
            text: 'Partner 2'
        },
        {
            img: '../public/img/partner-4.png',
            text: 'Partner 3'
        },
        {
            img: '../public/img/partner-5.png',
            text: 'Partner 4'
        },
        {
            img: '../public/img/partner-6.png',
            text: 'Partner 5'
        },
        {
            img: '../public/img/partner-8.png',
            text: 'Partner 6'
        },
        {
            img: '../public/img/partner-1.png',
            text: 'Partner 7'
        },
        {
            img: '../public/img/partner-7.png',
            text: 'Partner 8'
        },
    ],
    socialLinks: [
        {
            url: '#nogo',
            icon: '<i class="fa-brands fa-facebook-f"></i>'
        },
        {
            url: '#nogo',
            icon: '<i class="fa-brands fa-twitter"></i>'
        },
        {
            url: '#nogo',
            icon: '<i class="fa-brands fa-instagram"></i>'
        }
    ],
    coursesFooter: [
        {
            url: '#nogo',
            text: 'Economy'
        },
        {
            url: '#nogo',
            text: 'Design'
        },
        {
            url: '#nogo',
            text: 'Coaching'
        },
        {
            url: '#nogo',
            text: 'Business'
        },
        {
            url: '#nogo',
            text: 'Medicine'
        },
        {
            url: '#nogo',
            text: 'Law'
        },
        {
            url: '#nogo',
            text: 'Fitness'
        }
    ],
    faculties: [
        {
            title: 'law faculty',
            text: 'Learning from world-leading academics and practioners, you\'ll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.',
            img: '../public/img/Gavel-Illustration-e1556884768193.png'
        },
        {
            title: 'economy',
            text: 'Economics focuses on the behaviour and interactions of economic agents and how economies work. Microeconomics analyzes basic elements in the economy, including individual agents and markets, their interactions, and the outcomes of interactions, including unemployment of resource.',
            img: '../public/img/Economy.png'
        },
        {
            title: 'medicine',
            text: 'Medicine is the science and practice of establishing the diagnosis, prognosis, treatment, and prevention of disease. Medicine encompasses a variety of health care practices evolved to maintain and restore health by the prevention and treatment of illness.',
            img: '../public/img/Medicine.png'
        },
        {
            title: 'computer science',
            text: 'Computer science is the study of processes that interact with data and that can be represented as data in the form of programs. It enables the use of algorithms to manipulate, store, and communicate digital information. A computer scientist studies the theory of computation software systems.',
            img: '../public/img/Computer-Science.png'
        },
        {
            title: 'graphic design',
            text: 'Graphic design is the process of visual communication and problem-solving through the use of typography, photography and illustration. The field is considered a subset of visual communication and communication design, but sometimes the term "graphic design" is used synonymously.',
            img: '../public/img/Graphic-Design.png'
        }
    ]
});

const linksFooter = [
    {
        title: 'Get EduPrime',
        links: [
            {
                url: '#nogo',
                text: 'Request a website'
            },
            {
                url: '#nogo',
                text: 'Browse Themes'
            },
            {
                url: '#nogo',
                text: 'Payment options'
            },
            {
                url: '#nogo',
                text: 'Support System'
            },
            {
                url: '#nogo',
                text: 'Checkout'
            },
            {
                url: '#nogo',
                text: 'Purchase Theme'
            },
        ]
    },
    {
        title: 'Networking',
        links: [
            {
                url: '#nogo',
                text: 'Purchase Theme'
            },
            {
                url: '#nogo',
                text: 'Our Benefits'
            },
            {
                url: '#nogo',
                text: 'Our Team'
            },
            {
                url: '#nogo',
                text: 'Our Services'
            },
            {
                url: '#nogo',
                text: 'Other Products'
            },
            {
                url: '#nogo',
                text: 'My account'
            }
        ]
    }
]

export { linksFooter };