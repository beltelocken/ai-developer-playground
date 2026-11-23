# AI Developer Playground

Um espaço para experimentar ideias, ferramentas e fluxos de desenvolvimento com inteligência artificial.

O repositório contém um dashboard interativo em Next.js, TypeScript e Tailwind CSS para demonstrar fluxos de desenvolvimento com agentes de IA.

## Objetivo

- Explorar o uso de IA no desenvolvimento de software.
- Criar protótipos e pequenos experimentos.
- Registrar exemplos, aprendizados e instruções para reproduzir os experimentos.

## Como começar

Clone o repositório e entre na pasta do projeto:

```bash
git clone https://github.com/beltelocken/ai-developer-playground.git
cd ai-developer-playground
```

Após clonar, siga as instruções de instalação e execução abaixo. Os dados e a execução dos agentes são simulados localmente, sem APIs externas ou credenciais.

## Contribuições

Para adicionar um experimento:

1. Crie uma branch para a alteração.
2. Adicione o código e documente seu objetivo, requisitos e modo de execução.
3. Verifique o funcionamento e abra um pull request para `main`.

Evite incluir chaves de API, credenciais ou outros dados sensíveis nos arquivos versionados.

## Dashboard application

A responsive AI development dashboard built with Next.js App Router, strict TypeScript, Tailwind CSS 4, and Lucide icons. No credentials, APIs, or database required.

## Run locally

Requires Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production run `npm run build`. The app is exported to `out/` and can be served by any static host (for example `npx serve out`).

## Features

- Dark blue and purple dashboard with collapsible desktop navigation and mobile drawer.
- Four KPI cards, SVG activity visualization with hover values and 7/30-day ranges.
- Task search, status filtering, accessible detail dialogs, JSON export.
- Create tasks with an agent selector, loading feedback, and simulated completion after eight seconds.
- Four specialized AI agents with pause/resume controls; paused agents cannot receive tasks.
- Overview, Tasks, AI Agents, Analytics, Documentation, and Settings views.
- Session preferences, notification panel, status toasts, empty states, responsive layouts.
- Keyboard focus styles, dialog focus containment, Escape dismissal, semantic table, skip link, reduced-motion support.

## Technical decisions

All data is mock data held in React state. Refreshing resets changes; no data leaves the browser. New tasks simulate execution and do not generate or run code. KPI totals represent historical mock workspace activity plus new session tasks. Analytics use a fixed sample dataset. Next.js static export keeps deployment portable. Custom SVG avoids a charting dependency; CSS handles sparklines and the agent illustration. Components share icon/status primitives and typed data models.

Source: `app/` contains App Router layout, page, and responsive styles; `components/playground.tsx` contains the client dashboard, reusable components, mock data, and interaction logic.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
```

Validation results are recorded after the implementation checks in `VALIDATION.md`.
