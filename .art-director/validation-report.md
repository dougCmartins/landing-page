# Validação — portfólio Nuxt

Página: `http://localhost:3000/`.

Contrato: desenho de `shimmering-creative-hub` (`src/styles.css`, `src/routes/index.tsx`, `src/components/portfolio-sections.tsx`).

`package.json` não tem script de testes nem de formatação. Nada foi corrido nesse eixo.

| Secção | Estado esperado | Estado real | Divergência |
|---|---|---|---|
| Header | Fixo, 84px, logo 155×35, About `#about`, Projects GitHub, Contact mailto. Fundo ao passar de 40px. Abaixo de 640px, coluna e 100px. | Fixo. Links conferidos. Com scroll, classe `is-scrolled` e fundo `oklch(0.167 0.002 196 / 0.95)`. A 390px, coluna e altura 100px. | Nenhuma. |
| Hero | Título 64/72, grelha de 12 colunas, cartão DM, trust bar com 8 pills. Abaixo de 1024px, uma coluna, título 48/56 e cartão até 440px. Abaixo de 640px, título 40/48 e botões em largura total. | A 1440px: 12 colunas, título 64px Clash Display, sem overflow. A 800px: uma coluna, título 48px, cartão 440px. A 390px: título 40/48, botões 350×48, sem overflow. Fundo `hero-bg.webp` e partículas visíveis. | Nenhuma. |
| Secções | About, experiência, stack, formação, contacto e rodapé, com os textos do hub. Reveal ao entrar no ecrã. | 13 blocos `.reveal` ficam visíveis ao percorrer a página. Contacto, telefone, GitHub e LinkedIn apontam para os destinos do hub. | Nenhuma. |
| Movimento reduzido | Sem canvas e sem animação. Conteúdo visível sem esperar o reveal. | `prefers-reduced-motion: reduce`: 0 canvas, animação do título `none`, opacidade do reveal `1`. | Nenhuma. |
| Favicon | `favicon.png` do hub. | `link rel=icon` aponta para `/favicon.png`. | Nenhuma. |

Imagens locais mantidas: `/images/nuxt-logo.webp` e `/images/hero-bg.webp`. Sem botão de download do CV.
