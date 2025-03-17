import {
  type RouteConfig,
  index,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("features/home/components/pages/HomePage.tsx"),
  ...prefix("products", [
    index("features/products/components/pages/ProductsPage.tsx"),
    ...prefix("leaderboards", [
      index("features/products/components/pages/ProductLeaderboardPage.tsx"),
      route(
        "/yearly/:year",
        "features/products/components/pages/ProductLeaderboardYearlyPage.tsx"
      ),
      route(
        "/monthly/:year/:month",
        "features/products/components/pages/ProductLeaderboardMonthlyPage.tsx"
      ),
      route(
        "/daily/:year/:month/:day",
        "features/products/components/pages/ProductLeaderboardDailyPage.tsx"
      ),
      route(
        "/weekly/:year/:week",
        "features/products/components/pages/ProductLeaderboardWeeklyPage.tsx"
      ),
    ]),
    ...prefix("categories", [
      index("features/products/components/pages/ProductCategoriesPage.tsx"),
      route(
        "/:category",
        "features/products/components/pages/ProductCategoryDetailPage.tsx"
      ),
    ]),
    route(
      "/search",
      "features/products/components/pages/ProductSearchPage.tsx"
    ),
    route(
      "/submit",
      "features/products/components/pages/ProductSubmitPage.tsx"
    ),
    route("/promote", "features/products/components/pages/PromotePage.tsx"),
  ]),
] satisfies RouteConfig;
