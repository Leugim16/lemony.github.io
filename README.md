# La Sabiduría de RAID — sitio estático

Una enciclopedia de fans en español para RAID: Shadow Legends, diseñada para publicarse gratis con GitHub Pages. No requiere servidor propio ni un PC encendido.

## Archivos
- `index.html`: portada, buscador y catálogo.
- `assets/style.css`: estilos oscuros de fantasía.
- `assets/app.js`: datos de ejemplo, búsqueda y filtros.
- `campeones/*.html`: páginas de ejemplo para editar y compartir.

## Publicar gratis con GitHub Pages
1. Crea o inicia sesión en https://github.com/
2. Crea un repositorio nuevo. Para una URL sencilla, llámalo `tuusuario.github.io` (reemplaza `tuusuario` por tu nombre de usuario de GitHub).
3. Sube todos los archivos y carpetas de esta carpeta al nivel principal del repositorio. Debes ver `index.html` en la raíz, no dentro de otra carpeta.
4. En el repositorio, entra en **Settings → Pages**.
5. En **Build and deployment**, elige **Deploy from a branch**.
6. Selecciona la rama `main` y la carpeta `/(root)`, y pulsa **Save**.
7. Espera a que termine la publicación. La dirección será `https://tuusuario.github.io/`.
   - Si el repositorio tiene otro nombre, la URL normalmente será `https://tuusuario.github.io/nombre-del-repositorio/`.
8. Abre el enlace en el navegador y prueba el buscador y los enlaces a los campeones.

## Cómo editar y añadir campeones
1. Duplica un archivo de `campeones/`, por ejemplo `kael.html`, y cambia su nombre, por ejemplo `señor-de-los-no-muertos.html` (mejor usa minúsculas, sin espacios ni tildes).
2. Edita el título, descripción, función, contenido, sets, estadísticas, maestrías, bendición y notas en la página duplicada.
3. Abre `assets/app.js` y añade un objeto al array `champions`, siguiendo el formato de los ejemplos. `href` debe coincidir exactamente con la ruta del HTML.
4. Guarda y sube los cambios a GitHub. Pages volverá a publicar la web automáticamente.
5. Comparte en Discord la URL de la ficha, por ejemplo `https://tuusuario.github.io/campeones/kael.html` para un repositorio de usuario. Si el repositorio tiene nombre propio, incluye ese nombre en la ruta.

## Importante
- Los campeones incluidos son ejemplos para demostrar el diseño. El contenido de las builds es una plantilla y no debe tratarse como recomendación definitiva.
- No se incluyen imágenes oficiales de campeones. Puedes añadir imágenes que tengas permiso para usar y respeten las condiciones del titular. Revisa las licencias antes de publicar recursos.
- El proyecto usa Google Fonts como mejora visual; si no se cargan, se usarán fuentes alternativas del sistema.
- Es un proyecto de fans no oficial, no afiliado ni respaldado por Plarium.
- No guardes contraseñas, tokens ni datos privados en un repositorio público.
