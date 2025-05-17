# Cypress Automation Portfolio

Este repositorio contiene pruebas automatizadas E2E usando [Cypress](https://www.cypress.io/) sobre el sitio [opencart.abstracta.us](https://opencart.abstracta.us).

## 📁 Estructura

```
cypress/
├── e2e/
│   ├── pages/    # Page Objects
│   └── specs/    # Casos de prueba
├── fixtures/     # Datos de prueba
├── reports/      # Reportes Mochawesome (ignorados en Git)
├── support/      # Comandos y configuración global
```

## 🔧 Herramientas

- **Cypress**
- **Faker.js**: generación de datos aleatorios
- **Mochawesome**: reporter visual de resultados

## 🚀 Cómo ejecutar

1. Instalar dependencias:

```bash
npm install
```

2. Correr los tests:

```bash
npx cypress open
```

3. Generar reportes (si usás `mochawesome`):

```bash
npx cypress run
```

El reporte se guardará en `cypress/reports`.

## 🌱 Flujo de ramas

- `main`: solo contiene estructura base y configuración.
- `feature/<nombre>`: cada flujo (register, login, checkout, etc.) se trabaja en su propia rama.

