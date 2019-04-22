const base = [
    {
        path: '/index',
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
    },
    {
        path: '/api',
        name: 'vue-API',
        component: (resolve) => {
            require.ensure(['@/views/api/api'], (require) => {
                resolve(require('@/views/api/api'));
            });
        },
        redirect: {name:'observable'},
        children:[
            {
                path: '/api/observable',
                name:'observable',
                component: (resolve) => {
                    require.ensure(['@/views/api/observable'], (require) => {
                        resolve(require('@/views/api/observable'));
                    });
                },
            },
            {
                path: '/api/aaa',
                name:'aaa',
                component: (resolve) => {
                    require.ensure(['@/views/api/aaa'], (require) => {
                        resolve(require('@/views/api/aaa'));
                    });
                },
            }
        ]
    },
    {
        path: '/plugIn',
        name: 'plugIn',
        component: (resolve) => {
            require.ensure(['@/views/plugIn/plugIn'], (require) => {
                resolve(require('@/views/plugIn/plugIn'));
            });
        },
        redirect: {name:'particles'},
        children:[
            {
                path: '/plugIn/particles',
                name:'particles',
                component: (resolve) => {
                    require.ensure(['@/views/plugIn/vue-particles'], (require) => {
                        resolve(require('@/views/plugIn/vue-particles'));
                    });
                },
            },
            {
                path: '/plugIn/kim-vue-touch',
                name:'kim-vue-touch',
                component: (resolve) => {
                    require.ensure(['@/views/plugIn/kim-vue-touch'], (require) => {
                        resolve(require('@/views/plugIn/kim-vue-touch'));
                    });
                },
            }
        ]
    }
];

export default base;
