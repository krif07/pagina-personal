# Cristian Dávila – Portfolio (TAE-Dev)

Sitio web de portafolio personal de **Cristian Dávila**, Test Automation Engineer & Backend Developer con más de 11 años de experiencia. Presenta proyectos reales, experiencia profesional, habilidades técnicas y un formulario de contacto funcional.

## Demo

> Abrí `index.html` directamente en el navegador o desplegá en GitHub Pages / Netlify.

---

## Características

- **Bilingüe (ES / EN):** toggle en el navbar cambia todo el contenido de la página al instante. La preferencia se guarda en `localStorage`.
- **Sección de Proyectos con filtros:** filtrá por Automatización, Backend o Web sin recargar la página.
- **Formulario de contacto funcional** vía [EmailJS](https://emailjs.com) — sin backend, sin servidor.
- **Descarga de CV** en PDF desde el hero y desde la sección de contacto.
- **Diseño responsive** — adaptado a móvil, tablet y desktop.
- **Animaciones de scroll** usando Intersection Observer.
- **Navbar fija** con efecto blur y scroll shadow.

---

## Estructura del proyecto

```
pagina-personal/
├── index.html               # Estructura HTML principal
├── styles.css               # Estilos globales y responsive
├── script.js                # Lógica: i18n, filtros, formulario, animaciones
├── assets/
│   └── images/
│       ├── perfil.png       # Foto de perfil (hero)
│       └── CV - TAE-Dev.pdf # CV descargable
└── README.md
```

---

## Tecnologías

| Categoría | Tecnología |
|-----------|-----------|
| Estructura | HTML5 semántico |
| Estilos | CSS3 (variables, grid, flexbox, animaciones) |
| Lógica | JavaScript vanilla (ES6+) |
| Iconos | [Font Awesome 6](https://fontawesome.com) |
| Tipografías | [Google Fonts](https://fonts.google.com) — Outfit + Roboto Mono |
| Formulario | [EmailJS](https://emailjs.com) |

---

## Secciones

| Sección | Descripción |
|---------|-------------|
| **Hero** | Presentación, foto de perfil, botones CTA y descarga de CV |
| **Acerca de** | Resumen profesional y pilares de valor |
| **Habilidades** | Grid de categorías: IA, Automatización, Backend, DevOps |
| **Experiencia** | Timeline con 7 posiciones (2011 – presente) |
| **Educación** | Ingeniería de Sistemas – UTP |
| **Proyectos** | 8 proyectos reales con filtros por categoría |
| **Contacto** | Formulario funcional + links a LinkedIn y GitHub |

---

## Configuración del formulario de contacto (EmailJS)

El formulario envía emails directamente desde el navegador usando [EmailJS](https://emailjs.com). Para activarlo:

### 1. Crear cuenta y conectar Gmail

1. Registrarse en [emailjs.com](https://emailjs.com) (plan gratuito, 200 emails/mes)
2. Ir a **Email Services → Add Service → Gmail**
3. Conectar la cuenta `krif07@gmail.com`
4. Copiar el **Service ID** generado

### 2. Crear el template

1. Ir a **Email Templates → Create New Template**
2. Configurar:
   - **To:** `krif07@gmail.com`
   - **Subject:** `Nuevo mensaje de {{from_name}}`
   - **Body:**
     ```
     Nombre:  {{from_name}}
     Email:   {{from_email}}

     {{message}}
     ```
3. Guardar y copiar el **Template ID**

### 3. Actualizar `script.js`

Reemplazar las tres constantes al inicio del archivo:

```js
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // Account → API Keys
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // Email Services
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // Email Templates
```

---

## Internacionalización (i18n)

El sistema de traducción está implementado en `script.js` sin librerías externas.

- Cada elemento traducible tiene el atributo `data-i18n="clave"` en el HTML
- Los inputs con placeholder usan `data-i18n-placeholder="clave"`
- El objeto `translations` en `script.js` contiene las versiones `es` y `en`
- La función `setLanguage(lang)` aplica las traducciones y persiste la preferencia en `localStorage`

Para agregar un nuevo texto traducible:

```html
<!-- HTML -->
<p data-i18n="mi.clave">Texto en español</p>
```

```js
// script.js → objeto translations
es: { 'mi.clave': 'Texto en español' },
en: { 'mi.clave': 'Text in English'  }
```

---

## Personalización

### Cambiar foto de perfil
Reemplazar `assets/images/perfil.png` con la nueva imagen. El tamaño recomendado es **500×500px** o mayor (cuadrada).

### Cambiar o actualizar el CV
Reemplazar `assets/images/CV - TAE-Dev.pdf`. El nombre del archivo debe coincidir con el `href` en los botones de descarga del `index.html`.

### Agregar un nuevo proyecto
En `index.html`, dentro de `<div class="projects-grid">`, copiar un bloque `.project-card` existente y:
1. Cambiar `data-category` a `automatizacion`, `backend` o `web`
2. Agregar las claves de traducción en `script.js`

---

## Despliegue

### GitHub Pages

```bash
git add .
git commit -m "deploy"
git push origin main
```

Luego en el repositorio: **Settings → Pages → Source: main / root**.

### Netlify

Arrastrar la carpeta del proyecto al dashboard de [Netlify](https://netlify.com). No requiere configuración adicional.

---

## Autor

**Cristian Dávila**
- LinkedIn: [linkedin.com/in/cfdl](https://www.linkedin.com/in/cfdl/)
- GitHub: [github.com/krif07](https://github.com/krif07)
