import { BlockDecoratorProps } from "sanity";

export function SuperscriptIcon() {
  return <span>Sup</span>;
}

export function SuperscriptRenderer(props: BlockDecoratorProps) {
  return <sup>{props.children}</sup>;
}
