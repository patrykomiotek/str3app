import React, { memo, ComponentProps } from "react";

export const TableHeader = memo(({ children }: ComponentProps<"th">) => {
  return <th>{children}</th>;
});

TableHeader.displayName = "memo(TableHeader)";
