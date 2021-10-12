import React from "react";

export interface DataState {
    data: any,
    isLoading: boolean,
    isError: null | string,
}

export interface Child {
    id: number;
    title: string;
    children: any[];
}

export interface RootObject {
    id: number;
    title: string;
    children?: Child[];
    onClick?: React.MouseEventHandler,
}
