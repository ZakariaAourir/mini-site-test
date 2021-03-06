import { injectAsyncReducer } from '../../utils/asyncInjectors';
import Loadable from 'react-loadable';
import ComponentLoading from '../../components/ComponentLoading';

const LoginLoader = Loadable({
    loader: async () => {
        const module = await import('./reducer');
        injectAsyncReducer({
            userInfo: module.default,
        });
        return import('./container');
    },
    loading: ComponentLoading,
});

export default LoginLoader;
