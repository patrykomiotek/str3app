import React, { memo, ComponentProps } from "react";

export const TableFoot = memo(({ children }: ComponentProps<"tfoot">) => {
  return <tfoot>{children}</tfoot>;
});

TableFoot.displayName = "memo(TableFoot)";
