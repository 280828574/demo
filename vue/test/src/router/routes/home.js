const base = [
    {
        path: '/',
        name:'index',
        component: (resolve) => {
            require.ensure(['@/views/index'], (require) => {
                resolve(require('@/views/index'));
            });
        },
    },
    {
        path: '/base64',
        name: 'base64',
        component: (resolve) => {
            require.ensure(['@/views/base64'], (require) => {
                resolve(require('@/views/base64'));
            });
        },
    },
    {
        path: '/asyn',
        name: 'asyn',
        component: (resolve) => {
            require.ensure(['@/views/asyn'], (require) => {
                resolve(require('@/views/asyn'));
            });
        },
    },
    {
        path: '/asyn1',
        name: 'asyn1',
        component: (resolve) => {
            require.ensure(['@/views/asyn1'], (require) => {
                resolve(require('@/views/asyn1'));
            });
        },
    }
];

export default base;
