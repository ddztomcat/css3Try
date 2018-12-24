
import Loading from '@/components/loading';
import Loadable from 'react-loadable';
const LoadableHome = Loadable({
    loader: () => import('@/view/dice/index'),
    loading: Loading,
});
const routes = [
    {
        path: '/',
        component: LoadableHome,
        name: '骰子',
        icon: 'radar-chart'
    }
];
export default routes;
