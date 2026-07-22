# Trilha de IA — 12 Habilidades

Tracker interativo de estudos que organiza 12 habilidades de IA em uma trilha progressiva, agrupadas em três níveis de dificuldade. Cada habilidade é apresentada como um card expansível com caminho de aprendizado, projeto prático sugerido e critério de conclusão.

## Sobre o projeto

A trilha divide as 12 habilidades em três blocos de dificuldade progressiva:

| Grupo          | Etapas | Nível                                      |
| -------------- | ------ | ------------------------------------------ |
| 🟢 Fundamentos | 1–4    | Torna você o mais capacitado do escritório |
| 🟡 Construção  | 5–8    | Torna você um construtor                   |
| 🔴 Avançado    | 9–12   | Torna você quem as empresas mais disputam  |

Funcionalidades:

- **Cards expansíveis (accordion)** — cada habilidade mostra caminho de aprendizado, projeto para iniciantes e critério de conclusão ao ser aberta.
- **Barra de progresso** — acompanha quantas das 12 etapas já foram concluídas.
- **Marcação de progresso persistente** — o estado de conclusão é salvo em `localStorage`, sobrevivendo a recarregamentos de página.
- **Identidade visual por nível** — cada grupo de dificuldade tem uma cor de destaque própria (verde, amarelo, vermelho).

## Stack técnica

- **React** + **TypeScript**
- **Vite** como bundler e servidor de desenvolvimento
- **CSS Modules** para estilização (sem frameworks de CSS)
- **Oxlint** como linter

## Estrutura do projeto

```
src/
  components/
    GroupDivider/     # Divisor visual entre os 3 grupos de dificuldade
    StationCard/       # Card expansível de cada habilidade
  data/
    stations.ts         # Conteúdo das 12 habilidades (fonte única de dados)
  types.ts              # Tipos compartilhados (ex.: GroupColor)
  App.tsx
  main.tsx
```

## Como rodar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (instalado junto com o Node.js)

### Passo a passo

1. Clone o repositório:

   ```bash
   git clone https://github.com/MarcioLima79/trilha-ia-12-habilidades.git
   cd trilha-ia-12-habilidades
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra o navegador em [http://localhost:5173](http://localhost:5173)

### Outros comandos disponíveis

```bash
# Verificar o código com o linter (Oxlint)
npm run lint

# Checar tipos do TypeScript
npx tsc -b

# Gerar build de produção (pasta dist/)
npm run build

# Pré-visualizar o build de produção localmente
npm run preview
```

## Créditos

Conteúdo baseado no [artigo](https://medium.com/@pranithnaikpranit/9f6d39cf2292?sk=dea841bd172ac6d9b39ac49815a1a090) **"12 Habilidades de IA que Você Deve Aprender em 2026"**.

Interface construída com apoio do [Claude Code](https://claude.com/product/claude-code) e do plugin [`frontend-design`](https://claude.com/plugins/frontend-design), da Anthropic.

## Licença

Este projeto é de uso pessoal para fins de estudo e portfólio.
