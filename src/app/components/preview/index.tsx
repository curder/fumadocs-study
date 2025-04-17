import { ReactNode } from "react";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import Wrapper from "./wrapper";

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
