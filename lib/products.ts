export interface Product {
  sku: string;
  name: string;
  category: 'Copa Menstrual' | 'Disco Menstrual' | 'Adicionales';
  price: number;
  description: string;
  features: string[];
  sizes: string[];
  images: string[];
  materials?: string;
  benefits?: string;
  howToUse?: string;
  faq?: { question: string; answer: string }[];
}

const products: Product[] = [
  {
    sku: 'COPA-001',
    name: 'Copa Menstrual Reina de Copas – Talla P/Regular',
    category: 'Copa Menstrual',
    price: 85000,
    description:
      'Copa menstrual diseñada para flujo ligero a moderado. Ideal para quienes inician en el uso de copa o tienen un cuello uterino bajo.',
    features: [
      'Capacidad: 20 ml',
      'Diámetro: 40 mm',
      'Largo total: 65 mm',
      'Vástago: recto con base de agarre',
      'Material: Silicona médica hipoalergénica',
      'Color: Transparente/ Rosa',
    ],
    sizes: ['P/Regular'],
    images: [
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-copa.jpg',
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-copa-2.jpg',
    ],
    materials: 'Silicona médica grado biocompatible, libre de BPA, látex y fragancias.',
    benefits:
      'Hasta 12 horas de protección, ecológica, económica, discreta y reutilizable por hasta 5 años.',
    howToUse:
      'Lávate las manos, dobla la copa en forma de "C", insértala y gírala para que se abra. Para retirar, presiona la base para liberar el sello.',
    faq: [
      {
        question: '¿Cada cuánto debo vaciar la copa?',
        answer: 'Depende de tu flujo, pero en general cada 8-12 horas.',
      },
      {
        question: '¿Puedo usarla de noche?',
        answer: 'Sí, la copa menstrual es segura para uso nocturno hasta 12 horas.',
      },
    ],
  },
  {
    sku: 'COPA-002',
    name: 'Copa Menstrual Reina de Copas – Talla M',
    category: 'Copa Menstrual',
    price: 95000,
    description:
      'Copa menstrual de capacidad media, ideal para flujo moderado a abundante. Recomendada para quienes ya han tenido partos vaginales.',
    features: [
      'Capacidad: 25 ml',
      'Diámetro: 44 mm',
      'Largo total: 68 mm',
      'Vástago: anillo de agarre',
      'Material: Silicona médica hipoalergénica',
      'Color: Transparente/ Rosa',
    ],
    sizes: ['M'],
    images: [
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-copa.jpg',
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-copa-2.jpg',
    ],
    materials: 'Silicona médica grado biocompatible.',
    benefits:
      'Protección segura por hasta 12 horas, ideal para flujo abundante, reutilizable.',
    howToUse:
      'Dobla, inserta y gira. Asegúrate de que se abra completamente para evitar fugas.',
    faq: [
      {
        question: '¿Cómo sé si la talla M es la correcta?',
        answer: 'Si has tenido partos vaginales o tienes flujo abundante, la talla M suele ser la ideal.',
      },
    ],
  },
  {
    sku: 'COPA-003',
    name: 'Copa Menstrual Reina de Copas – Talla L',
    category: 'Copa Menstrual',
    price: 105000,
    description:
      'Copa menstrual de gran capacidad. Perfecta para flujo muy abundante o para quienes prefieren mayor capacidad sin cambiar con tanta frecuencia.',
    features: [
      'Capacidad: 30 ml',
      'Diámetro: 46 mm',
      'Largo total: 70 mm',
      'Vástago: anillo de agarre',
      'Material: Silicona médica hipoalergénica',
      'Color: Transparente/ Rosa',
    ],
    sizes: ['L'],
    images: [
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-copa.jpg',
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-copa-2.jpg',
    ],
    materials: 'Silicona médica grado biocompatible.',
    benefits:
      'Ideal para flujo abundante o nocturno, hasta 12 horas de protección.',
    howToUse: 'Dobla en "C", inserta y gira para abrir.',
  },
  {
    sku: 'DISCO-001',
    name: 'Disco Menstrual Reina de Copas – Talla Única',
    category: 'Disco Menstrual',
    price: 110000,
    description:
      'Disco menstrual de silicona suave. Se coloca en el fondo de la vagina, detrás del cuello uterino, permitiendo mantener relaciones sexuales durante el período.',
    features: [
      'Capacidad: 40 ml',
      'Diámetro: 65 mm',
      'Material: Silicona médica',
      'Reutilizable por hasta 2 años',
      'Diseño de aro flexible',
      'Color: Transparente',
    ],
    sizes: ['Única'],
    images: [
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-disco.jpg',
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-disco-2.jpg',
    ],
    materials: 'Silicona médica biocompatible.',
    benefits:
      'Permite relaciones sexuales durante el período, mayor capacidad que una copa, auto-vaciado al ir al baño.',
    howToUse:
      'Presiona el aro, insértalo empujándolo hacia la parte más ancha de la vagina, asegurándote de que quede detrás del hueso púbico.',
    faq: [
      {
        question: '¿Puedo usar el disco menstrual para relaciones sexuales?',
        answer: 'Sí, el disco menstrual está diseñado para usarse durante las relaciones sexuales.',
      },
    ],
  },
  {
    sku: 'DISCO-002',
    name: 'Disco Menstrual Reina de Copas – Talla Pequeña',
    category: 'Disco Menstrual',
    price: 120000,
    description:
      'Disco menstrual de tamaño pequeño, ideal para quienes tienen cuello uterino bajo o prefieren un disco más pequeño y discreto.',
    features: [
      'Capacidad: 35 ml',
      'Diámetro: 60 mm',
      'Material: Silicona médica',
      'Reutilizable por hasta 2 años',
      'Diseño de aro flexible',
      'Color: Transparente',
    ],
    sizes: ['Pequeña'],
    images: [
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-disco.jpg',
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-disco-2.jpg',
    ],
    materials: 'Silicona médica biocompatible.',
    benefits:
      'Perfecto para cuellos uterinos bajos, permite relaciones sexuales, auto-vaciado.',
    howToUse:
      'Comprime el aro, inserta y empuja hacia la parte más ancha de la vagina.',
  },
  {
    sku: 'ACC-001',
    name: 'Esterilizador para Copas Menstruales – Vapo',
    category: 'Adicionales',
    price: 95000,
    description:
      'Esterilizador portátil de vapor para copas y discos menstruales. Elimina el 99.9% de las bacterias en solo 3 minutos.',
    features: [
      'Esterilización por vapor en 3 minutos',
      'Portátil y liviano',
      'Funciona con USB',
      'Capacidad para una copa o disco',
      'Apagado automático',
    ],
    sizes: ['Único'],
    images: [
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-esterilizador.jpg',
    ],
  },
  {
    sku: 'ACC-002',
    name: 'Jabón Íntimo Específico para Copas Menstruales',
    category: 'Adicionales',
    price: 35000,
    description:
      'Jabón líquido especialmente formulado para la limpieza de copas y discos menstruales. pH balanceado, sin fragancias agresivas.',
    features: [
      'pH balanceado',
      'Sin fragancias agresivas',
      'Formulado para silicona médica',
      'Contenido: 100 ml',
      'Uso diario',
    ],
    sizes: ['100 ml'],
    images: [
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-jabon.jpg',
    ],
  },
  {
    sku: 'ACC-003',
    name: 'Bolsa de Almacenamiento para Copa Menstrual',
    category: 'Adicionales',
    price: 25000,
    description:
      'Bolsa de tela de algodón orgánico para almacenar tu copa o disco menstrual entre usos. Transpirable y discreta.',
    features: [
      'Material: Algodón orgánico',
      'Transpirable',
      'Lavable',
      'Cierre con cordón',
      'Discreta y portátil',
    ],
    sizes: ['Único'],
    images: [
      'https://d2me19eryazmrx.cloudfront.net/reina-de-copas/placeholder-bolsa.jpg',
    ],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  // Match by sku or by index (0-7)
  const product = products.find(
    (p) => p.sku === id || products.indexOf(p).toString() === id
  );
  if (product) return product;
  const index = parseInt(id, 10);
  if (!isNaN(index) && index >= 0 && index < products.length) {
    return products[index];
  }
  return undefined;
}

export function getProductsByCategory(
  cat: 'Copa Menstrual' | 'Disco Menstrual' | 'Adicionales'
): Product[] {
  return products.filter((p) => p.category === cat);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 4);
}
