# Luontogalleria – CSS-miniprojekti

## Projektin kuvaus

Tässä projektissa tein responsiivisen kuvagallerian, jossa käyttäjä voi selata kuvia eri kategorioista ja katsoa lisätietoja jokaisesta kuvasta.

Galleriassa on kuusi kategoriaa: luonto, kaupungit, sillat, auringonlaskut, meri ja valtameri sekä eläimet.

Tavoitteena oli harjoitella HTML:n ja CSS:n käyttöä sekä tehdä sivusto, joka toimii erikokoisilla näytöillä. Halusin myös kokeilla uusia CSS-ominaisuuksia.

## Projektin rakenne

Projektin tärkeimmät tiedostot ja kansiot:

- `index.html` – sivun rakenne, kuvat ja niiden tiedot.
- `css/tyyli.css` – sivun ulkoasu, responsiivisuus ja CSS-toiminnot.
- `js/index.js` – pieni JavaScript-toiminto suodatinvalikkoa varten.
- `kuvat/` – gallerian kuvat WebP-muodossa.

## Toteutus ja tekniset ratkaisut

### 1. Sivun rakenne ja asettelu

Käytin kuvagallerian asetteluun CSS Gridiä. Kuvakorttien määrä rivillä muuttuu automaattisesti käytettävissä olevan tilan mukaan.

Yritin välttää kiinteitä leveyksiä ja korkeuksia siellä, missä niitä ei tarvittu. Kuvissa käytin `aspect-ratio`- ja `object-fit`-ominaisuuksia, jotta ne näyttäisivät yhtenäisiltä.

Käytin myös `minmax()`, `min()`, `clamp()` ja `auto-fit` -ominaisuuksia responsiivisen asettelun toteuttamiseen.

### 2. CSS:n rakenne ja design system

Määrittelin `:root`-osioon CSS-muuttujia väreille, fonteille, fonttikooille, väleille, reunuksille ja muille toistuville arvoille.

Jaoin CSS:n neljään kerrokseen `@layer`-säännöllä:

- `reset` – perustyylien nollaus.
- `base` – sivun yleiset tyylit.
- `layout` – sivun asettelu ja responsiivisuus.
- `components` – yksittäisten komponenttien tyylit.

Näin halusin tehdä tyyleistä selkeämpiä ja helpommin muokattavia.

Yritin myös välttää liian monimutkaisia selektoreita.

### 3. Responsiivisuus

Toteutin sivun ensin pienille näytöille ja lisäsin sen jälkeen tyylit suuremmille näytöille.

Käytin `@container`-kyselyä suodatinvalikon ulkoasun vaihtamiseen. Pienillä näytöillä suodattimet avautuvat pudotusvalikkona, ja suuremmilla näytöillä ne näkyvät vaakasuorana listana.

Kuvagallerian sarakkeiden määrä muuttuu automaattisesti käytettävissä olevan tilan mukaan.

Käytin myös `@media (hover: hover) and (pointer: fine)` -kyselyä, jotta hover-efektit olisivat käytössä vain sopivilla laitteilla.

### 4. Kuvien suodatus

Halusin toteuttaa kuvien suodatuksen ilman JavaScriptiä, joten käytin radiopainikkeita ja CSS:n `:has()`-selektoria.

Lisäsin JavaScriptiä vain siksi, että suodatinvalikko toimisi oikein pienillä näytöillä, kun suodattimet näkyvät pudotusvalikkona. JavaScript päivittää painikkeen tekstin valitun suodattimen mukaan ja sulkee valikon valinnan jälkeen.

Kaiken muun yritin toteuttaa ilman JavaScriptiä. Joissakin kohdissa tämä kuitenkin vaati mielestäni liikaa ylimääräistä koodia ja CSS-tyylejä. Siksi tulevaisuudessa voisin kokeilla tehdä joitakin toimintoja uudelleen JavaScriptillä, jotta toteutus olisi yksinkertaisempi ja helpompi ylläpitää.

### 5. Kuvien lisätiedot

Jokaisen kuvan oikeassa yläkulmassa on tietopainike, joka tulee näkyviin, kun käyttäjä vie hiiren kuvan päälle. Painike on käytettävissä myös näppäimistöllä Tab-näppäimellä. Kun painike saa kohdistuksen, se tulee näkyviin. Painikkeella käyttäjä voi avata kuvan lisätiedot. Hiirellä käytettäessä lisätiedot voivat näkyä myös hover-tilassa.

Tietoihin kuuluvat esimerkiksi kuvan nimi, kuvaus, tekijä, kuvauspaikka, kuvauspäivä, alkuperäinen lähde ja lisenssi.

Käytin tähän HTML:n `popover`-ominaisuutta, koska en onnistunut toteuttamaan kaikkia haluamiani toimintoja tavallisella elementillä, jonka näkyvyyttä ohjataan CSS:n `display`-ominaisuudella, ilman JavaScriptiä.

