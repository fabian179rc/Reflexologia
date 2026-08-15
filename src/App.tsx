import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
import { getCheckoutUrl } from "./utils/checkoutUrl";
const META_PIXEL_ID = "37700639772914955";
const PAGE_TITLE =
  "Sistema Maestro de Reflexología para Profesionales — Sistema Profesional de 7 Días";
const PAGE_DESC =
  "Implementá Reflexología Clínica en tu gabinete en 7 días: protocolos por patología, fichas profesionales y guiones de venta listos para aplicar.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}protocolo-glp1-mockup.webp`;
const HERO_IMAGE_MOBILE = `${import.meta.env.BASE_URL}protocolo-glp1-mockup-mobile.webp`;

const SITE_URL = "https://reflexologia.tupuntodigital.shop/";
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
function addLink(
  rel: string,
  href: string,
  attrs: Record<string, string> = {},
) {
  const selector = `link[rel="${rel}"][href="${href}"]`;
  if (document.head.querySelector(selector)) return;
  const el = document.createElement("link");
  el.rel = rel;
  el.href = href;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  document.head.appendChild(el);
}
export function App() {
  useScreenInit();
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = "es";
    document.title = PAGE_TITLE;
    addLink("preconnect", "/cdn.magicpatterns.com", {
      crossorigin: "",
    });
    addLink("preconnect", "https://fonts.googleapis.com");
    addLink("preconnect", "https://fonts.gstatic.com", {
      crossorigin: "",
    });
    addLink("preload", HERO_IMAGE_MOBILE, {
      as: "image",
      fetchpriority: "high",
      media: "(max-width: 767px)",
    });
    addLink("preload", HERO_IMAGE, {
      as: "image",
      fetchpriority: "high",
      media: "(min-width: 768px)",
    });
    addLink("canonical", SITE_URL);
    setMeta("name", "description", PAGE_DESC);
    setMeta(
      "name",
      "viewport",
      "width=device-width, initial-scale=1, viewport-fit=cover",
    );
    setMeta("name", "theme-color", "#0a0f1a");
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESC);
    setMeta("property", "og:locale", "es_LA");
    setMeta("property", "og:image", HERO_IMAGE);
    setMeta("property", "og:url", SITE_URL);
    setMeta(
      "property",
      "og:site_name",
      "Reflexología Clínica Pro",
    );
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", HERO_IMAGE);
    setMeta("name", "twitter:title", PAGE_TITLE);
    setMeta("name", "twitter:description", PAGE_DESC);
    const ldId = "ld-product-schema";
    if (!document.getElementById(ldId)) {
      const ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      ld.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Sistema Maestro de Reflexología para Profesionales",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "Reflexología Clínica Pro",
        },
        offers: {
          "@type": "Offer",
          price: "19990",
          priceCurrency: "ARS",
          availability: "https://schema.org/InStock",
          url: getCheckoutUrl(),
        },
      });
      document.head.appendChild(ld);
    }
    const faqId = "ld-faq-schema";
    if (!document.getElementById(faqId)) {
      const faq = document.createElement("script");
      faq.id = faqId;
      faq.type = "application/ld+json";
      faq.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            q: "¿Sirve si ya soy terapeuta con años de experiencia?",
            a: "Especialmente para vos. El sistema no empieza desde cero: asume que ya tenés la base técnica y te da los protocolos clínicos, la documentación y las herramientas de posicionamiento que faltaban para subir tu ticket.",
          },
          {
            q: "¿Es contenido técnico o básico?",
            a: "Técnico y aplicado. Cada protocolo incluye anatomía de referencia, secuencia exacta de puntos, técnica de presión y frecuencia de sesión recomendada por patología.",
          },
          {
            q: "¿Necesito comprar equipos o materiales especiales?",
            a: "No. Todo el sistema se aplica con tus manos. No hay inversión en equipos, aparatología ni insumos especiales de ningún tipo.",
          },
          {
            q: "¿Reemplaza la formación médica?",
            a: "No. Este material es educativo y profesional, diseñado como complemento de tu formación existente. No reemplaza el criterio clínico ni la derivación médica cuando corresponde.",
          },
          {
            q: "¿Cómo recibo el material después de comprar?",
            a: "Acceso inmediato por email después del pago. Descarga directa en PDF, lista para tu celular, tablet o computadora en minutos.",
          },
          {
            q: "¿Puedo pedir reembolso?",
            a: "Sí. Garantía incondicional de 7 días. Si no estás satisfecho, te devolvemos el 100% de tu inversión sin preguntas ni formularios.",
          },
        ].map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      });
      document.head.appendChild(faq);
    }
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    // Solo se carga el Meta Pixel real (3505657626270665).
    if (!META_PIXEL_ID) return;
    const loadPixel = () => {
      const w = window as any;
      if (w.fbq) {
        w.fbq("track", "PageView");
        return;
      }
      const n: any = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      w.fbq = n;
      if (!w._fbq) w._fbq = n;
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      const target = document.head || document.body || document.documentElement;
      target.appendChild(script);
      w.fbq("init", META_PIXEL_ID);
      w.fbq("track", "PageView");
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.alt = "";
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      target.appendChild(noscript);
    };
    const ric = (window as any).requestIdleCallback as
      | ((
          cb: () => void,
          opts?: {
            timeout: number;
          },
        ) => number)
      | undefined;
    if (ric) {
      ric(loadPixel, {
        timeout: 4000,
      });
    } else {
      const t = setTimeout(loadPixel, 2500);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Landing />
    </MotionConfig>
  );
}
