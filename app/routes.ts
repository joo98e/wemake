import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about-us", "domain/about-us/AboutUs.tsx"),
] satisfies RouteConfig;
