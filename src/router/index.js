import Vue from 'vue';
import Router from 'vue-router';

import Base from '@/components/Layout/Base';
import Settings from '@/components/management/Setting';
import Management from '@/components/management/Management';
import ManagementIndex from '@/components/management/Index';

Vue.use(Router);

const routes = [
  {
    path: '',
    component: Base,
    props: true,

    children: [
      {
        path: '/management-panel/',
        name: 'ManagementIndex',
        props: true,
        component: ManagementIndex
      },
      {
        path: '/management-panel/settings',
        name: 'Settings',
        props: true,
        component: Settings
      },
      {
        path: '/management-panel/management',
        name: 'Management',
        props: true,
        component: Management
      },
    ],

  }
]

const router = new Router({
  routes,
  mode: 'history',
});

export default router