import type { LucideIcon } from "lucide-react";
import { Link, type LinkProps } from "react-router";
import { cn } from "~/lib/utils";

interface Props extends Omit<LinkProps, "to"> {
  onlyIcon?: boolean;
  icon?: LucideIcon;
  iconSize?: number;
  href: string;
  children: React.ReactNode;
}

export default function NavigationLink({
  onlyIcon = false,
  href,
  icon: LucideIconComponent,
  iconSize,
  children,
  ...rest
}: Props) {
  return (
    <Link to={href} {...rest}>
      {LucideIconComponent && (
        <LucideIconComponent
          className={cn([iconSize && `size-${iconSize} mr-2`])}
        />
      )}
      {!onlyIcon && children}
    </Link>
  );
}
