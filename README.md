# 🌐 Cypress Automation Portfolio

This repository contains automated E2E tests using [Cypress](https://www.cypress.io/) on the site [opencart.abstracta.us](https://opencart.abstracta.us).

---

## 📁 Structure

```
cypress/
├── e2e/
│   ├── pages/    # Page Objects
│   └── specs/    # Test specs
├── fixtures/     # Test data
├── reports/      # Mochawesome reports (ignored in Git)
├── support/      # Custom commands and global configuration
├── utils/        # Helper functions for fake data generation and utilities
```

---

## 🔧 Tools Used

* **Cypress**: E2E testing framework
* **Faker.js**: Random data generation (used in `utils/helper.js`)
* **Mochawesome**: Visual HTML/JSON test reporter

---

## ⚙️ Cypress Configuration

Located in `cypress.config.js`. Highlights:

* **Base URL**: `http://opencart.abstracta.us`
* **Viewport size**: 1920x1080
* **Reporter**: Mochawesome with HTML and JSON output to `cypress/reports`

---

## 🚀 How to Set Up and Run Tests (Step-by-Step)

### 📋 Prerequisites

* ✅ Make sure you have **Node.js** installed.
  👉 Download from [https://nodejs.org](https://nodejs.org)

### 🛠️ Installation & Execution

1️⃣ **Clone the repository**

```bash
git clone https://github.com/edward91c/cypress-automation-portfolio.git
```

2️⃣ **Navigate into the project**

```bash
cd cypress-automation-portfolio
```

3️⃣ **Install dependencies**

```bash
npm install
```

4️⃣ **Run tests in interactive mode**

```bash
npx cypress open
```

5️⃣ **Run all tests headlessly and generate reports**

```bash
npx cypress run
```

6️⃣ **View Test Reports (Optional)**

* Reports are automatically saved to:

  ```
  cypress/reports/
  ```

7️⃣ **Clean up old reports**

```bash
rm -rf cypress/reports/*
```

---

## 🌱 Branching Workflow

* 🌿 **`main`**: Contains base structure, configuration, and all completed test cases.
* ✨ **`feature/<name>`**: Each feature flow (register, login, checkout, etc.) is developed in its own branch.

---

## ✅ Test Scenarios Covered

* ✅ Register new user
* ✅ Successful login
* ✅ Invalid login attempt
* ✅ Add product to cart
* ✅ Checkout flow

---

## ⚠️ Note about the current test version

This is an initial version of the test cases, primarily focused on basic validations and error messages. Future updates will include additional scenarios, more thorough validations, and improvements in test robustness.
The intention is to maintain this foundation and progressively enhance it by following best practices and expanding test coverage.

---

## 🧪 How to Add a New Test

1. Create a new file inside `cypress/e2e/specs/`
2. Use page object methods from `cypress/e2e/pages/`
3. Use fake data functions from `cypress/utils/helper.js`
4. Run tests locally using:

```bash
npx cypress open
```

---

## 🧠 Best Practices

- Use page objects to encapsulate UI logic.
- Prefer selectors with data attributes (`[data-cy="..."]`) for stability.
- Avoid using `.wait()` unless absolutely necessary.
- Keep tests independent and idempotent.

---

## 📌 Author

Made by (https://github.com/edward91c)
📧 Email: (mailto:edward1791c@gmail.com)  
🔗 LinkedIn: (https://www.linkedin.com/in/edward-campeón-72aa8316b/ )

Happy Testing! 🎯
