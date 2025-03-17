import type { Route } from ".react-router/types/app/features/products/components/pages/+types/ProductsPage";
import type { MetaFunction, MetaDescriptor } from "react-router";

interface Props {}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Products | ProductHunt Clone" },
    { name: "description", content: "Browse and discover products" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    products: [], // Add products fetch logic
  };
}

const ProductsPage = ({}: Props) => {
  return <div>ProductsPage</div>;
};

export default ProductsPage;
