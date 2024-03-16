import React from 'react';
import { Appbar } from 'react-native-paper';

export const HeaderComponent = (props: HeaderComponentParams) => {

    return (

        <Appbar style={{ backgroundColor: '#6464fa' }}>
            <Appbar.BackAction />
            <Appbar.Content title={props.title} />
        </Appbar>
    )
}

interface HeaderComponentParams {
    title: string;
}