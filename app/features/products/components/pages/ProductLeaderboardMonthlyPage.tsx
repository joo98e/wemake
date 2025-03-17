import type { Route } from ".react-router/types/app/features/products/components/pages/+types/ProductLeaderboardMonthlyPage";
import type { MetaArgs, MetaFunction } from "react-router";

interface Props {}

export function meta({ matches }: MetaArgs): MetaFunction {
  return [
    { title: "Monthly Leaderboard | ProductHunt Clone" },
    { name: "description", content: "View monthly product leaderboard" },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, month } = params;
  return {
    year,
    month,
    products: [], // Add products fetch logic
  };
}

const ProductLeaderboardMonthlyPage = ({}: Props) => {
  return <div>ProductLeaderboardMonthlyPage</div>;
};

export default ProductLeaderboardMonthlyPage;
