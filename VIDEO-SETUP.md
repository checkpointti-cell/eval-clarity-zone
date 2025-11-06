# Instrucciones para Ejecutar la Aplicación con Video

## 🎯 Problema Resuelto:
Se solucionó el problema donde el video aparecía como "Video no disponible" y la descarga solo pesaba 1KB.

## 🚀 Nueva Solución: Servidor Dedicado para Video

### Pasos para ejecutar la aplicación completa:

#### Opción 1: Ejecutar todo automáticamente (Recomendado)
```bash
npm run dev:full
```
Esto ejecuta tanto el servidor de video como la aplicación web simultáneamente.

#### Opción 2: Ejecutar manualmente (para debugging)
1. **Terminal 1 - Servidor de Video:**
   ```bash
   npm run video-server
   ```
   Debe mostrar: `Servidor de video ejecutándose en http://localhost:3001`

2. **Terminal 2 - Aplicación Web:**
   ```bash
   npm run dev
   ```
   Debe mostrar: `Local: http://localhost:8080/`

### 🔧 Qué hace la nueva solución:

1. **Servidor de Video Dedicado (Puerto 3001):**
   - Maneja archivos de video grandes (310+ MB)
   - Soporte para streaming con Range requests
   - Descarga optimizada del video completo

2. **Aplicación Web (Puerto 8080):**
   - Interfaz de usuario principal
   - Automáticamente detecta si el servidor de video está disponible
   - Fallback a servir el video desde Vite si es necesario

### 📁 Estructura de archivos necesaria:
```
eval-clarity-zone/
├── public/
│   ├── evaluacion-desempeno.mp4  ✅ (tu video - 310MB)
│   └── logo-empresa.svg          ✅ (tu logo)
├── video-server.js               ✅ (servidor dedicado)
└── ...
```

### ✅ Verificación de funcionamiento:

1. **Video se reproduce correctamente:** ✅
2. **Descarga funciona (archivo completo):** ✅  
3. **Logo aparece en header:** ✅
4. **Navegación entre páginas:** ✅

### 🐛 Resolución de problemas:

#### Si el video sigue sin funcionar:
1. Verifica que ambos servidores estén ejecutándose
2. Abre http://localhost:3001/evaluacion-desempeno.mp4 directamente
3. Revisa la consola del navegador para errores

#### Si la descarga sigue siendo 1KB:
1. Ejecuta `npm run video-server` por separado
2. Verifica que el archivo `public/evaluacion-desempeno.mp4` existe
3. Prueba la descarga desde http://localhost:3001/evaluacion-desempeno.mp4

### 📊 Especificaciones técnicas:
- **Video:** Streaming HTTP con Range requests
- **Tamaño:** ~310MB manejado correctamente
- **Formatos:** MP4 con codecs estándar
- **Compatibilidad:** Todos los navegadores modernos
- **Descarga:** Archivo completo, no truncado

### 🎬 URLs importantes:
- **Aplicación:** http://localhost:8080/
- **Video directo:** http://localhost:3001/evaluacion-desempeno.mp4
- **Página de video:** http://localhost:8080/video

## 🔄 Para usar en producción:
1. Configurar ambos servidores en el hosting
2. Actualizar URLs en el código de producción
3. Asegurar que ambos puertos estén disponibles