# Homework interview fro NMH

GitHub: https://github.com/kruci/interview-nmd

Live demo: https://interview-nmd.vercel.app/

Run locally: `npm run dev`

## Homework task

> Vyvinúť webovú aplikáciu za využitia knižnice React, ktorá bude slúžiť na správu informácií o obľúbených knihách. Užívateľské rozhranie bude vertikálne rozdelené na dve polovice. V ľavej časti sa bude nachádzať formulár na zadávanie údajov o knihe, ktorý bude obsahovať nasledujúce polia: názov (povinný údaj), autor, krátky opis (maximálne 300 znakov) a obrázok. Pod formulárom bude umiestnené tlačidlo na uloženie údajov. Po jeho stlačení sa informácie o knihe uložia do aplikačnej pamäte (perzistencia dát nie je potrebná).

> V pravej časti rozhrania sa bude nachádzať zoznam uložených kníh. Tento zoznam bude schopný zobraziť neobmedzený počet kníh a umožniť ich filtrovanie podľa názvu. Po kliknutí na konkrétnu knihu sa zobrazí modálne okno s podrobnosťami o vybranej knihe (tie ktoré sme uložili cez formulár).

> Pokiaľ ide o dizajn, je potrebné zabezpečiť responzívne zobrazenie, vrátane podpory pre menšie obrazovky s šírkou až do 320px. Inak je úroveň CSS aj samotné UI na rozhodnutí autora. Flexibilne sa môže meniť aj orientácia z vertikálneho na horizontálne delenie pri určitých šírkach obrazovky.

> Použitie knižníc tretích strán nie je obmedzené.

### Requirements

- Two column page
  - Left column is form
    - Title is required field
    - Can upload image
  - Right columnt contains
    - Input for book title filter
    - Books in this list should open a modal with information on click
- Design aesthetic not importnat
- Should be responsive
- No data persistance required

## Results

### Tech stak

- Nest.js 15 (react 19)
- antd for UI (with compatibility fixes for next 15 but reduced SSR capabilities)
- fuse.js for fuzzy search for book titles
- rc-virtual-list for the books infinite list
- redux toolkit for state management
- lodash for aditional utils (ended up using just debounce)

### Notes from development

- Will write **everything in english** in case I want to use this for future :)
- Will **use nextjs 15** as this is rare oportunity to use the most recent version
- Will use **antd for UI**, as it is batteries included, including the infinity list and forms
- Will use **fusejs so we can have fuzzy search for the book titles**
- Will use **redux toolkit** for the state management (books)
- **Using nextjs 15 with antd was a blunder** as **antd** is **not** yet updated to **work with react 19** properly, and currently has a bunch of limitations for SSR.
  - I chose to go ahead like this, as nextjs 15 uses Server components by default, and to make antd work we just have to change components that use chained antd names (e.g. `Form.Item`) to client components with `"use client";`.
- Known bugs:
  - When you upload an image, you get small thumbnail in the image uploader component. It has broken link if you click on it (seems to be library issue)
- Possible improements:
  - Add indexing in fuzzy search
  - Scroll to the top of books list if search value is changed
  - Extract selectors used in components to separate functions
