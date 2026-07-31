import { Globe2, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";

const locations = [
  { name: "United States", detail: "Headquarters", x: "18%", y: "38%" },
  { name: "India", detail: "Delivery office", x: "69%", y: "52%" },
  { name: "UAE", detail: "Market coverage", x: "59%", y: "48%" },
  { name: "Singapore", detail: "Market coverage", x: "78%", y: "61%" },
  { name: "Malaysia", detail: "Market coverage", x: "75%", y: "58%" },
];

export function GlobalDeliveryMap() {
  return (
    <section className="production-section production-global">
      <Container>
        <div className="production-global-card">
          <div className="production-global-copy">
            <p className="production-eyebrow production-eyebrow-light">
              Global Delivery Perspective
            </p>
            <h2>Cross-border capability with clear local accountability</h2>
            <p>
              Vikvar supports client requirements across the United States,
              India, UAE, Singapore, Malaysia, and other markets based on the
              engagement.
            </p>

            <div className="production-location-list">
              {locations.map((location) => (
                <div key={location.name}>
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  <span>
                    <strong>{location.name}</strong>
                    <small>{location.detail}</small>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="production-map" aria-label="Vikvar global presence map">
            <Globe2 className="production-map-watermark" aria-hidden="true" />
            <div className="production-map-lines" aria-hidden="true" />
            {locations.map((location) => (
              <div
                className="production-map-point"
                style={{ left: location.x, top: location.y }}
                key={location.name}
              >
                <span aria-hidden="true" />
                <strong>{location.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
