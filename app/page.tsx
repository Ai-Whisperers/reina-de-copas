import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/lib/products'

export default function HomePage() {
  const featured = getFeaturedProducts()

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: 'var(--banner)',
          padding: '64px 0',
          textAlign: 'center',
        } as React.CSSProperties}
      >
        <div className="container">
          <h1
            style={{
              fontSize: '2.5rem',
              color: 'var(--heading)',
              marginBottom: 16,
              maxWidth: 700,
              margin: '0 auto 16px',
            }}
          >
            Copas y Discos Menstruales en Paraguay
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: 'var(--text-light)',
              marginBottom: 32,
              maxWidth: 500,
              margin: '0 auto 32px',
            }}
          >
            Alternativa ecológica, económica y segura para vos
          </p>
          <Link href="/tienda">
            <button className="btn-primary" style={{ fontSize: '1.1rem', padding: '14px 36px' }}>
              Ver Tienda
            </button>
          </Link>
        </div>
      </section>

      {/* Features Bar */}
      <section style={{ padding: '48px 0', background: '#f8f8f8' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 32,
              textAlign: 'center',
            }}
          >
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>🚚</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 4 }}>Envíos en Asunción</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                Delivery al día siguiente
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>💳</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 4 }}>Pagos flexibles</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                Transferencia, Tigo Money, Efectivo
              </p>
            </div>
            <div>
              <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>📱</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: 4 }}>@reinadecopaspy</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>
                Seguinos en Instagram
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <h2
            style={{
              textAlign: 'center',
              marginBottom: 40,
              color: 'var(--heading)',
            }}
          >
            Productos destacados
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {featured.map((product) => (
              <ProductCard key={product.sku} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{ padding: '48px 0', background: '#f8f8f8' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 48,
              flexWrap: 'wrap',
              textAlign: 'center',
            }}
          >
            <div>
              <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
                +1750
              </p>
              <p style={{ color: 'var(--text-light)' }}>copas vendidas</p>
            </div>
            <div>
              <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
                Desde 2018
              </p>
              <p style={{ color: 'var(--text-light)' }}>en Paraguay</p>
            </div>
            <div>
              <p style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--primary)' }}>
                📦
              </p>
              <p style={{ color: 'var(--text-light)' }}>Envío discreto</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section
        style={{
          padding: '64px 0',
          background: 'var(--primary)',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: 16, fontSize: '1.75rem' }}>
            Síguenos en Instagram @reinadecopaspy
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 24,
              fontSize: '1.1rem',
            }}
          >
            Descubrí tips, testimonios y novedades
          </p>
          <a
            href="https://instagram.com/reinadecopaspy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn-primary"
              style={{
                background: 'white',
                color: 'var(--heading)',
                fontSize: '1.1rem',
                padding: '14px 36px',
              }}
            >
              📱 Seguir en Instagram
            </button>
          </a>
        </div>
      </section>
    </>
  )
}
