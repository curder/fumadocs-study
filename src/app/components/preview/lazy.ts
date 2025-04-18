"use client";
import dynamic from "next/dynamic";

export const ImageZoom = dynamic(() =>
  import("fumadocs-ui/components/image-zoom").then((res) => res.ImageZoom)
);
