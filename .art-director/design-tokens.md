# Design tokens

Data: 2026-10-02. Fonte: os HTML em `.art-director/mockups/`. Nada disto está aplicado no Vue.

Os oito mockups da página são header, hero, feature, story, achievement, integration, project e footer. `feature2.html` entra porque já existe e traz outra paleta. A barra `.dev-chrome` (`#111827`) não entra no produto.

## Inventário

### Cores

Superfície, do mais escuro ao mais claro:

- `#0E0F0F` — página, base do hero, fundo atrás da barra
- `#0F0E0F` — Story
- `#0C111D` — Project
- `#141414` — Header e Footer
- `#181919` — Feature e Achievement
- `#191A1B` — topo do hero
- `#191A1C` — Feature 2
- `#1C222A` — Integration
- `#232526` — pastilha «Stay Tuned»
- `#292929` — pastilha do último link do header

Texto:

- Primário: `#FFFFFF`, `#F7F7F7`, `#EEEEEE`, `#E7E7E7`, `#E6E6E6`
- Corpo: `#D6D6D6` (hero), `#AAAAAA` (integration e feature 2), `#BCBCBC` (estrelas e legendas de achievement)
- Muted: `#8A8A8A` (story e copyright)
- Texto sobre o botão verde: `#090909`

Accent:

- `#13A961` — CTA do hero e botão de Feature
- `#24FBEE` — marcas de Achievement
- `#DDFB24` — «170+ tools» em Integration
- `#FF5029` com anel `#671D13` — botão de Feature 2
- `#FEC84B` — estrelas de Feature

Traço: `#282828` na barra e no footer.

### Fontes

- Clash Display — hero 60/72; feature, story e achievement 71/77
- DM Sans — corpo e botões de feature, achievement, project, citações da story, badge e checks de feature 2
- Geist — lede da story 20/30; título de feature 2 65/60
- Manrope — header, footer e título de integration 56/72
- Inter — parágrafo do hero 20/30

### Escala actual

- Display: 71/77, 65/60, 62/79, 60/72, 56/72
- Título interno: 30/36
- Corpo: 20/35 e 20/30
- UI: 18/20, 16/28, 16/24, 14/35, 14/24, 13/15

### Espaço de secção

- Header: 16×102; em estreito 16×20
- Hero: margem superior 80px
- Feature: 80×20
- Story: 107×40×80; em estreito 40×20×64
- Achievement: 80×96; em estreito 48×20
- Integration: 80×95; em estreito 48×20
- Project: 80×112; em estreito 48×20
- Footer: 32×102×40; em estreito 32×20
- Feature 2: 80px à esquerda

## Valores finais

### Tipo

- Display: Clash Display
- Corpo: DM Sans

Clash Display já titula hero, feature, story e achievement. DM Sans já cobre botões, cartões e citações. Inter, Geist e Manrope saem.

Dois tamanhos de display, tracking `-0.02em`:

- Display L: 64/72 — hero, feature, story, achievement e feature 2
- Display M: 48/56 — integration e project

Há um tamanho grande e um tamanho de bloco ao lado de imagem, em vez de cinco medidas (71, 65, 62, 60, 56). Achievement fica em L porque hoje partilha o 71/77 com feature e story. Feature 2 fica em L porque o 65 está mais perto de 64 do que de 48. Integration e project descem para 48/56: o título deles convive com um painel, não ocupa a página sozinho.

Resto da escala:

- Título: DM Sans 700, 30/36
- Corpo: DM Sans 400, 20/30
- Legenda: DM Sans 400, 14/24

Os 20/35 passam a 20/30. A navegação deixa o 14/35 e fica 14/24.

### Cor

Superfície:

- 0 `#0E0F0F` — página, hero, story
- 1 `#181919` — feature, achievement, integration, project
- 2 `#141414` — header e footer
- 3 `#232526` — pastilhas

