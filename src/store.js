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

    ]
});