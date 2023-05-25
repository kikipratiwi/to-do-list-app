import { ReactElement, useContext, useEffect } from 'react';
import { ItemContext } from '../contexts/item.context';

const Item: React.FC = (): ReactElement => {
    const { name, qty, price } = useContext(ItemContext);

    useEffect(() => console.log('data', name, qty, price), []);

    return (
        <div className="item">
            <span>Hello World</span>
        </div>
    );
};

export default Item;
