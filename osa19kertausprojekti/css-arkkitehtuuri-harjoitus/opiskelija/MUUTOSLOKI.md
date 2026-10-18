# Muutosloki

## Korjatut ongelmat

| Ennen (ongelma)                                                                                                                                 | Jälkeen (ratkaisu)                                                                                                                    | Miksi?                                                                                                                  | Testaus                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 1. ID-valitsimet ja tarpeettomat `!important`-määrittelyt vaikeuttivat tyylien ylikirjoittamista.                                               | Poistettu ID-valitsimet ja `!important`-määrittelyt ja korvattu ne yksinkertaisemmilla luokka- ja elementtivalitsimilla.              | Selektorien spesifisyyden vähentämiseksi sekä CSS:n kaskadin ymmärtämisen ja ylläpidon helpottamiseksi.                 | Tarkistetaan DevTools-työkaluilla, että oikeat tyylisäännöt tulevat käyttöön.                                           |
| 2. Samoja korttien ja otsikoiden tyylejä oli toistettu useissa valitsimissa, kuten `.sidebar .course-card` ja `#main .course-grid .card-title`. | Poistettu päällekkäiset määrittelyt ja yhdistetty ne yhteisiin `.course-card`-, `.course-card.featured`- ja `.card-title`-sääntöihin. | Toiston vähentämiseksi ja epäyhtenäisten tyylien välttämiseksi komponentteja päivitettäessä.                            | Verrataan tavallisia ja korostettuja kortteja sivupalkissa ja pääsisällössä.                                            |
| 3. Korteilla oli kiinteä korkeus `235px`, mikä saattoi aiheuttaa sisällön ylivuotoa.                                                            | Poistettu kiinteä korkeus, käytetty `height: stretch` -arvoa ja muokattu sisäistä Grid-asettelua.                                     | Jotta kortit mukautuvat eripituiseen sisältöön ilman, että sisältö leikkautuu tai menee kortin ulkopuolelle.            | Tarkistetaan eripituisen sisällön kortit kapeilla ja leveillä näyttöleveyksillä.                                        |
| 4. Tunnisteiden tekstivärin (`#bbb`) kontrasti valkoista taustaa vasten oli liian pieni.                                                        | Muutettu tunnisteiden tekstiväriksi `#585858`.                                                                                        | Luettavuuden parantamiseksi ja saavutettavuusvaatimusten täyttämiseksi.                                                 | Mitattu kontrastisuhde on **7,11:1**, mikä täyttää WCAG AA:n (4,5:1) ja AAA:n (7:1) vaatimukset tavalliselle tekstille. |
| 5. `.button:focus` käytti `outline: none` -määrittelyä, joka poisti näkyvän näppäimistökohdistuksen ilmaisimen.                                 | Poistettu `outline: none` ja lisätty näkyvä reunaviiva `a:focus-visible`-valitsimella sekä `outline-offset`-ominaisuudella.           | Näppäimistönavigoinnin saavutettavuuden parantamiseksi, jotta käyttäjä näkee, mikä linkki on parhaillaan kohdistettuna. | Tarkistetaan kohdistuksen näkyvyys siirtymällä linkkien välillä Tab- ja Shift+Tab-näppäimillä.                          |

## Muut parannukset

### CSS:n rakenne ja ylläpidettävyys

* **Muuttujat:** Lisätty CSS-muuttujia `:root`-elementtiin väreille, fonttikooille ja välistyksille. Lisäsin muuttujia myös arvoille, joita käytetään vain kerran, koska toisiinsa liittyviä suunnitteluarvoja voidaan joutua päivittämään yhdessä.
* **Kaskadikerrokset:** Jaettu tyylitiedosto kolmeen kerrokseen: `base`, `layout` ja `components`. Näin yleiset tyylit, sivun rakenne ja komponenttikohtaiset säännöt ovat erillään.
* **Yksinkertaistetut valitsimet:** Vähennetty valitsimien tarpeetonta monimutkaisuutta ja helpotettu yhteisten komponenttityylien uudelleenkäyttöä.

### Responsiivisuus ja asettelu

