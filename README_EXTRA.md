Extras añadidos al ZIP original
===============================

Archivos creados en este paquete adicional:
- styles.zara.css  -> hoja de estilo premium (Zara-like). Importa las tipografías Google Fonts.
- payments_server_example.js -> ejemplo de servidor Node/Express para crear PaymentIntents con Stripe.
- payments_client_example.js -> snippet frontend para usar Stripe.js.
- admin-dashboard.js -> snippet que usa Chart.js para mostrar ventas y métricas.
- gallery.js -> manejador simple para múltiples imágenes (lightbox básico).
- products_extended.json -> ejemplo de estructura de productos con múltiples imágenes y variantes (talla/color) e inventario.
- README_EXTRA.md -> este archivo.

Resumen rápido de cómo integrar:
1) Diseño: sustituye o importa styles.zara.css en tu index.html (por ejemplo <link rel="stylesheet" href="styles.zara.css">).
2) Galerías: actualiza products.json con la estructura del products_extended.json; modifica app.js para leer product.images[] y renderizar thumbs y main. Usa gallery.js para inicializar.
3) Inventario: cada vez que añadas al carrito, pasa size+color para comprobar el stock disponible en variants[].
4) Pagos: ejecuta payments_server_example.js en un servidor seguro (NODE_ENV). Añade STRIPE secret key en variable de entorno y usa payments_client_example.js en frontend. Nunca expongas la secret key en frontend.
5) APK: como tu app es PWA (manifest.json + service-worker.js incluidos), puedes usar PWABuilder (https://pwabuilder.com) o Capacitor to build an APK. Instrucciones rápidas se incluyen abajo.

Instrucciones rápidas para convertir PWA -> APK (Capacitor):
- Instala Capacitor: npm install @capacitor/cli @capacitor/core
- npx cap init myapp com.example.myapp
- Copia los archivos web (index.html, assets, manifest) a la carpeta web de Capacitor (o configura build).
- npx cap add android
- npx cap open android -> abrir Android Studio, firmar y generar APK.

Notas de seguridad y recomendaciones:
- Para pagos en producción, usa HTTPS y un backend seguro; valida cantidad/orden en el servidor.
- Para administración, protege admin_*.html con autenticación (JWT/session).
- Pruebas: testea el flujo de compra, y el manejo de inventario cuando inventory=0.