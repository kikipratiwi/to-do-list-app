import { ReactNode, createContext, useState } from 'react';

export type ItemContextProps = {
    name: string;
    qty: number;
    price: string | number;
    setName: (name: string) => void;
    setQty: (qty: number) => void;
    setPrice: (price: string | number) => void;
};

export const ItemContext = createContext({} as ItemContextProps);

const ItemProvider = ({ children }: { children: ReactNode }) => {
    const [name, setName] = useState<string>('Bread');
    const [qty, setQty] = useState<number>(20);
    const [price, setPrice] = useState<string | number>('$3' as string);

    const contextValues: ItemContextProps = {
        name,
        qty,
        price,
        setName,
        setQty,
        setPrice,
    };

    return (
        <ItemContext.Provider value={contextValues}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemProvider;
