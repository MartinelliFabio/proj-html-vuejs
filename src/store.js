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
    ]
});