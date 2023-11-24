import React, { memo, ComponentProps } from "react";

export const TableCell = memo(({ children }: ComponentProps<"td">) => {
  return <td>{children}</td>;
});

TableCell.displayName = "memo(TableCell)";
