# Plomería Total — Checklist post-entrega

## Datos del cliente
- **Dominio:** plomeriatotalba.com.ar
- **Ciudad:** Buenos Aires, CABA
- **WhatsApp:** 5491155555035
- **Email:** info@plomeriatotalba.com.ar
- **Formspree ID:** movnpobb
- **Generado:** 2026-07-13

## ✅ Checklist antes de publicar
- [ ] Reemplazar img/WHATSAPP-FLOTANTE.webp con el ícono real
- [ ] Confirmar email Formspree del cliente (revisar SPAM)
- [ ] Verificar Schema en search.google.com/test/rich-results
- [ ] Probar formulario enviando mensaje real
- [ ] Probar botón WA flotante en mobile
- [ ] Correr Lighthouse — Performance ≥85, SEO ≥90, Accessibility ≥90
- [ ] Subir a GitHub Pages
- [ ] Configurar dominio en Cloudflare
- [ ] Verificar SSL activo (https://)
- [ ] (Si tiene video) Activar "Permitir embeber" en YouTube Studio

## 🚀 Publicación
```
git init
git add .
git commit -m "Sitio Plomería Total — JF Servicios Web"
git branch -M main
git remote add origin https://github.com/[usuario]/plomeria-total.git
git push -u origin main
```
