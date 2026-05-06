# 🌍 FantasyBox Internationalization Guide

## Overview

FantasyBox ahora soporta **inglés (EN)** y **español (ES)** con un sistema completo de internacionalización basado en **i18next** y **react-i18next**.

## 🚀 Quick Start

### Para Usuarios
El selector de idioma está ubicado en la **esquina superior derecha** del navegador. Haz clic para cambiar entre English/Español.

Tu selección se guarda automáticamente y será recordada en futuras visitas.

### Para Desarrolladores

#### Usar Traducción en un Componente
```
typescript
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t } = useTranslation('namespace'); // 'hero', 'products', 'faq', etc.
  
  return (
    <div>
      <h1>{t('key.subkey')}</h1>
      <p>{t('another.key')}</p>
    </div>
  );
}
```

#### Ejemplos Reales

**Hero Section:**
```
typescript
const { t } = useTranslation('hero');
return <h1>{t('title')}</h1>; // Muestra "FantasyBox" o "FantasyBox" según idioma
```

**FAQ Section:**
```
typescript
const { t } = useTranslation('faq');
return <p>{t('questions.one.q')}</p>; // Muestra la pregunta en el idioma actual
```

**Common Buttons:**
```
typescript
const { t } = useTranslation('common');
return <button>{t('buttonRequest')}</button>;
```

## 📁 Estructura de Carpetas

```
src/i18n/
├── config.ts                 # Configuración de i18next
├── types.ts                  # Tipos TypeScript

└── locales/
    ├── en/                   # Traducciones en inglés
    │   ├── common.json
    │   ├── hero.json
    │   ├── products.json
    │   ├── aesthetic.json
    │   ├── how-it-works.json
    │   ├── whats-inside.json
    │   ├── emotional.json
    │   ├── faq.json
    │   ├── cta.json
    │   └── footer.json
    │
    └── es/                   # Traducciones en español
        ├── common.json
        ├── hero.json
        ├── products.json
        ├── aesthetic.json
        ├── how-it-works.json
        ├── whats-inside.json
        ├── emotional.json
        ├── faq.json
        ├── cta.json
        └── footer.json
```

## 📝 Agregar Nuevas Traducciones

### 1. Añadir a JSON Files

**Editar `src/i18n/locales/en/hero.json`:**
```
json
{
  "title": "FantasyBox",
  "subtitle": "Your next book deserves a ritual.",
  "newKey": "New value in English"
}
```

**Editar `src/i18n/locales/es/hero.json`:**
```
json
{
  "title": "FantasyBox",
  "subtitle": "Tu próximo libro merece un ritual.",
  "newKey": "Nuevo valor en español"
}
```

### 2. Usar en Componentes

```
typescript
const { t } = useTranslation('hero');
return <p>{t('newKey')}</p>;
```

### 3. (Opcional) Actualizar Types

Editar `src/i18n/types.ts` para agregar type safety:

```
typescript
export interface HeroTranslations {
  title: string;
  subtitle: string;
  imageAlt: string;
  newKey: string; // ← Añadir aquí
}
```

## 🎯 Namespaces

Los namespaces ayudan a organizar traducciones por sección:

- **common**: Botones, etiquetas y elementos compartidos
- **hero**: Sección hero
- **products**: Descripción de productos
- **aesthetic**: Paletas de colores
- **howItWorks**: Pasos del proceso
- **whatsInside**: Contenido de cajas
- **emotional**: Mensaje emocional
- **faq**: Preguntas frecuentes
- **cta.**: Llamadas a la acción
- **footer**: Pie de página

## 🌐 Cambiar Idioma Programáticamente

```
typescript
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { i18n } = useTranslation();
  
  const switchToSpanish = () => {
    i18n.changeLanguage('es');
  };
  
  return (
    <button onClick={switchToSpanish}>
      Cambiar a Español
    </button>
  );
}
```

## ♿ Accesibilidad

El lenguaje de la página se actualiza automáticamente:
- El atributo `lang` del documento se actualiza (`lang="en"` o `lang="es"`)
- Los screen readers anuncian el cambio de idioma
- El selector de idioma tiene `aria-label`

## 💾 Persistencia

El idioma seleccionado se guarda en **localStorage** automáticamente.

```
typescript
// Validar idioma guardado
const savedLanguage = localStorage.getItem('i18nextLng');
console.log(savedLanguage); // 'en' o 'es'
```

## 🔧 Configuración

Ver `src/i18n/config.ts` para ajustar:
- Orden de detección de idioma
- Idioma por defecto (fallback)
- Debug mode
- Soportar nuevos idiomas

## 📊 Estadísticas

- **Idiomas soportados**: 2 (EN, ES)
- **Namespaces**: 10
- **Claves de traducción**: ~100
- **Bundle size**: +25KB

## ✅ Checklist para Nuevas Características

Al crear una nueva sección:

- [ ] Crear `src/i18n/locales/en/{section}.json`
- [ ] Crear `src/i18n/locales/es/{section}.json`
- [ ] Añadir namespace a `src/i18n/config.ts`
- [ ] Actualizar tipos en `src/i18n/types.ts`
- [ ] Usar `useTranslation('{section}')` en componentes
- [ ] Testear ambos idiomas
- [ ] Verificar que no hay strings hardcodeados

## 🐛 Troubleshooting

### "Cannot find module '@/components/ui/select'"
- Ejecutar `npm run dev` o `npm run build`
- El IDE puede necesitar reindexar

### Traducción no aparece
- Verificar que la clave existe en JSON
- Verificar el nombre del namespace
- Abrir DevTools → Console para errores

### No persiste el idioma
- Verificar localStorage: `localStorage.getItem('i18nextLng')`
- Limpiar caché del navegador

## 📚 Resources

- [i18next Documentation](https://www.i18next.com/)
- [react-i18next Documentation](https://react.i18next.com/)
- [FantasyBox CLAUDE.md](../CLAUDE.md)
- [FantasyBox I18N Implementation](I18N_IMPLEMENTATION.md)

---

**¿Necesitas ayuda?** Consulta la sección de código o revisa los componentes existentes como ejemplos.

