import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface AdSlotProps {
  slot: string;
  format?: string;
  responsive?: boolean;
  style?: React.CSSProperties;
}

const AdSlot = ({
  slot,
  format = "auto",
  responsive = true,
  style = { display: "block" },
}: AdSlotProps) => {
  const adRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && adRef.current) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.error("Adsense error", e);
          }
        }
      },
      {
        rootMargin: "500px",
      }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => {
      if (adRef.current) {
        observer.unobserve(adRef.current);
      }
    };
  }, []);

  return (
    <ins
      key={slot} // ✅ force re-render
      ref={adRef}
      className="adsbygoogle"
      style={style}
      data-ad-client="ca-pub-9152398635458459"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
};

export default AdSlot;
