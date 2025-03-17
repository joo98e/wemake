import type { Route } from ".react-router/types/app/features/products/components/pages/+types/ProductSearchPage";
import type { MetaDescriptor, MetaFunction } from "react-router";

interface Props {}

export function meta(): MetaDescriptor[] {
  return [
    { title: "Search Products | ProductHunt Clone" },
    { name: "description", content: "Search for products" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    products: [], // Add products fetch logic
  };
}

const ProductSearchPage = ({}: Props) => {
  return <div>ProductSearchPage</div>;
};

export default ProductSearchPage;
