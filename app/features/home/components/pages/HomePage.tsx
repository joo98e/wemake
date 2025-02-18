import { type MetaFunction } from "react-router";
import { ProductCard } from "~/features/home/components/molecules/ProductCard";

export const meta: MetaFunction = () => [
  {
    title: "Home | wemake",
  },
  {
    name: "description",
    content: "Welcome to wemake",
  },
];

export default function HomePage() {
  return (
    <div className="h-[100vh] grid grid-cols-3 gap-4">
      <div>
        <h2 className={"text-5xl font-bold leading-tight tracking-tight"}>
          Today's Products
        </h2>
        <p className={"text-xl font-light text-foreground"}>
          The best products made by our community today
        </p>
      </div>

      <div>
      <ProductCard
          id="productId"
          title="Product Title"
          description="Product Description"
          commentsCount={12}
          viewsCount={12}
          votesCount={120}
        />
      </div>
    </div>
  );
}
