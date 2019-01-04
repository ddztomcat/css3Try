
import Loading from '@/components/loading';
import Loadable from 'react-loadable';
const LoadableHome = Loadable({
    loader: () => import('@/view/dice/index'),
    loading: Loading,
});
const LoadableSVG = Loadable({
    loader: () => import('@/view/svg/index'),
    loading: Loading,
});
const LoadableEarthMoon = Loadable({
    loader: () => import('@/view/earthMoon/index'),
    loading: Loading,
});
const routes = [
    {
        path: '/home',
        component: LoadableHome,
        name: '骰子',
        icon: 'radar-chart'
    },
    {
        path: '/svg',
        component: LoadableSVG,
        name: 'SVG',
        icon: 'radar-chart'
    },
    {
        path: '/earth-moon',
        component: LoadableEarthMoon,
        name: 'EarthMoon',
        icon: 'radar-chart'
    }
];
export default routes;
