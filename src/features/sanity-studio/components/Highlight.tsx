import { BlockDecoratorProps } from "sanity";

export function HighlightIcon() {
  return <span>H</span>;
}

export function HighlightRenderer(props: BlockDecoratorProps) {
  return <mark>{props.children}</mark>;
}
