import { BrowserName, Browsers } from "../../types.d.ts";
import template from "../../flora.ts";

export default function renderBrowsers(): ReadableStream<any> {
  return template`<nav>
  <a href="/">Home</a>
</nav>`;
}
