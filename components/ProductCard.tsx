'use client'

import Link from 'next/link'
import type { Product } from '@/lib/products'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('es-PY', {
    style: 'currency',
    currency: 'PYG',
    minimumFractionDigits: 0,
  }).format(product.price)

  return (
    <Link href={`/producto/${product.sku}`}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div
          style={{
            aspectRatio: '1',
            background: '#fce4ec',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '3rem',
            color: 'var(--primary)',
          }}
        >
          🩸
        </div>
        <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: 'var(--primary)',
              background: '#fce4ec',
              padding: '4px 10px',
              borderRadius: '20px',
              alignSelf: 'flex-start',
              marginBottom: 8,
            }}
          >
            {product.category}
          </span>
          <h3 style={{ fontSize: '1.1rem', marginBottom: 8, color: 'var(--heading)' }}>
            {product.name}
          </h3>
          <p
            style={{
              color: 'var(--accent)',
              fontSize: '1.25rem',
              fontWeight: 700,
              marginTop: 'auto',
            }}
          >
            {formattedPrice}
          </p>
        </div>
      </div>
    </Link>
  )
}
