import { FC, ReactNode } from 'react';
import { NativeProps } from '../../utils/native-props';
export declare type ResultProps = {
    status: 'success' | 'error' | 'info' | 'waiting' | 'warning';
    title: string;
    description?: string;
    icon?: ReactNode;
} & NativeProps;
export declare const Result: FC<ResultProps>;
