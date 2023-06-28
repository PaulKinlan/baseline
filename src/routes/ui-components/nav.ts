import { BrowserName, Browsers } from "../../types.d.ts";
import template from "../../flora.ts";

export default function renderBrowsers(): ReadableStream<any> {
  return template`<nav>
  <ol>
      <li><a href="/">Time to Stable</a></li>
  </ol>
</nav>`;
}
