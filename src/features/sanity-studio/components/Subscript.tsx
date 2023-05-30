import { BlockDecoratorProps } from "sanity";

export function SubscriptIcon() {
  return <span>Sub</span>;
}

export function SubscriptRenderer(props: BlockDecoratorProps) {
  return <sub>{props.children}</sub>;
}
