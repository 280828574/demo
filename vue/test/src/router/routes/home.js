const base = [
    {
        path: '/',
        name:'接口测试',
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
        name: '异步组件',
        component: (resolve) => {
            require.ensure(['@/views/asyn'], (require) => {
                resolve(require('@/views/asyn'));
            });
        },
    },
    {
        path: '/asyn1',
        name: '高级异步组件',
        component: (resolve) => {
            require.ensure(['@/views/asyn1'], (require) => {
                resolve(require('@/views/asyn1'));
            });
        },
    },
    {
        path: '/maxHeight',
        name: '最大高度滑动动画',
        component: (resolve) => {
            require.ensure(['@/views/maxHeight'], (require) => {
                resolve(require('@/views/maxHeight'));
            });
        },
    },
    {
        path: '/searchDome',
        name: '搜索防抖上下选择',
        component: (resolve) => {
            require.ensure(['@/views/searchDome'], (require) => {
                resolve(require('@/views/searchDome'));
            });
        },
    }
];

export default base;
