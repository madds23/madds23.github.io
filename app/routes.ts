import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
  route("/listen", "routes/listen.tsx"),
  route("/media-kit", "routes/media-kit.tsx"),
] satisfies RouteConfig;
