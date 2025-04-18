"use client";
import dynamic from "next/dynamic";

export const Accordion = dynamic(() =>
  import("fumadocs-ui/components/accordion").then((res) => res.Accordion)
);

export const Accordions = dynamic(() =>
  import("fumadocs-ui/components/accordion").then((res) => res.Accordions)
);

export const TypeTable = dynamic(() =>
  import("fumadocs-ui/components/type-table").then((res) => res.TypeTable)
);

export const Banner = dynamic(() =>
  import("fumadocs-ui/components/banner").then((res) => res.Banner)
);

export const File = dynamic(() =>
  import("fumadocs-ui/components/files").then((res) => res.File)
);
export const Files = dynamic(() =>
  import("fumadocs-ui/components/files").then((res) => res.Files)
);
export const Folder = dynamic(() =>
  import("fumadocs-ui/components/files").then((res) => res.Folder)
);

export const ImageZoom = dynamic(() =>
  import("fumadocs-ui/components/image-zoom").then((res) => res.ImageZoom)
);
