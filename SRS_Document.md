# Documento de Especificación de Requisitos de Software (SRS)

## Sistema Elegido: Sistema de Gestión de Tareas (Task Manager)

## 1. Introducción

Este documento detalla los requisitos funcionales y no funcionales para el **Sistema de Gestión de Tareas**. El objetivo principal de este sistema es permitir a los usuarios organizar, priorizar y dar seguimiento a sus tareas pendientes de manera eficiente. Proporciona una plataforma centralizada para la creación y administración de listas de tareas, mejorando la productividad personal.

## 2. Descripción General

El Sistema de Gestión de Tareas es una aplicación simple e intuitiva, diseñada para funcionar como una herramienta de productividad. Los usuarios podrán registrarse, crear tareas con fechas de vencimiento y etiquetas, marcarlas como completadas y filtrar sus listas.

## 3. Requisitos Funcionales

Los requisitos funcionales describen lo que el sistema debe hacer.

### RF1: Gestión de Tareas
**El sistema debe permitir a un usuario autenticado crear, editar y eliminar una tarea.**
* Al crearla, el usuario debe poder ingresar un título, una descripción, una fecha límite (opcional) y una prioridad (Alta, Media, Baja).

### RF2: Marcado de Estado
**El sistema debe permitir al usuario marcar una tarea como 'Completada' o 'Pendiente'.**
* Una vez completada, la tarea debe moverse automáticamente a una lista de 'Tareas Finalizadas' o quedar visualmente distinguida (ej. tachada).

### RF3: Filtrado y Búsqueda
**El sistema debe permitir al usuario filtrar las tareas por su prioridad y buscar tareas por palabras clave en el título o descripción.**
* La interfaz debe actualizarse inmediatamente para mostrar solo los resultados que coincidan con el criterio de búsqueda o filtro aplicado.

## 4. Requisitos No Funcionales

Los requisitos no funcionales describen cómo debe funcionar el sistema (calidad, rendimiento, seguridad, usabilidad, etc.).

### RNF1: Rendimiento (Tiempo de Respuesta)
**El sistema debe cargar la lista principal de tareas (hasta 50 tareas activas) en menos de 1.5 segundos.**
* Este tiempo de respuesta se medirá en condiciones normales de red.

### RNF2: Seguridad (Autenticación)
**El sistema debe asegurar que todos los datos de usuario, incluidas las contraseñas, se almacenen de forma segura mediante funciones hash y que toda la comunicación entre el cliente y el servidor se realice a través de HTTPS.**
* Solo el usuario propietario de una tarea debe poder verla, editarla o eliminarla.

### RNF3: Usabilidad (Diseño Intuitivo)
**El 90% de los usuarios nuevos debe poder crear su primera tarea y marcarla como completada en un máximo de 60 segundos sin necesidad de consultar la documentación.**
* La interfaz de usuario debe ser minimalista y seguir las mejores prácticas de diseño web para la gestión de listas.

## 5. Otros Requisitos (Opcional)

### Requisito de Tecnología
El frontend del sistema se desarrollará utilizando HTML, CSS (con una estructura flexible/responsive) y JavaScript.

### Requisito de Escalabilidad
Aunque no es una prioridad inicial, el sistema debe diseñarse con una arquitectura que permita la futura adición de funciones de colaboración y múltiples usuarios por proyecto.