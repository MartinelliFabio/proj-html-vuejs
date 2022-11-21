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
    ]
});