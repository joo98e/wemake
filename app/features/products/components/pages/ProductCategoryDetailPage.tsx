import type { Route } from ".react-router/types/app/features/products/components/pages/+types/ProductCategoryDetailPage";
import type { MetaDescriptor, MetaFunction } from "react-router";

interface Props {}

export function meta(): MetaDescriptor[] {
  return [
    { title: "Category Detail | ProductHunt Clone" },
    { name: "description", content: "View products in this category" },
  ];
}

export function loader({ request, params }: Route.LoaderArgs) {
  const { category } = params;
  return {
    category,
    products: [], // Add products fetch logic
  };
}

const ProductCategoryDetailPage = ({}: Props) => {
  return <div>ProductCategoryDetailPage</div>;
};

export default ProductCategoryDetailPage;