Käytin myös CSS Anchor Positioning -ominaisuuksia, jotta lisätietoikkuna avautuisi oikean kuvan lähelle. Jos selain ei tue näitä ominaisuuksia, popoverille on myös tavallinen sijoittelu näytön keskelle.

Tämän toteuttaminen oli yksi projektin vaikeimmista osista.

### 6. Saavutettavuus

Yritin ottaa saavutettavuuden huomioon esimerkiksi seuraavilla tavoilla:

- Käytin semanttisia HTML-elementtejä, kuten `main`, `section`, `article`, `figure` ja `figcaption`.
- Lisäsin kuville vaihtoehtoiset tekstit (`alt`).
- Lisäsin painikkeille tarvittaessa `aria-label`-attribuutit.
- Käytin `:focus-visible`-tilaa, jotta näppäimistön kohdistus näkyisi selvästi.
- Lisäsin linkin, jolla käyttäjä voi ohittaa kuvagallerian.
- Käytin radiopainikkeita kategorioiden valintaan.

Suodatinluettelossa liikkumista näppäimistöllä ei ole tällä hetkellä toteutettu kunnolla mobiilinäkymässä. Tämä on yksi asioista, jotka haluaisin korjata myöhemmin.

En lisännyt suodattimen valintavaihtoehtoihin `:active`-tilaa, koska niiden ei ole tarkoitus näyttää tavallisilta painikkeilta. Lisäksi valittu suodatin erottuu jo eri värillä.

Saavutettavuutta voisi vielä testata tarkemmin esimerkiksi ruudunlukijalla ja pelkällä näppäimistöllä.

### 7. CSS:n yhteensopivuus ja validointi

Kaikki käyttämäni CSS-ominaisuudet eivät menneet läpi CSS-validaattorissa.

Näitä olivat esimerkiksi `@container`, `container-type`, `anchor-name` ja jotkin muut uudemmat CSS-ominaisuudet.

Monet näistä ominaisuuksista ovat kuitenkin tuettuja moderneissa selaimissa. Validaattorin ilmoitus ei siis aina tarkoita, että CSS olisi virheellinen.

Käytin joissakin kohdissa `@supports`-sääntöä tarkistamaan, tukeeko selain tarvittavia ominaisuuksia.

Kaikille uusille ominaisuuksille ei kuitenkaan ole erillistä vaihtoehtoista toteutusta, joten sivun toiminta tai ulkoasu voi vaihdella selaimen mukaan.


## Testaus

Testasin sivua seuraavilla selaimilla:

- Google Chrome
- Mozilla Firefox

Testasin myös erilaisia näyttökokoja Google Chromen DevTools-työkalulla.

Tarkistin erityisesti kuvagallerian asettelua, suodatinvalikon toimintaa, kuvien lisätietojen näyttämistä sekä hover- ja focus-tiloja.

Testauksesta huolimatta en voi taata, että kaikki toiminnot näyttävät ja toimivat täysin samalla tavalla kaikilla selaimilla ja laitteilla.

## Kuvat ja lisenssit

Kuvat ovat peräisin Wikimedia Commonsista.

Lisäsin jokaisen kuvan tietoihin sen tekijän, alkuperäisen lähteen ja lisenssin sekä tiedot kuviin tehdyistä muutoksista.

Kuvia on rajattu, pienennetty ja muunnettu WebP-muotoon. Eri kuvilla voi olla erilaisia lisenssiehtoja, joten ne pitää huomioida myös kuvia käytettäessä tai jaettaessa.

## ChatGPT:n käyttö

Käytin ChatGPT:tä apuna projektin aikana.

En ole kovin hyvä visuaalisessa suunnittelussa, joten pyysin ChatGPT:ltä apua joihinkin suunnitteluratkaisuihin. En kuitenkaan ole täysin tyytyväinen kaikkiin ratkaisuihin, ja näen edelleen kohtia, joita voisi parantaa.

Käytin ChatGPT:tä myös tekstien ja kuvatekstien kääntämiseen suomeksi sekä joidenkin teknisten ongelmien selvittämiseen.

## Mitä voisin vielä parantaa?

- Korjata suodatinvalikon näppäimistönavigoinnin mobiilinäkymässä.
- Testata saavutettavuutta tarkemmin, myös ruudunlukijalla.
- Vähentää ylimääräistä CSS-koodia, erityisesti kuvien lisätietojen sijoittelussa.
- Kokeilla toteuttaa joitakin toimintoja JavaScriptillä yksinkertaisemman koodin saamiseksi.
- Parantaa joidenkin elementtien ulkoasua ja sijoittelua.
- Testata sivua useammilla oikeilla laitteilla ja selaimilla.
- Tarkistaa uusien CSS-ominaisuuksien yhteensopivuutta myös vanhemmissa selainversioissa.
- Tutkia mahdollisuuksia parantaa sivuston suorituskykyä.