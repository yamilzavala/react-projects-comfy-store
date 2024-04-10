import ReactQueryProvider from './reactQuery/ReactQueryProvider';
import WrapperRouter from './router/WrapperRouter';


const AppConfyStore = () => {
    return (
        <ReactQueryProvider>
            <WrapperRouter/>
        </ReactQueryProvider>
    );
};

export default AppConfyStore;