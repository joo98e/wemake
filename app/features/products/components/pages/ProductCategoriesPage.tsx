import type { Route } from ".react-router/types/app/features/products/components/pages/+types/ProductCategoriesPage";
import type { MetaFunction } from "react-router";

interface Props {}

export function meta({}: Route.MetaArgs): MetaFunction {
  return [
    { title: "Categories | ProductHunt Clone" },
    { name: "description", content: "Browse products by category" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    categories: [], // Add categories fetch logic
  };
}

const ProductCategoriesPage = ({}: Props) => {
  return <div>ProductCategoriesPage</div>;
};

export default ProductCategoriesPage;