`#0F0E0F` funde-se em 0. `#191A1B`, `#191A1C`, `#1C222A` e `#0C111D` fundem-se em 1. `#292929` funde-se em 3. Quatro níveis chegam para página, secção, barra e pastilha. Os azuis de integration e project eram de frames diferentes e partiam a página.

Texto:

- Primário `#FFFFFF`
- Corpo `#B0B0B0`
- Muted `#8A8A8A`

`#FFFFFF` é o branco que já está no hero, na story e no project. `#F7F7F7`, `#EEEEEE`, `#E6E6E6` e `#E7E7E7` aproximam-se dele sem serem o mesmo. `#B0B0B0` fica entre o corpo claro do hero (`#D6D6D6`) e o cinza dos frames (`#AAAAAA`, `#BCBCBC`), para o parágrafo ler sobre `#0E0F0F` e sobre `#181919`. `#8A8A8A` já é a legenda da story e do copyright.

Accent:

- Primário `#13A961` — acções
- Secundário `#24FBEE` — marcas e um destaque de texto

`#13A961` já está nos dois botões que foram alinhados de propósito. `#24FBEE` já marca o achievement. O amarelo `#DDFB24` e o laranja `#FF5029` saem: um terceiro e um quarto accent voltavam a partir a página. O texto do botão primário é `#090909`. `#FEC84B` fica só nas estrelas, como cor de avaliação, fora dos dois accents de marca.

Traço: `#282828`.

### Espaço

Padding de secção: 80px 96px no desktop, 48px 20px abaixo de 1024px. Header e footer mantêm 16px na vertical e 102px na horizontal. Essa medida é a barra, não o bloco de conteúdo. O 107 da story, o 95 da integration e o 112 do project passam a 96.

### Forma e sombra

- `radius-pill`: 500px. Os raios 500px e 50000px dos frames são a mesma pastilha.
- `radius-card`: 12px. Os cartões não tinham um raio comum.
- `shadow-card`: `0 8px 24px rgba(0, 0, 0, 0.4)`
- `shadow-phone`: `drop-shadow(24.038px 24.038px 48.075px rgba(16, 24, 40, 0.2)) drop-shadow(12.019px 12.019px 24.038px rgba(16, 24, 40, 0.08))`, copiado de `mockups/hero-landify.html`

Os degradês que esbatem o título para transparente não entram. O título fica `#FFFFFF` sólido.

## O que muda por secção

Aplicado nos HTML de `.art-director/mockups/` e nos oito componentes Vue em 2026-10-02.

- Header e Footer: Manrope para DM Sans 14/24. Pastilha `#292929` para `#232526`, raio 500px. Texto `#E6E6E6` para `#FFFFFF`.
- Hero: Inter para DM Sans. Corpo `#D6D6D6` para `#B0B0B0`. Título 60/72 para Display L 64/72, cor `#FFFFFF`. O botão continua `#13A961`. A sombra dos telemóveis passa a `shadow-phone`.
- Feature: título 71/77 para Display L 64/72. O botão já é `#13A961`, raio 500px.
- Story: título 71 para Display L. Lede Geist para DM Sans 20/30 em `#B0B0B0`. Padding 107×40 para 80×96.
- Achievement: título 71 para Display L. Marcas `#24FBEE` ficam. Legendas `#BCBCBC` para `#8A8A8A`.
- Integration: fundo `#1C222A` para `#181919`. Título Manrope 56/72 para Display M 48/56. Corpo para DM Sans 20/30 `#B0B0B0`. «170+ tools» de `#DDFB24` para `#24FBEE`. Padding horizontal 95 para 96.
- Project: fundo `#0C111D` para `#181919`. Título DM Sans 62/79 para Display M 48/56 em Clash Display, cor `#FFFFFF`.
- Feature 2: Geist 65 para Display L. Botão `#FF5029` para `#13A961`, raio 500px, texto `#090909`. Corpo `#AAAAAA` para `#B0B0B0`.
