import React, { ReactElement, ReactNode } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';

type Column<Data> = {
    key: string;
    header: string | ReactNode;
    cell?: (data: Data) => ReactNode | null;
};

type DatatableProps<Data> = {
    columns: Column<Data>[];
    data: Data[];
};

const Datatable = <Data,>({
    columns,
    data,
}: DatatableProps<Data>): ReactElement => {
    return (
        <Table variant="striped">
            <Thead>
                <Tr>
                    {columns.map((col) => {
                        return <Th key={col.key + 'header'}>{col.header}</Th>;
                    })}
                </Tr>
            </Thead>

            <Tbody>
                {data.map((obj, index) => {
                    return (
                        <Tr key={'data' + index}>
                            {columns.map((col) => {
                                return (
                                    <Td key={col.key + 'data'}>
                                        {col.cell
                                            ? col.cell(obj)
                                            : (obj as any)[col.key]}
                                    </Td>
                                );
                            })}
                        </Tr>
                    );
                })}
            </Tbody>
        </Table>
    );
};

export default Datatable;
