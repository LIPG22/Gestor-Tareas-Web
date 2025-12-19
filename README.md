## Aplicación web de gestión de tareas (To-Do List) con diseño moderno Glassmorphism.
* Desarrollada con JavaScript Vanilla, CSS3 avanzado y persistencia de datos con LocalStorage.

# 🚀 Task Master - JS To-Do List

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</div>

<div align="center">
  <a href="https://lipg22.github.io/Gestor-Tareas-Web/" target="_blank">
    <img src="https://img.shields.io/badge/DEMO_EN_VIVO_🚀-000000?style=for-the-badge&logo=github&logoColor=white" alt="Demo en Vivo" />
  </a>
</div>

<br>

Una aplicación web elegante y funcional para la gestión de tareas diarias. Este proyecto destaca por su interfaz moderna con efecto **Glassmorphism** (Vidrio Esmerilado) y su lógica construida enteramente con **JavaScript Vanilla** (sin frameworks), manejando un dominio sólido en la manipulación del DOM y el almacenamiento local.

## 📸 Captura de Pantalla
Vista Previa: 
<img width="1920" height="909" alt="image" src="https://github.com/user-attachments/assets/22d76452-2053-4e5e-878c-8fbfd17c127c" />
<img width="1920" height="888" alt="image" src="https://github.com/user-attachments/assets/10bf468c-8313-482d-b6fa-e68eff917154" />
<img width="1920" height="849" alt="image" src="https://github.com/user-attachments/assets/e415b91e-14cd-499d-987e-6e963b416acd" />
<img width="1920" height="865" alt="image" src="https://github.com/user-attachments/assets/f1bbd096-6364-4d3f-903f-627720cd40ae" />



## 🌟 Características Principales
* **Diseño UI/UX Moderno:** Estética "Glassmorphism" utilizando CSS3 (`backdrop-filter`, transparencias y bordes sutiles).
* **Persistencia de Datos:** Las tareas **no se borran** al recargar la página gracias a la implementación de `LocalStorage`.
* **Interacciones Dinámicas:** Agregar, tachar (marcar como completada) y eliminar tareas con animaciones CSS suaves.
* **Contador en Tiempo Real:** Visualización automática de tareas pendientes.
* **Fecha Dinámica:** Muestra la fecha actual formateada automáticamente con JS.

## 🛠️ Tecnologías Utilizadas
* **HTML5 Semántico:** Estructura limpia y organizada.
* **CSS3:** Variables CSS (`:root`), Flexbox, Animaciones (`@keyframes`) y diseño responsivo.
* **JavaScript (ES6+):**
    * Manipulación del DOM (`querySelector`, `createElement`, `innerHTML`).
    * Event Delegation.
    * Manejo de Objetos y Arrays (JSON).
    * API de LocalStorage.
* **Recursos Externos:** FontAwesome (Iconos) y Google Fonts (Tipografía Poppins).

## 📂 Estructura del Proyecto
```text
ProyectoWeb/
├── index.html        # Estructura principal
├── css/
│   └── styles.css    # Estilos y animaciones
└── js/
    └── app.js        # Lógica de negocio
