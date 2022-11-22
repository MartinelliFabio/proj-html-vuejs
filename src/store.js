import { reactive } from 'vue';

export const store = reactive ({
    links: [
        {
            title: 'Home',
            url: '#nogo',
            arrow: true,
            current: true,
        },
        {
            title: 'Courses',
            url: '#nogo',
            arrow: true,
            current: false,
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
        },
        {
            title: 'Pages',
            url: '#nogo',
            arrow: true,
            current: false,
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
            active: true
        },
        {
            img: '../public/img/Coins-tabs-v2.png',
            text: 'economy',
            active: false
        },
        {
            img: '../public/img/Medicine-tabs-v2.png',
            text: 'Medicine',
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