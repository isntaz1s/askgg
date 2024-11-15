import * as React from "react";

import { cn } from "~/lib/utils";

/* eslint-disable @typescript-eslint/no-empty-object-type */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-base border-2 border-border bg-white px-3 py-2 text-sm font-base text-text ring-offset-white selection:bg-main selection:text-black placeholder:text-black/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-darkBorder dark:bg-secondaryBlack dark:text-darkText",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
