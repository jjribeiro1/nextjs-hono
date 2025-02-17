import "@radix-ui/themes/styles.css";
import { Theme, type ThemeProps } from "@radix-ui/themes";

export function RadixThemes({
  themeProps,
  children,
}: {
  themeProps: ThemeProps;
  children: React.ReactNode;
}) {
  return <Theme {...themeProps}>{children}</Theme>;
}
