// Skin analysis data types
export interface SkinAnalysis {
  scanDate: string;
  scanQuality: string;
  confidence: string;
  skinType: {
    value: string;
    percentage: number;
    description: string;
  };
  acneConcerns: {
    value: string;
    percentage: number;
    description: string;
  };
  hyperpigmentation: {
    value: string;
    percentage: number;
    description: string;
  };
  hydrationLevel: {
    value: string;
    percentage: number;
    description: string;
  };
  fineLines: {
    value: string;
    percentage: number;
    description: string;
  };
}

// Product data types
export interface Product {
  id: number;
  name: string;
  tag: string;
  description: string;
  price: string;
  imageUrl: string;
}

// Journal entry data types
export interface JournalEntry {
  id: number;
  date: string;
  mood: 'sad' | 'neutral' | 'happy' | 'amazing';
  notes: string;
  photoUrl?: string;
}

// Example skin analysis data for demonstration
export const skinAnalysisData: SkinAnalysis = {
  scanDate: "July 15, 2023",
  scanQuality: "Excellent",
  confidence: "High (98%)",
  skinType: {
    value: "Combination",
    percentage: 65,
    description: "Your T-zone shows increased oil production, while cheeks tend to be normal to dry."
  },
  acneConcerns: {
    value: "Mild",
    percentage: 30,
    description: "Few inflammatory spots detected, primarily in the chin and forehead areas."
  },
  hyperpigmentation: {
    value: "Moderate",
    percentage: 45,
    description: "Post-inflammatory marks and some sun damage detected, especially on cheeks."
  },
  hydrationLevel: {
    value: "Low to Moderate",
    percentage: 35,
    description: "Signs of dehydration detected. Your skin would benefit from increased hydration."
  },
  fineLines: {
    value: "Minor",
    percentage: 25,
    description: "Some fine lines around eyes. Overall skin texture is good."
  }
};

// Example product data for demonstration
export const productsData: Product[] = [
  {
    id: 1,
    name: "Gentle Foaming Cleanser",
    tag: "Recommended",
    description: "A pH-balanced cleanser that removes impurities without stripping your skin's natural oils.",
    price: "$24.99",
    imageUrl: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    id: 2,
    name: "Hydrating Hyaluronic Serum",
    tag: "Best Seller",
    description: "Deeply hydrates with multi-weight hyaluronic acid molecules for plump, dewy skin.",
    price: "$36.50",
    imageUrl: "https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    id: 3,
    name: "Brightening Vitamin C Serum",
    tag: "Recommended",
    description: "Stabilized 15% vitamin C to target hyperpigmentation and boost radiance.",
    price: "$44.00",
    imageUrl: "https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    id: 4,
    name: "Oil-Free Moisturizer",
    tag: "Popular",
    description: "Light, non-comedogenic formula that balances and hydrates combination skin.",
    price: "$28.00",
    imageUrl: "https://pixabay.com/get/g7a092ee760794e6e2ef03d8725c338cb43d82417aa776c72a540e714987c17ad2d6d2ba4e821a41e37aa4ddcacce6648a3d3290f9d2603df658426b8c24898b8_1280.jpg"
  },
  {
    id: 5,
    name: "BHA Exfoliating Toner",
    tag: "Recommended",
    description: "2% salicylic acid toner that unclogs pores and helps prevent breakouts.",
    price: "$32.00",
    imageUrl: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
  },
  {
    id: 6,
    name: "Mineral Sunscreen SPF 50",
    tag: "Essential",
    description: "Lightweight zinc oxide protection that doesn't leave a white cast.",
    price: "$26.00",
    imageUrl: "https://images.unsplash.com/photo-1607602132700-068258431c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=300&q=80"
  }
];

// Example journal entry data for demonstration
export const journalEntriesData: JournalEntry[] = [
  {
    id: 1,
    date: "July 10, 2023",
    mood: "happy",
    notes: "My skin is less dry after using the hyaluronic serum for a week. Also noticing fewer breakouts on my chin area. The vitamin C serum seemed to cause a slight tingling but no redness."
  },
  {
    id: 2,
    date: "July 5, 2023",
    mood: "neutral",
    notes: "Started using the new products today. Skin feels clean after the cleanser but slightly tight. Moisturizer absorbed quickly. No immediate changes yet."
  }
];

// Key insights data
export const keyInsights = [
  "Focus on improving skin hydration with products containing hyaluronic acid",
  "Use gentle chemical exfoliants (BHA) for acne-prone areas",
  "Include vitamin C to address hyperpigmentation and boost collagen",
  "Maintain consistent SPF use to prevent further sun damage"
];

// Skin tips data
export const skinTips = [
  "Consistency is key - stick to your routine for at least 4-6 weeks to see results",
  "Take photos in the same lighting each week to better track your progress",
  "Note any diet, stress, or environmental factors that might affect your skin"
];
