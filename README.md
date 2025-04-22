# Challenge Movies

## 🚀 Instalación del Proyecto

Para configurar y ejecutar el proyecto correctamente, sigue estos pasos:

### 📌 1. Clonar el repositorio

```sh
git clone https://github.com/Ch3chy/challenge-movies.git
cd challenge-movies
```

### 📌 2. Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```sh
npm install
```

Este paso también instalará los **hooks de Git** mediante **Lefthook**.

### 📌 3. Ejecutar el proyecto

Para iniciar el entorno de desarrollo:

```sh
cd app
npm run dev
```

## 🌐 Despliegue Continuo con AWS Amplify

Este proyecto utiliza AWS Amplify para implementar un despliegue continuo (CI/CD), lo que ofrece varias ventajas significativas:

### 📌 Ventajas del Despliegue en Amplify

- **Integración Automática**: Se integra perfectamente con GitHub, realizando despliegues automáticos con cada push a la rama principal.
- **Escalabilidad**: Amplify se encarga automáticamente de la infraestructura y el escalado según la demanda.
- **Seguridad**: Proporciona HTTPS por defecto y protección DDoS.
- **Optimización**: Incluye optimización automática de assets y caching.
- **Monitoreo**: Ofrece métricas y logs en tiempo real.

### 📌 URL de la Aplicación

La aplicación está disponible en: [https://main.d13t89n8eq8g4h.amplifyapp.com/](https://main.d13t89n8eq8g4h.amplifyapp.com/)

## 📊 Optimización de Rendimiento con React Virtualized

Este proyecto implementa `react-virtualized` para optimizar el rendimiento en listas y tablas grandes. Esta biblioteca es especialmente útil para manejar grandes conjuntos de datos de manera eficiente.

### 📌 Ventajas de React Virtualized

- **Rendimiento Mejorado**: Solo renderiza los elementos visibles en la ventana, reduciendo significativamente el uso de memoria y mejorando el rendimiento.
- **Carga Rápida**: Ideal para listas con miles de elementos, ya que solo carga los elementos que el usuario puede ver.
- **Experiencia de Usuario**: Mantiene una experiencia fluida incluso con grandes conjuntos de datos.
- **Compatibilidad**: Funciona perfectamente con React y se integra bien con otras bibliotecas de UI.

---

## 📖 Directrices para Commits (Conventional Commits)

Este proyecto sigue el estándar **Conventional Commits** para mantener un historial de commits estructurado y legible.

### 📌 Estructura del mensaje de commit

```
<tipo>: <descripción breve>
```

Ejemplo válido:

```sh
git commit -m "feat: proyecto base de vite con react"
```

### 📌 Tipos de commit permitidos

- `feat` → Nueva funcionalidad.
- `fix` → Corrección de errores.
- `docs` → Cambios en documentación.
- `style` → Cambios de formato (sin afectar código).
- `refactor` → Refactorización sin cambiar funcionalidad.
- `test` → Agregar o modificar pruebas.
- `chore` → Tareas de mantenimiento.

## 🛠 Configuración Manual de Lefthook (Opcional)

Si los hooks no funcionan después de clonar el repo, instala Lefthook manualmente:

```sh
npx lefthook install
```

Esto asegurará que los hooks de Git estén correctamente configurados.

---
