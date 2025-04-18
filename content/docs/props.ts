import type { ComponentPropsWithoutRef } from "react";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { Banner } from "fumadocs-ui/components/banner";
import { File, Folder } from "fumadocs-ui/components/files";

export type TypeTableProps = ComponentPropsWithoutRef<typeof TypeTable>;

export type TypeTableObjectTypeProps = ComponentPropsWithoutRef<
  typeof TypeTable
>["type"][string];

export type AccordionsProps = Omit<
  ComponentPropsWithoutRef<typeof Accordions>,
  keyof ComponentPropsWithoutRef<"div"> | "value" | "onValueChange"
>;

export type AccordionProps = Omit<
  ComponentPropsWithoutRef<typeof Accordion>,
  keyof ComponentPropsWithoutRef<"div">
>;

export type BannerProps = { id?: string } & Omit<
  ComponentPropsWithoutRef<typeof Banner>,
  keyof ComponentPropsWithoutRef<"div">
>;

export type FileProps = Omit<
  ComponentPropsWithoutRef<typeof File>,
  keyof ComponentPropsWithoutRef<"div">
> & { className?: string };

export type FolderProps = Omit<
  ComponentPropsWithoutRef<typeof Folder>,
  keyof ComponentPropsWithoutRef<"div">
>;
