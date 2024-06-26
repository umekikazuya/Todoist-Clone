import {Layout} from '@/components/Layout';
import {ProjectView, DefaultView} from '@/views';
import {createBrowserRouter, Navigate, RouteObject} from 'react-router-dom';

// ルートの設定.
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      // Base route.
      {
        index: true,
        element: (
          <Navigate
            to="/today"
            replace={true}
          />
        ),
      },
      // Today.
      {
        path: 'today',
        element: <DefaultView />,
      },
      {
        path: 'inbox',
        element: <DefaultView />,
      },
      {
        path: 'next',
        element: <DefaultView />,
      },
      // By project.
      {
        path: 'project/:projectId',
        element: <ProjectView />,
      },
    ],
  },
];

// ルーターの作成.
const router = createBrowserRouter(routes);

export default router;
