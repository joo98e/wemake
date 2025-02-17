import type { LucideIcon, LucideProps } from "lucide-react";
import { Link, type LinkProps } from "react-router";
import { twMerge } from "tailwind-merge";
import type InternalPaths from "~/common/constants/InternalPaths";
import { cn } from "~/lib/utils";

interface Props extends Omit<LinkProps, "to"> {
  icon?: LucideIcon;
  iconSize?: number;
  path: InternalPaths;
}

export default function NavigationLink({
  path,
  icon: LucideIconComponent,
  iconSize,
  ...rest
}: Props) {
  return (
    <Link to={path.path} {...rest}>
      {LucideIconComponent && (
        <LucideIconComponent
          className={cn([iconSize && `size-${iconSize} mr-2`])}
        />
      )}
      {path.as}
    </Link>
  );
}
