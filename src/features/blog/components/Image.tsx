import { FC } from "react";
import Image from "next/image";
import urlFor from "@/utils/urlFor";

interface BlockImageProps {
  value: {
    asset: {
      _ref: string;
    };
    alt: string;
  };
}

const BlockImage: FC<BlockImageProps> = ({ value }) => {
  const regex = /-(\d+)x(\d+)-/;

  const matches = value.asset._ref.match(regex);

  if (!matches) return null;

  return <Image src={urlFor(value).url()} alt={value.alt} width={+matches[1]} height={+matches[2]} />;
};

export default BlockImage;
