# E2E testning med Playwright

Starta projekt

```bash
# skapa mapp för projektet
mkdir my-project
cd my-project/

git init
# Skapa .gitignore

npm init -y
# Lägg till "type": "module" i package.json

npm create playwright@latest
# Välj: JavaScript, tests, Y, Y

# Skapa test-skript i package.json
# Starta ditt test-skript
npm run test-e2e
```

Playwright-tips
```bash
# köra Playwright utan package.json-skript
npx playwright test

# köra bara specifik testfil genom att matcha filnamnet
playwright test filnamn

# ändra hur resultaten visas med reporter
playwright test --reporter=list
playwright test --reporter=line
playwright test --reporter=dot
```
