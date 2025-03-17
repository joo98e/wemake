import type { Route } from ".react-router/types/app/features/products/components/pages/+types/ProductLeaderboardYearlyPage";
import type { MetaDescriptor, MetaFunction } from "react-router";

interface Props {}

export function meta(): MetaDescriptor[] {
  return [
    { title: "Yearly Leaderboard | ProductHunt Clone" },
    { name: "description", content: "View yearly product leaderboard" },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { year } = params;
  return {
    year,
    products: [], // Add products fetch logic
  };
}

const ProductLeaderboardYearlyPage = ({}: Props) => {
  return <div>ProductLeaderboardYearlyPage</div>;
};

export default ProductLeaderboardYearlyPage;
