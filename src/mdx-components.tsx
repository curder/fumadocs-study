import * as icons from 'lucide-react';
import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import {TypeTable} from "fumadocs-ui/components/type-table";
import { File, Files, Folder } from 'fumadocs-ui/components/files';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...(icons as unknown as MDXComponents),
    ...defaultMdxComponents,
    Tab,
    Tabs,
    File,
    Files,
    Folder,
    Accordion,
    Accordions,
    TypeTable,
    ...components,
  };
}
