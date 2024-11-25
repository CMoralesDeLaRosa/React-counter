# Proyecto React - Contador

## Tabla de Contenidos

- Descripción
- Estructura
- Instalación
- Características
- Desarrollo
- Tecnologías

## 1.Descripción

Este es un proyecto de contador desarrollado con React. Permite incrementar, decrementar y restablecer un valor que se refleja en un contador. El valor se actualiza de manera simultánea a medida que los usuarios interactúan con los botones.

Si el contador excede los límites establecidos (0 o el valor máximo), se muestra un mensaje de advertencia.

## 2.Estructura

1. App.jsx: El archivo principal que renderiza el componente Counter.
2. Counter.jsx: Componente que maneja la lógica del contador (incrementar, decrementar y restablecer).
3. ShowCount.jsx: Muestra el valor actual del contador.
4. ButtonsCount.jsx: Contiene los botones para incrementar, decrementar y restablecer el contador.
5. Button.jsx: Componente reutilizable para los botones.
6. useCounter.js: Hook personalizado para manejar la lógica del contador.
7. CSS: Archivos de estilo para los componentes.

## 3.Instalación

Para instalar y configurar el proyecto, sigue estos pasos:

1. Clona el repositorio:
   git clone https://github.com/tu_usuario/tu_repositorio.git](https://github.com/CMoralesDeLaRosa/React-counter.git)

2. Navega al directorio del proyecto:
   cd tu_repositorio

3. Instala las dependencias:
   npm install

4. Inicia la aplicación
   npm run dev

## 4.Características

1. El contador muestra el valor actual, comenzando en 0.

2. Los botones permiten:
   Incrementar el contador (botón +).
   Decrementar el contador (botón -).
   Restablecer el contador a 0 (botón Reset).

3. Si se alcanza el valor máximo o mínimo, se muestra un mensaje de advertencia y los botones dejan de modificar el contador.

## 5.Desarrollo

El proyecto está diseñado para ser simple, modular y fácil de entender. Los componentes están organizados de forma que se puedan reutilizar y modificar sin dificultad.

1. Uso del Hook Personalizado useCounter
   El proyecto incluye un hook personalizado llamado useCounter, que encapsula la lógica del contador, como los valores iniciales y los límites. Esto permite una mejor reutilización y organización del código, manteniendo los componentes más simples y fáciles de mantener. Utiliza el hook useState de React para gestionar el estado del contador y del mensaje de advertencia.

2. Uso de memo en el Componente Button
   El componente Button está envuelto en memo, para optimizar el rendimiento al evitar re-renderizados innecesarios. Aunque el uso de memo no es esencial en este proyecto, dado que es pequeño y no involucra una carga de recursos significativa, se ha utilizado como ejemplo de optimización.

## 6.Tecnologías

1. React: Biblioteca para construir interfaces de usuario.
2. React Hooks: Para gestionar el estado y efectos secundarios en componentes funcionales.
3. CSS Flexbox: Para crear diseños responsivos y flexibles en la interfaz.
