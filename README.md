# Site prezentare — PFA Kacso Cati (Verificare piese)

Site de prezentare pentru serviciile de **verificare si control calitate piese** oferite de
PFA Kacso Cati (Cisnadie, jud. Sibiu). Construit cu **React + Vite**, complet static, fara backend.

Formularul de contact deschide **WhatsApp** cu mesajul deja pre-completat din datele introduse.

## Cerinte

- [Node.js](https://nodejs.org) versiunea 18 sau mai noua (recomandat LTS)

## Rulare locala

```bash
npm install
npm run dev
```

Apoi deschide adresa afisata in terminal (de obicei `http://localhost:5173`).

## Build pentru productie

```bash
npm run build
```

Rezultatul (site static gata de hosting) apare in folderul `dist/`.
Poti verifica local build-ul cu:

```bash
npm run preview
```

## Cum editezi continutul

Aproape tot textul este centralizat in **`src/data/content.js`**:

- date de contact (telefon, email, adresa)
- numarul de WhatsApp (`telefonWhatsApp`, format international fara `+`, ex. `40752291659`)
- serviciile afisate
- experienta profesionala
- calificari si competente

Nu trebuie sa modifici componentele pentru a schimba textele.

## Cum inlocuiesti pozele demo cu poze reale

Pune pozele tale in folderul **`public/images/`**, pastrand aceleasi nume de fisier:

| Fisier                      | Unde apare                            |
| --------------------------- | ------------------------------------- |
| `hero.jpg`                  | imaginea mare de sus                  |
| `serviciu-sortare.jpg`      | card „Sortare si control calitate"    |
| `serviciu-dimensional.jpg`  | card „Verificare vizuala si dimens."  |
| `serviciu-control.jpg`      | card „Identificare defecte"           |
| `serviciu-rework.jpg`       | card „Rework si suport productie"     |
| `serviciu-rapoarte.jpg`     | card „Documentatie si raportare"      |
| `serviciu-logistica.jpg`    | card „Organizare activitati logistice"|
| `serviciu-suport.jpg`       | card „Suport calitate companii ind."  |
| `serviciu-reclamatii.jpg`   | card „Gestionarea reclamatiilor"      |

Pana pui pozele reale, se afiseaza automat un placeholder stilizat (nimic stricat).

## Publicare pe GitHub (repo public)

Repo-ul local este deja pregatit. Creeaza un repo **public** pe contul tau GitHub,
apoi ruleaza (inlocuind `UTILIZATOR` si `NUME-REPO`):

```bash
git remote add origin https://github.com/UTILIZATOR/NUME-REPO.git
git branch -M main
git push -u origin main
```

## Hosting (mai tarziu)

- **GitHub Pages:** seteaza `base: '/NUME-REPO/'` in `vite.config.js`, apoi configureaza deploy.
- **Netlify / Vercel:** conecteaza repo-ul; comanda build `npm run build`, folder publicare `dist`.
- **Domeniu propriu:** se leaga la hostingul ales dupa cumparare.
