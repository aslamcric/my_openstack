import BaseLayout from 'layouts/Basic';
import E404 from 'pages/base/containers/404';

import Invoice from '../containers/Invoice';

const PATH = '/billing';

export default [
  {
    path: PATH,
    component: BaseLayout,
    routes: [
      {
        path: `${PATH}/invoices`,
        component: Invoice,
        exact: true,
      },
      { path: '*', component: E404 },
    ],
  },
];
