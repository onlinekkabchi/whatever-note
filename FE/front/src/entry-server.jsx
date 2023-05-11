import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <div>static</div>
    </StaticRouter>
  );
}

export { render };
