# La Palma de Oro - Tienda de Sombreros Artesanales

Una página web completa para la tienda "La Palma de Oro", especializada en la venta de sombreros artesanales.

## 🌐 Demo en Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/la-palma-de-oro)

**URL de la aplicación:** [https://la-palma-de-oro.vercel.app](https://la-palma-de-oro.vercel.app)

## 🎩 Características Principales

### ✨ Diseño y Funcionalidad
- **Diseño Responsivo**: Adaptable a todos los dispositivos (móvil, tablet, desktop)
- **Modo Oscuro/Claro**: Toggle para cambiar entre temas
- **Carrusel Coverflow**: Galería interactiva de sombreros con efecto 3D
- **Animaciones Suaves**: Transiciones y efectos visuales modernos

### 🌍 Multilingüe
- **3 Idiomas**: Español, Inglés y Chino
- **Detección Automática**: Detecta el idioma del navegador
- **Cambio Manual**: Selector de idioma en el header

### 🛒 E-commerce
- **Catálogo de Productos**: 5 sombreros artesanales con descripciones
- **Búsqueda en Tiempo Real**: Filtro de productos por nombre/descripción
- **Carrito de Compras**: Solo para usuarios registrados
- **Sistema de Autenticación**: Registro e inicio de sesión

### 📱 Integración Social
- **WhatsApp**: Botón flotante con mensaje predefinido
- **Redes Sociales**: Enlaces a Facebook, TikTok e Instagram
- **Contacto Directo**: Teléfono y email de contacto

### 💱 Información Financiera
- **Tipos de Cambio**: API en tiempo real (USD/MXN, CNY/MXN)
- **Actualización Automática**: Cada 5 minutos

## 🚀 Instalación y Uso

### Requisitos
- Servidor web (Apache, Nginx, etc.)
- PHP 7.4 o superior
- Navegador web moderno

### Pasos de Instalación

1. **Clonar/Descargar** los archivos en tu servidor web
2. **Configurar permisos** de escritura para el archivo `users.txt`
3. **Abrir** `index.html` en tu navegador

### Estructura de Archivos
```
/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
├── save-users.php      # Backend para guardar usuarios
├── users.txt           # Base de datos de usuarios (se crea automáticamente)
└── README.md           # Este archivo
```

## 🎨 Personalización

### Colores del Tema
Los colores se pueden modificar en las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #d4af37;    /* Dorado principal */
    --secondary-color: #8b4513;  /* Marrón */
    --accent-color: #ffd700;     /* Dorado claro */
}
```

### Productos
Para agregar más productos, edita el array `products` en `script.js`:
```javascript
const products = [
    {
        id: 6,
        name: 'Nuevo Sombrero',
        nameEn: 'New Hat',
        nameZh: '新帽子',
        description: 'Descripción en español',
        descriptionEn: 'Description in English',
        descriptionZh: '中文描述',
        price: 2000,
        image: 'URL_de_imagen',
        category: 'categoria'
    }
];
```

### Traducciones
Para agregar nuevos idiomas o modificar traducciones, edita el objeto `translations` en `script.js`.

## 🔧 Funcionalidades Técnicas

### Autenticación
- Los usuarios se guardan en `users.txt` en formato JSON
- Contraseñas se almacenan en texto plano (para desarrollo)
- Sesiones persisten con localStorage

### Carrito de Compras
- Solo usuarios registrados pueden comprar
- Carrito se guarda en localStorage
- Cantidades editables con botones +/-

### APIs Externas
- **Exchange Rate API**: Para tipos de cambio en tiempo real
- **Unsplash**: Para imágenes de sombreros (placeholder)

### Responsive Design
- Breakpoints: 768px (tablet), 480px (móvil)
- Grid layouts adaptativos
- Navegación colapsable en móviles

## 📞 Contacto

- **Teléfono**: +52 756 122 3464
- **Email**: contacto@lapalmadeoro.com
- **WhatsApp**: [Enlace directo con mensaje predefinido]

## 🎯 Características Destacadas

### Carrusel Coverflow
- Efecto 3D con perspectiva
- Navegación con botones y clics
- Auto-play cada 4 segundos
- Imágenes centrales más grandes

### Modo Oscuro
- Toggle en el header
- Variables CSS para fácil personalización
- Persistencia con localStorage
- Iconos que cambian dinámicamente

### Búsqueda Inteligente
- Filtrado en tiempo real
- Búsqueda por nombre y descripción
- Funciona en todos los idiomas

### Notificaciones
- Sistema de notificaciones toast
- Diferentes tipos: info, success, error
- Animaciones de entrada/salida
- Auto-dismiss después de 3 segundos

## 🔒 Seguridad

- Validación de formularios en frontend
- Sanitización de datos de entrada
- Headers CORS configurados
- Validación de métodos HTTP

## 🌟 Próximas Mejoras

- [ ] Integración con pasarela de pagos
- [ ] Panel de administración
- [ ] Sistema de reviews
- [ ] Wishlist de productos
- [ ] Notificaciones push
- [ ] PWA (Progressive Web App)

---

**© 2025 La Palma de Oro. Todos los derechos reservados.**