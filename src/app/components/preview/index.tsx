import { ReactNode } from "react";
import { AutoTypeTable } from "fumadocs-typescript/ui";
import { createGenerator } from "fumadocs-typescript";
import { GithubInfo } from "fumadocs-ui/components/github-info";

import { owner, repo } from "@/lib/github";
import {
  File,
  Files,
  Folder,
  Banner,
  ImageZoom,
  TypeTable,
  Accordion,
  Accordions,
  InlineTOC,
  RootToggle,
} from "@/app/components/preview/lazy";
import Wrapper from "@/app/components/preview/wrapper";
import BannerImage from "@/public/images/banner.png";

export function accordion(): ReactNode {
  return (
    <Wrapper>
      <Accordions type="single" collapsible>
        <Accordion
          id="the-latest-trends-in-cloud-native-technologies"
          title="云原生技术的最新趋势"
        >
          <li>混合云/边缘云部署推动云原生技术向更轻量化方向发展</li>
          <li>优势：弹性伸缩、故障自愈、持续交付能力显著提升</li>
        </Accordion>
        <Accordion
          id="the-evolution-and-future-of-front-end-frameworks"
          title="前端框架的演变与未来"
        >
          <li>React/Vue/Angular三足鼎立，Svelte/Solid.js等编译型框架崛起</li>
          <li>Web Components原生组件标准逐渐被主流框架支持</li>
          <li>趋势：SSR/SSG优化首屏性能，WebAssembly突破前端性能瓶颈</li>
          <li>新方向：低代码平台+AI辅助生成代码改变开发模式</li>
        </Accordion>
      </Accordions>
    </Wrapper>
  );
}

export function typeTable(): ReactNode {
  return (
    <Wrapper>
      <div className="rounded-xl bg-fd-background">
        <TypeTable
          type={{
            percentage: {
              description: "滚动位置显示滚动按钮的百分比",
              type: "number",
              default: "0.2",
            },
          }}
        />
      </div>
    </Wrapper>
  );
}

export function autoTypeTable(): ReactNode {
  const generator = createGenerator();
  return (
    <Wrapper>
      <div className="bg-fd-background rounded-xl">
        <AutoTypeTable
          generator={generator}
          name="AutoTypeTableExample"
          type={`export interface AutoTypeTableExample {
    /**
     * Markdown syntax like links, \`code\` are supported.
     *
     * See https://fumadocs.vercel.app/docs/ui/components/type-table
     */
    name: string;

    /**
    * We love Shiki.
    *
    * \`\`\`ts
    * console.log("Hello World, powered by Shiki");
    * \`\`\`
    */
    options: Partial<{ a: unknown }>;

}`}
        />
      </div>
    </Wrapper>
  );
}

export function banner(): ReactNode {
  return (
    <Wrapper>
      <div className="flex flex-col gap-4">
        <Banner className="z-0" changeLayout={false}>
          Be careful, Fumadocs v99 has released
        </Banner>

        <Banner
          className="z-0"
          id="test-rainbow"
          variant="rainbow"
          changeLayout={false}
        >
          Using the <code>rainbow</code> variant
        </Banner>

        <Banner className="z-0" id="test" changeLayout={false}>
          Be careful, this banner can be closed
        </Banner>
      </div>
    </Wrapper>
  );
}

export function files(): ReactNode {
  return (
    <Wrapper>
      <Files>
        <Folder name="app" defaultOpen>
          <Folder name="[id]" defaultOpen>
            <File name="page.tsx" />
          </Folder>
          <File name="layout.tsx" />
          <File name="page.tsx" />
          <File name="global.css" />
        </Folder>
        <Folder name="components">
          <File name="button.tsx" />
          <File name="tabs.tsx" />
          <File name="dialog.tsx" />
        </Folder>
        <File name="package.json" />
      </Files>
    </Wrapper>
  );
}

export function githubInfo(): ReactNode {
  return (
    <Wrapper>
      <GithubInfo
        owner={owner}
        repo={repo}
        token={process.env.GITHUB_TOKEN}
        className="not-prose bg-fd-card"
      />
    </Wrapper>
  );
}

export function imageZoom(): ReactNode {
  return (
    <Wrapper>
      <ImageZoom
        alt="banner"
        src={BannerImage}
        className="!my-0 rounded-xl bg-fd-background"
        priority
      />
    </Wrapper>
  );
}

export function inlineToc(): ReactNode {
  return (
    <Wrapper>
      <InlineTOC
        items={[
          { title: "欢迎", url: "#welcome", depth: 2 },
          { title: "现在开始", url: "#getting-started", depth: 3 },
          { title: "使用", url: "#usage", depth: 3 },
          { title: "样式", url: "#styling", depth: 3 },
          { title: "引用", url: "#reference", depth: 2 },
          { title: "组件", url: "#components", depth: 3 },
          { title: "APIs", url: "#api", depth: 3 },
        ]}
      >
        文档目录
      </InlineTOC>
    </Wrapper>
  );
}
export function rootToggle(): ReactNode {
  return (
    <Wrapper>
      <div className="not-prose mx-auto grid max-w-[240px] rounded-lg bg-fd-background">
        <RootToggle
          className="p-3"
          options={[
            {
              title: "Hello World",
              description: "根切换组件的示例项",
              url: "/docs",
            },
            {
              title: "Other page",
              description: "根切换组件的示例项",
              url: "/docs/image",
            },
          ]}
        />
      </div>
    </Wrapper>
  );
}
