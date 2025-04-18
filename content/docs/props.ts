import type {
    ComponentPropsWithoutRef,
} from 'react';
import {TypeTable} from "fumadocs-ui/components/type-table";

export type TypeTableProps = ComponentPropsWithoutRef<typeof TypeTable>;

export type TypeTableObjectTypeProps = ComponentPropsWithoutRef<
    typeof TypeTable
>['type'][string];