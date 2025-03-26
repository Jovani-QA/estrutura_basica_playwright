# Projeto de Testes E2E com Playwright

Este repositório contém um projeto de **testes end-to-end (E2E)** utilizando **Playwright**.
Projeto estruturdo de forma modular 
---

## **1. Requisitos**
Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- **Node.js** (versão 16 ou superior) → [Baixar Node.js](https://nodejs.org/)
- **Gerenciador de pacotes npm ou yarn**

Para verificar se o Node.js está instalado corretamente:
```sh
node -v
npm -v
```
---
## **2. Criar o projeto**
Crie um novo diretório e inicialize um projeto Node.js:
```sh
mkdir meu-projeto-e2e
cd meu-projeto-e2e
npm init -y
```

---

## **3. Instalar o Playwright**
Instale o Playwright e os navegadores necessários:
```sh
npm install -D @playwright/test
npx playwright install
```

Se desejar instalar apenas navegadores específicos:
```sh
npx playwright install chromium firefox webkit
```

---

## **4. Configurar o Playwright manualmente**
Se o comando `npx playwright test --init` não funcionar, crie manualmente os arquivos necessários.

1. **Criar a pasta de testes:**
```sh
mkdir -p tests
```

2. **Criar o arquivo de configuração** `playwright.config.ts` na raiz do projeto:
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://example.com',
    headless: true, // Executa os testes sem abrir o navegador
    screenshot: 'only-on-failure', // Tira screenshots apenas em caso de erro
    video: 'retain-on-failure', // Grava vídeos apenas em caso de erro
  },
  reporter: [['html', { outputFolder: 'reports' }]], // Gera relatório HTML
});
```

3. **Criar um teste de exemplo** em `tests/example.spec.ts`:
```ts
import { test, expect } from '@playwright/test';

test('Verifica título da página', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
```

---

## **5. Executar os testes**
### Rodar todos os testes:
```sh
npx playwright test
```

### Rodar testes em um navegador específico:
```sh
npx playwright test --browser=chromium
npx playwright test --browser=firefox
npx playwright test --browser=webkit
```

### Rodar testes no modo **headless** (sem interface gráfica):
```sh
npx playwright test
```

### Rodar testes no modo **normal** (com interface gráfica):
```sh
npx playwright test --headed
```

### Rodar testes no modo **UI interativo**:
```sh
npx playwright test --ui
```

---

## **6. Gerar relatórios**
Após a execução, você pode visualizar o relatório HTML:
```sh
npx playwright show-report
```

---

## **7. Depuração**
Para pausar a execução e depurar um teste:
```ts
test('Teste interativo', async ({ page }) => {
  await page.goto('https://example.com');
  await page.pause(); // Pausa a execução para inspeção
});
```

Ou execute o Playwright no modo **debug**:
```sh
npx playwright test --debug
```

---

## **8. Executar testes em CI/CD (GitHub Actions)**
Crie um arquivo **`.github/workflows/playwright.yml`** para rodar testes automaticamente:

```yml
name: Playwright Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Instalar dependências
        run: npm install
      - name: Instalar Playwright
        run: npx playwright install --with-deps
      - name: Executar testes
        run: npx playwright test
```

---

## **Conclusão**
Agora você tem um projeto de testes **E2E com Playwright** configurado do zero. 🚀
Se precisar de ajuda, abra uma issue ou entre em contato!

