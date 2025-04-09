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

### Solution

- I will write **everything in english** in case I want to use this for future :)
- Will **use nextjs** so it follows the tech stack in company (but I will use version 15, as this is rare oportunity to use the most recent version)
- I will use **antd for UI**, as it is batteries included, including the infinity list and forms
- I will use **fusejs so we can have fuzzy search for the book titles**
