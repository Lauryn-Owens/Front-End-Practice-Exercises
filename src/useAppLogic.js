import { useContext, useState } from 'react';
import { cartContext } from './context/cartContext';

const useAppLogic = () => {
    const { confirmOrder, checkingOut } = useContext(cartContext);
    const [display, setDisplay] = useState(true);

    const displayHandler = () => {
        setDisplay(false);
    };

    return { display, displayHandler, checkingOut };
};

export default useAppLogic;
