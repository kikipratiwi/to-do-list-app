import { useContext } from 'react';
import ItemProvider, { ItemContext } from '../contexts/item.context';
import { Item } from '../components';

const SecondQuestion = () => {
    const { setName, setQty, setPrice } = useContext(ItemContext);

    // example to change context value
    const changeItemContextValue = () => {
        setName('Brent');
        setQty(2);
        setPrice(10000);
    };

    return (
        <div id="main">
            <Item />
        </div>
    );
};

const SecondQuestionPage = () => {
    return (
        <ItemProvider>
            <SecondQuestion />
        </ItemProvider>
    );
};

export default SecondQuestionPage;
