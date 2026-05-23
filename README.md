# Reina de Copas Paraguay

Tienda online de copas y discos menstruales. Paraguay.

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

```env
NEXT_PUBLIC_WHATSAPP=595982774456
NEXT_PUBLIC_INSTAGRAM=reinadecopaspy
NEXT_PUBLIC_BASE_URL=https://reina-de-copas-paraguay.com
```

## Deployment

Push a `git push` a `main` — GitHub Actions compila y deploya al VPS automáticamente.

### Secrets requeridos en GitHub

| Secret | Valor |
|--------|-------|
| `NEXT_PUBLIC_WHATSAPP` | 595982774456 |
| `NEXT_PUBLIC_INSTAGRAM` | reinadecopaspy |
| `NEXT_PUBLIC_BASE_URL` | https://reina-de-copas-paraguay.com |
| `VPS_HOST` | 72.61.44.159 |
| `VPS_SSH_KEY` | Clave SSH privada del root |

## VPS

- Puerto: 3133
- Docker Swarm en 72.61.44.159