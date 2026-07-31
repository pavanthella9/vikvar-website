import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  caption?: ReactNode;
  className?: string;
  imageClassName?: string;
};

export function ResponsiveMedia({
  src,
  alt,
  width,
  height,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
  caption,
  className = "",
  imageClassName = "",
}: Props) {
  return (
    <figure className={`vikvar-image-frame ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className={imageClassName}
      />
      {caption ? (
        <figcaption className="vikvar-image-caption">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
