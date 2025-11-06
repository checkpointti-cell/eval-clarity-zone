# Instrucciones para Subir el Video

## Pasos para agregar el video de evaluación de desempeño:

### 1. Preparar el archivo de video
- El video debe estar en formato MP4
- Tamaño recomendado: máximo 100MB para mejor rendimiento
- Resolución recomendada: 1080p (1920x1080) o 720p (1280x720)

### 2. Ubicación del archivo
- Coloca el archivo de video en la carpeta `public/` del proyecto
- Renombra el archivo a: `evaluacion-desempeno.mp4`
- Ruta completa: `public/evaluacion-desempeno.mp4`

### 3. Reemplazar el logo (Opcional)
- Coloca el logo de tu empresa en la carpeta `public/`
- Formatos soportados: PNG, JPG, SVG
- Renombra el archivo a: `logo-empresa.png` (o .jpg/.svg según el formato)
- Tamaño recomendado: 200x80 píxeles o proporción similar

### 4. Estructura de archivos final:
```
public/
├── evaluacion-desempeno.mp4  (tu video)
├── logo-empresa.png          (tu logo)
├── favicon.ico
└── robots.txt
```

### 5. Funcionalidades implementadas:
- ✅ Video incrustado directamente en la web
- ✅ Logo en la parte superior izquierda
- ✅ Botón de descarga del video
- ✅ Reproductor de video HTML5 nativo
- ✅ Responsive design para móviles y escritorio

### 6. Después de subir los archivos:
1. Ejecuta `npm run dev` para probar localmente
2. Verifica que el video se reproduce correctamente
3. Verifica que el logo aparece en el header
4. Prueba la funcionalidad de descarga

### Notas importantes:
- Si el video es muy grande, considera comprimirlo para mejorar los tiempos de carga
- El reproductor tiene controles nativos (play, pause, volumen, pantalla completa)
- El video se puede descargar haciendo clic en el botón "Descargar"
- Si no hay logo, aparecerá un placeholder con el texto "Mi Empresa"