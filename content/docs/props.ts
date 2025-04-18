import type {
    ComponentPropsWithoutRef,
} from 'react';
import {TypeTable} from "fumadocs-ui/components/type-table";
import {Accordion, Accordions} from "fumadocs-ui/components/accordion";

export type TypeTableProps = ComponentPropsWithoutRef<typeof TypeTable>;

export type TypeTableObjectTypeProps = ComponentPropsWithoutRef<
    typeof TypeTable
>['type'][string];

export type AccordionsProps = Omit<
    ComponentPropsWithoutRef<typeof Accordions>,
    keyof ComponentPropsWithoutRef<'div'> | 'value' | 'onValueChange'
>;

export type AccordionProps = Omit<
    ComponentPropsWithoutRef<typeof Accordion>,
    keyof ComponentPropsWithoutRef<'div'>
>;