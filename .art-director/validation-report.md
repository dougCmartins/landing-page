# Validação — hero de portfolio

Página: `http://127.0.0.1:3000/` (contentor `landing-page-frontend-1`, depois de reiniciar para o `nuxt.config` entrar).

Contrato: `.art-director/mockups/hero-portfolio.html`.

`package.json` não tem script de testes nem de formatação. Nada foi corrido nesse eixo.

| Secção | Estado esperado | Estado real | Divergência |
|---|---|---|---|
| Header | Barra transparente sobre o fundo. Logo `/images/nuxt-logo.webp` (155×35) para `#top`. Links About `#about`, Projects GitHub, Contact mailto. DM Sans 14/24, sem maiúsculas nem pastilha. Abaixo de 640px, logo e links empilham. Fade-in 400ms. | A 1440px: fundo transparente, padding `16px 96px`, links numa linha (Contact termina em x=1344, dentro dos 1440). A 390px: coluna, largura 390, sem scroll horizontal. About abre `#about`. | Nenhuma no layout. O CSS do fade ficou no componente, com o mesmo tempo do mockup. |
| Hero | Grelha de 12 colunas, título Clash Display 64/72, lede, CTAs, cartão com iniciais DM, papel e pill AI-assisted engineering, stack a acabar em AI. A 1024px o cartão centra (máx. 440). A 640px o título passa a 40/48 e os botões ocupam a largura. | A 1440px: 12 colunas, título 64px Clash Display, cartão 506px em x=838 (borda direita 1344), pills do cartão todas dentro do cartão, última é AI. A 390px: título 40/48, botões e cartão a 350px, CTAs em coluna, `--pad-x` 20px, sem overflow. | Nenhuma. As regras estão em `HeroPortfolio.vue` (scoped); o nome da animação `float` ganha sufixo de scope do Vue. O movimento é o mesmo. |
| Trust bar | “Currently working with:” e oito pills, a última AI. Float em `--float-y` (3.5s, atrasos de 300ms). Hover pausa, sobe 3px e muda borda e cor. | Oito pills, última AI. `animation-name` resolve para o float com scope. Largura 390px no telemóvel, sem corte. | Nenhuma face ao mockup. O mockup não dá hover às pills do cartão; só às da trust bar. |

Fundo da página: `.stage` com `hero-bg.webp`, overlay e glow, `min-height: 100vh`. O `max-width: 1440px` do `body` saiu. `lang` é `en`. Título: Doug Martins | Full-Stack Developer. Imagem de partilha: `/images/hero-bg.webp`.
