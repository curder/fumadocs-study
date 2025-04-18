import * as icons from "lucide-react";
import type { MDXComponents } from "mdx/types";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { File, Files, Folder } from "fumadocs-ui/components/files";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { Banner } from "fumadocs-ui/components/banner";
import { createGenerator } from "fumadocs-typescript";

const generator = createGenerator();

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
    Banner,
    Accordion,
    Accordions,
    TypeTable,
    AutoTypeTable: (props) => (
      <AutoTypeTable {...props} generator={generator} />
    ),
    ...components,
  };
}
