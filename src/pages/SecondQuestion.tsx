import ItemProvider from '../contexts/item.context';
import { Item } from '../components';

const SecondQuestion = () => {
    /**
     * Example to change context value:
        const { setName, setQty, setPrice } = useContext(ItemContext);
        const changeItemContextValue = () => {
            setName('Brent');
            setQty(2);
            setPrice(10000);
        };
    */

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