* **Joustava sivupalkin leveys:** Korvattu sivupalkin kiinteä `260px` leveys määrittelyllä `minmax(0, 1fr) minmax(0, 4fr)`, jotta käytettävissä oleva tila jakautuu suhteellisesti.
* **Container-kyselyt:** Korvattu näkymäalueen leveyteen perustuva korttien asettelusääntö `@container (min-width: 400px)` -kyselyllä. Nyt jokainen kortti voi mukautua itsenäisesti oman `.card-container`-elementtinsä leveyteen.
* **Uudet breakpointit:** Lisätty kaksisarakkeinen kurssiruudukko keskikokoisille näkymäalueille ja muokattu ylätunnisteen asettelua kapeilla näytöillä.
* **Joustavat Grid-sarakkeet:** Käytetty `minmax(0, 1fr)` -määrittelyä, jotta sarakkeet voivat tarvittaessa kaventua.
* **Responsiivinen typografia:** Käytetty `clamp()`-funktiota sekä `vw`- ja `cqi`-yksiköitä otsikoiden fonttikokojen mukauttamiseen näkymäalueen tai säiliön leveyden mukaan.
* **Tekstin rivittyminen:** Lisätty `overflow-wrap: anywhere`, jotta pitkät sanat eivät mene kapeiden säiliöiden ulkopuolelle.
* **Korttien sisällön asettelu:** Käytetty CSS Gridiä ja `grid-template-areas`-ominaisuutta otsikon, tunnisteen, kuvauksen ja painikkeen sijoitteluun leveämmissä korteissa.

### Vuorovaikutus ja animaatiot

* **Hover-efektit:** Lisätty interaktiivisille linkeille hover-tilassa muunnoksia ja varjoja laitteilla, jotka tukevat hover-toimintoa ja tarkkaa osoitinta.
* **Painikkeen active-tila:** Lisätty painikkeelle tummempi taustaväri, kun painike aktivoidaan.
* **Tarkennetut siirtymät:** Korvattu painikkeiden `transition: all .25s` määrittelyllä `transition: transform .1s ease`.
* **Liikkeen vähentäminen:** Lisätty `prefers-reduced-motion: reduce` -mediakysely, joka poistaa siirtymät ja hover-muunnokset käytöstä. Vaihtoehtoisena hover-palautteena käytetään staattista varjoa.

## Container-kyselyn toiminta sivupalkissa ja pääsisällössä

Jokainen `.course-card` on `.card-container`-elementin sisällä, ja sille on määritelty `container-type: inline-size`.

Oletuksena korteissa on yksisarakkeinen asettelu. Kun yksittäisen säiliön leveys saavuttaa 400px, sen kortti muuttuu kaksisarakkeiseksi. Otsikko ja kuvaus sijoitetaan vierekkäin, ja painike näkyy kuvauksen alapuolella.

Toisin kuin alkuperäinen näkymäalueeseen perustuva mediakysely, container-kysely reagoi jokaisen kortin käytettävissä olevaan tilaan. Siksi sivupalkin ja pääsisällön korteilla voi olla erilaiset asettelut, vaikka näkymäalueen leveys olisi sama.

## Saavutettavuus ja 200 % zoom

### Tekstin kontrasti

Tunnisteiden tekstiväri muutettiin arvosta `#bbb` arvoon `#585858`. Mitattu kontrastisuhde valkoista taustaa vasten on **7,11:1**, mikä täyttää sekä WCAG AA:n että AAA:n vaatimukset tavalliselle tekstille.

### Näppäimistönavigointi

Alkuperäinen `outline: none` poistettiin. Linkeillä (myös `button`-luokan linkeillä) on nyt näkyvä kohdistuksen reunaviiva, jossa käytetään myös `outline-offset`-ominaisuutta. Näin kohdistettu elementti on helpompi tunnistaa.

Tab-näppäimellä siirtyminen tapahtuu oikeassa järjestyksessä, ja kohdistettu elementti näkyy selvästi.

### 200 % zoom

Kun selaimen zoomaus on 200 %, kaikki näyttää samalta kuin pienemmällä zoomaustasolla, mutta suuremmassa koossa. Kaikki elementit näkyvät ja teksti on luettavaa, eikä mikään mene päällekkäin. Sama pätee myös eri näyttöleveyksillä.

### Liikkeen vähentäminen (Reduced motion)

Tässä tilassa hover-siirtymät ja muunnokset ovat pois käytöstä, joten linkit eivät enää liiku tai muuta kokoaan, kun osoitin viedään niiden päälle. Sen sijaan hover-tilassa näkyy staattinen varjo visuaalisena palautteena.
