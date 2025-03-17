import type { Route } from ".react-router/types/app/features/products/components/pages/+types/ProductLeaderboardWeeklyPage";
import type { MetaDescriptor, MetaFunction } from "react-router";

interface Props {}

export function meta(): MetaDescriptor[] {
  return [
    { title: "Weekly Leaderboard | ProductHunt Clone" },
    { name: "description", content: "View weekly product leaderboard" },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { year, week } = params;
  return {
    year,
    week,
    products: [], // Add products fetch logic
  };
}

const ProductLeaderboardWeeklyPage = ({}: Props) => {
  return <div>ProductLeaderboardWeeklyPage</div>;
};

export default ProductLeaderboardWeeklyPage;
