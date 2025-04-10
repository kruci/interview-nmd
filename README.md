# Homework interview fro NMH

## Homework task

> Vyvinúť webovú aplikáciu za využitia knižnice React, ktorá bude slúžiť na správu informácií o obľúbených knihách. Užívateľské rozhranie bude vertikálne rozdelené na dve polovice. V ľavej časti sa bude nachádzať formulár na zadávanie údajov o knihe, ktorý bude obsahovať nasledujúce polia: názov (povinný údaj), autor, krátky opis (maximálne 300 znakov) a obrázok. Pod formulárom bude umiestnené tlačidlo na uloženie údajov. Po jeho stlačení sa informácie o knihe uložia do aplikačnej pamäte (perzistencia dát nie je potrebná).

> V pravej časti rozhrania sa bude nachádzať zoznam uložených kníh. Tento zoznam bude schopný zobraziť neobmedzený počet kníh a umožniť ich filtrovanie podľa názvu. Po kliknutí na konkrétnu knihu sa zobrazí modálne okno s podrobnosťami o vybranej knihe (tie ktoré sme uložili cez formulár).

> Pokiaľ ide o dizajn, je potrebné zabezpečiť responzívne zobrazenie, vrátane podpory pre menšie obrazovky s šírkou až do 320px. Inak je úroveň CSS aj samotné UI na rozhodnutí autora. Flexibilne sa môže meniť aj orientácia z vertikálneho na horizontálne delenie pri určitých šírkach obrazovky.

> Použitie knižníc tretích strán nie je obmedzené.

## Analysis

### Requirements

- simple 2 column page
  - Left column is form
  - Right columnt is infinite list
    - Books in this list should on click open a modal with information about the book
- design aesthetic not importnat
- should be responsive
- no data persistance required

### Planned Solution

- I will write **everything in english** in case I want to use this for future :)
- Will **use nextjs** so it follows the tech stack in company (but I will use version 15, as this is rare oportunity to use the most recent version)
- I will use **antd for UI**, as it is batteries included, including the infinity list and forms
- I will use **fusejs so we can have fuzzy search for the book titles**
- I will use **redux** for the state management (books)

## Actual solution

- Nest.js 15 (react 19)
- antd for UI (with compatibility fixes for next 15 but reduced SSR capabilities)
- fuse.js for fuzzy search for book titles
- rc-virtual-list for the books infinite list
- redux toolkit for state management
- lodash for aditional utils (ended up using just debounce)

### Notes from development

- Using nextjs 15 with antd was a blunder as antd is not yet updated to work with react 19 properly, and currently has a bunch of limitations for SSR. I chose to go ahead like this, as nextjs 15 uses Server components by default, and fix for antd is to just change components that use chaned antd names to client components. Once antd is chatched up with nextj, it would mean just removing `"use client";` from app files.
- did not have time for bunch of edge cases in UI
- did not have time to extract selectors used in components to separate functions
- did not have time to add indexing in fuzzy search
- I used book titles as IDs, what is not really realistick, but IMO ok for demo purposes
- If you upload an image and click on the thumbnail in the upload section (It works in modal as I am doing it manually there), it will open a link that is not working. I will not fix that as its seems to be the antd issues.
- I did not do full re-render optimization as I run out of time (but it seems to be pretty good)
