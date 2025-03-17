import type { Route } from ".react-router/types/app/features/products/components/pages/+types/ProductSubmitPage";
import type { MetaDescriptor, MetaFunction } from "react-router";

interface Props {}

export function meta(): MetaDescriptor[] {
  return [
    { title: "Submit Product | ProductHunt Clone" },
    { name: "description", content: "Submit a new product" },
  ];
}

export function loader({ request }: Route.LoaderArgs) {
  return {
    // Add any necessary data fetching logic
  };
}

const ProductSubmitPage = ({}: Props) => {
  return <div>ProductSubmitPage</div>;
};

export default ProductSubmitPage;
