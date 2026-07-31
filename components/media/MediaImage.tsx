import type { VikvarMediaItem } from "./media-library";

type Props = {
  media: VikvarMediaItem;
  className?: string;
  eager?: boolean;
  showCredit?: boolean;
};

export function MediaImage({
  media,
  className = "",
  eager = false,
  showCredit = false,
}: Props) {
  return (
    <figure className={`media-image ${className}`.trim()}>
      <img
        src={media.src}
        alt={media.alt}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        decoding="async"
        referrerPolicy="no-referrer"
      />
      {showCredit ? (
        <figcaption>
          <a href={media.sourcePage} target="_blank" rel="noreferrer">
            {media.credit}
          </a>
        </figcaption>
      ) : null}
    </figure>
  );
}
