import { ProductSpec, RoadmapItem } from './types';

// BILDER KONFIGURATION:
export const IMAGES = {
  // Model Bild (High Res)
  HERO_MODEL: "https://drive.google.com/thumbnail?id=1QstZLOhaVo5b8FHHZ62jWk2FG6Pdcw_b&sz=w1920",
  // Produkt Bild (T-Shirt)
  PRODUCT_DETAIL: "https://drive.google.com/thumbnail?id=1ACqpEbTTjQgwYaroRbW5HnFPgpJDqkfo&sz=w1000", 
  // Platzhalter für Stoff-Detail
  TEXTURE_CLOSEUP: "https://picsum.photos/id/355/800/800" 
};

export const LAUNCH_DATE = "2026-04-01T00:00:00";

type ContentData = {
  hero: {
    internalTag: string;
    est: string;
    launchLabel: string;
    materialLabel: string;
    materialValue: string;
  };
  specs: {
    badge: string;
    title: string;
    detailView: string;
    items: ProductSpec[];
  };
  roadmap: {
    badge: string;
    title: string;
    items: RoadmapItem[];
  };
  footer: {
    inquiries: string;
  };
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
};

export const DICTIONARY: Record<'EN' | 'DE', ContentData> = {
  EN: {
    hero: {
      internalTag: "Confidential // Internal Use Only",
      est: "Est. 2026 • Private Collection",
      launchLabel: "Official Launch Date",
      materialLabel: "Material",
      materialValue: "Merino",
    },
    specs: {
      badge: "Specification",
      title: "Tech Pack",
      detailView: "Detail View",
      items: [
        {
          category: "Fabric & Material",
          details: [
            { label: "Composition", value: "Merino Wool + Elastane Blend", description: "Natural performance meets synthetic durability." },
            { label: "Weight", value: "~240 gsm", description: "Mid-weight, perfect for year-round versatility." },
            { label: "Properties", value: "Thermoregulating, Anti-Odor", description: "Premium performance without the synthetic shine." }
          ]
        },
        {
          category: "Construction & Fit",
          details: [
            { label: "Fit Profile", value: "Athletic Tailored", description: "Tapered shoulder/chest. Looser hem from Size L+." },
            { label: "Stitching", value: "Flatlock + Double Needle", description: "Zero-chafe seams for high-movement comfort." },
            { label: "Collar", value: "Mock Neck", description: "Modern, structured silhouette." }
          ]
        },
        {
          category: "Branding",
          details: [
            { label: "Logo Type", value: "Embroidered Wordmark", description: "High-density stitch in White/Silver." },
            { label: "Placement", value: "Mock Neck Collar", description: "Minimalist placement on the neckline." },
            { label: "Color Palette", value: "Navy Blue", description: "Exclusive signature colorway." }
          ]
        }
      ]
    },
    roadmap: {
      badge: "Roadmap",
      title: "The Path to Launch",
      items: [
        { date: "Q4 2025", title: "Concept & Design", description: "Finalizing athletic fit silhouettes and material sourcing.", status: "completed" },
        { date: "Q4 2025", title: "Producer Selection", description: "Reviewing tech packs with potential manufacturing partners.", status: "current" },
        { date: "Q1 2026", title: "Sample Round 1-2", description: "Prototype testing and refinement.", status: "future" },
        { date: "Q1 2026", title: "Website & Marketing", description: "Digital campaign setup and store finalization.", status: "future" },
        { date: "Q1 2026", title: "Bulk Production", description: "Full scale manufacturing run.", status: "future" },
        { date: "01.04.2026", title: "Official Launch", description: "Direct-to-Consumer release (Q2 2026).", status: "future" }
      ]
    },
    footer: {
      inquiries: "Direct Inquiries"
    },
    countdown: {
      days: "Days",
      hours: "Hours",
      minutes: "Mins",
      seconds: "Secs"
    }
  },
  DE: {
    hero: {
      internalTag: "Vertraulich // Nur für interne Zwecke",
      est: "Gegr. 2026 • Private Kollektion",
      launchLabel: "Offizielles Startdatum",
      materialLabel: "Material",
      materialValue: "Merino",
    },
    specs: {
      badge: "Spezifikationen",
      title: "Tech Stack",
      detailView: "Detailansicht",
      items: [
        {
          category: "Stoff & Material",
          details: [
            { label: "Zusammensetzung", value: "Merinowolle + Elasthan-Mix", description: "Natürliche Performance trifft auf synthetische Haltbarkeit." },
            { label: "Gewicht", value: "~240 gsm", description: "Mittelschwer, perfekt für das ganze Jahr." },
            { label: "Eigenschaften", value: "Thermoregulierend, Geruchsneutral", description: "Premium-Performance ohne künstlichen Glanz." }
          ]
        },
        {
          category: "Konstruktion & Passform",
          details: [
            { label: "Passform", value: "Athletic Tailored", description: "Betonte Schulter/Brust. Lockerer Saum ab Größe L+." },
            { label: "Nähte", value: "Flatlock + Doppelnadel", description: "Reibungsfreie Nähte für hohen Komfort bei Bewegung." },
            { label: "Kragen", value: "Mock Neck", description: "Moderne, strukturierte Silhouette." }
          ]
        },
        {
          category: "Branding",
          details: [
            { label: "Logo Typ", value: "Gestickte Wortmarke", description: "High-Density Stickerei in Weiß/Silber." },
            { label: "Platzierung", value: "Mock Neck Kragen", description: "Minimalistische Platzierung am Halsausschnitt." },
            { label: "Farbpalette", value: "Navy Blau", description: "Exklusive Signature-Farbe." }
          ]
        },
      ]
    },
    roadmap: {
      badge: "Roadmap",
      title: "Der Weg zum Launch",
      items: [
        { date: "Q4 2025", title: "Konzept & Design", description: "Finalisierung der sportlichen Schnitte und Materialbeschaffung.", status: "completed" },
        { date: "Q4 2025", title: "Produzentenauswahl", description: "Überprüfung der Tech Packs mit potenziellen Fertigungspartnern.", status: "current" },
        { date: "Q1 2026", title: "Sample Runde 1-2", description: "Prototypentest und Verfeinerung.", status: "future" },
        { date: "Q1 2026", title: "Webseite & Marketing", description: "Digitale Kampagne und Finalisierung des Stores.", status: "future" },
        { date: "Q1 2026", title: "Massenproduktion", description: "Start der Serienfertigung.", status: "future" },
        { date: "01.04.2026", title: "Offizieller Launch", description: "Direct-to-Consumer Veröffentlichung (Q2 2026).", status: "future" }
      ]
    },
    footer: {
      inquiries: "Direkte Anfragen"
    },
    countdown: {
      days: "Tage",
      hours: "Std",
      minutes: "Min",
      seconds: "Sek"
    }
  }
};