import React from "react";
import { Link } from "react-router";
import { Badge } from "~/common/components/ui/badge";
import { Button } from "~/common/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/common/components/ui/card";
import StringUtil from "~/lib/utils/StringUtil";

interface Props {
  id: string;
  company: string;
  companyLogoUrl: string;
  companyHq: string;
  title: string;
  postedAt: string;
  type: string;
  positionLocation: string;
  salary: {
    min: number;
    max: number;
  };
}

export default function JobCard({
  id,
  postedAt,
  company,
  companyHq,
  companyLogoUrl,
  title,
  type,
  positionLocation,
  salary,
}: Props) {
  const destination = `jobs/${id}`;

  return (
    <Link to={destination}>
      <Card className={"bg-transparent transition-colors hover:bg-card/50"}>
        <CardHeader>
          <div className={"flex items-center gap-4 mb-4"}>
            <img
              className={"size-10 rounded-full"}
              src={companyLogoUrl}
              alt={`${company} Logo`}
            />
            <div className={"space-x-2"}>
              <span className={"text-sm text-accent-foreground"}>
                {company}
              </span>
              <span className={"text-xs text-muted-foreground"}>
                {postedAt}
              </span>
            </div>
          </div>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className={"flex items-center gap-1"}>
          <Badge variant={"outline"}>{type}</Badge>
          <Badge variant={"outline"}>{positionLocation}</Badge>
        </CardContent>
        <CardFooter className={"flex justify-between"}>
          <div className={"flex flex-col"}>
            <span className={"text-sm font-medium text-muted-foreground"}>
              ${StringUtil.withComma(salary.min)} - $
              {StringUtil.withComma(salary.max)}
            </span>
            <span className={"text-xs font-medium text-muted-foreground"}>
              {companyHq}
            </span>
          </div>
          <Button variant={"secondary"} size={"sm"}>
            Apply now
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
