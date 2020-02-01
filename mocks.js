const requests = [
    {
        id: 1,
        bloodType: "B+",
        bloodSubType: "RhdPositiv",
        fenotype: "C+c-E-e+K-",
        name: "Zdenek Pecinka",
        age: 47,
        gender: "Male",
        distance: 28,
        date: "12.1.2020",
        time: "2 hrs",
        priority: "urgent",
        city: "Trnava",
    },
    {
        id: 2,
        bloodType: "O-",
        bloodSubType: "RhdPositiv",
        fenotype: "C+c-E-e+K-",
        name: "Michala Kovačičová",
        age: 23,
        gender: "Female",
        distance: 10,
        date: "12.1.2020",
        time: "22 hrs",
        priority: "urgent",
        city: "Bratislava",
    },
    {
        id: 3,
        bloodType: "A+",
        bloodSubType: "RhdPositiv",
        fenotype: "C+c-E-e+K-",
        name: "Patrik Mrázek",
        age: 6,
        gender: "Male",
        distance: 15.3,
        date: "12.1.2020",
        time: "5 hrs",
        priority: "urgent",
        city: "Senica",
    },
    {
        id: 4,
        bloodType: "0+",
        bloodSubType: "RhdPositiv",
        fenotype: "C+c-E-e+K-",
        name: "Filip Einstein",
        age: 26,
        gender: "Male",
        distance: 105.3,
        date: "10.1.2020",
        time: "15 days",
        priority: "urgent",
        city: "Hlohovec",
    },

];

const user = {
    avatar: require('./assets/avatar.jpg')
};

var markers = [
    {
        coordinate: {
            latitude: 48.6507634,
            longitude: 17.8360907,
        },
        title: 'Národná transfúzna služba SR',
        subtitle: 'Trnava'
    },
    {
        coordinate: {
            latitude: 48.191144,
            longitude: 17.1839752,
        },
        title: 'Národná transfúzna služba SR',
        subtitle: 'Bratislava Limbová'
    },
    {
        coordinate: {
            latitude: 48.1971316,
            longitude: 17.2472589,
        },
        title: 'Národná transfúzna služba SR',
        subtitle: 'Bratislava Ružinov'
    },
    {
        coordinate: {
            latitude: 48.0975637,
            longitude: 18.0142671,
        },
        title: 'Národná transfúzna služba SR',
        subtitle: 'Nové Zámky'
    },
    {
        coordinate: {
            latitude: 48.6446028,
            longitude: 18.7271306,
        },
        title: 'Národná transfúzna služba SR',
        subtitle: 'Trenčín'
    }
];

var help = [
    {
        title: "Choroby, operácie a lieky",
        questions: [
            {
                question: "Môžem ísť na odber, ak bol pred dvoma mesiacmi hospitalizovaný na infekčnom kvôli vírusu?",
                answer: "V tomto prípade je dôležité, či užívate ešte nejaké lieky v súvislosti s týmto ochorením, či ste ešte v sledovaní infektológa, či ste mali odvtedy ešte nejaké ťažkosti ako vracanie a hnačky.\n" +
                    "Ak ste na všetky otázky odpovedali \"nie\", môžete darovať krv."
            },
            {
                question: "Môžem darovať ak mám psoriázu?",
                answer: "Darovať krv môžete v prípade, že psoriatické ložiská nie sú rozsiahle, sú v \"kľudovom\" štádiu, teda bez zápalu a mokvania. Vyšetrujúci lekár na transfúznej stanici vás vyšetrí a rozhodne, či môžete darovať krv."
            },
            {
                question: "Ako dlho po užívaní antibiotík sa nesmie darovať krv?",
                answer: "Po užívaní antibiotík môžete ísť darovať krv po 14 dňoch, ak v priebehu týchto 2 týždňov nemáte známky žiadneho ochorenia."
            },
            {
                question: "Dala som si prepichnúť uši, môžem darovať?",
                answer: "Prepichnutie uší alebo aj iných častí tela, teda piercing je prekážkou. Po taktom zákroku nemôžete darovať krv šesť mesiacov."
            },
            {
                question: "Nízky tlak",
                answer: "Ak máte dlhodobo nižší krvný tlak, nemáte však pri tom žiadne ťažkosti ako závrate, točenie hlavy, slabosti, nemáte ťažkosti s \"odpadávaním\" v určitých situáciách ( napr. pri dlhšom státí) - tak po primeranej hydratácii, t.j. pred odberom vypijete aspoň pol litra tekutín - tak krv darovať môžete."
            },
            {
                question: "Celiakia",
                answer: "Ak máte pri celiakii dobré výsledky krvného obrazu, tak krv darovať môžete (väčšinou však celiatici nemajú dobré hodnoty v krvnom obraze)."
            },
            {
                question: "Lieky na bolesť chrbtice",
                answer: "Počas užívania liekov nemôžete darovať krv, keď ťažkosti prejdú a nebudete potrebovať žiadnu liečbu min. 7 dní, tak môžete darovať krv."
            },
            {
                question: "Vysoký krvný tlak, liek Dopegyt",
                answer: "Pri potrebe užívania tohto lieku nie je vhodné darovať krv."
            },
            {
                question: "Pľúcne chlamýdie",
                answer: "Ak máte ťažkosti, napr. pretrvávajúci kašeľ, únava, zvýšené teploty tak krv darovať nemôžete. Ak sa cíti úplne zdravá, a ste minim 2 týždne po využívaní antibiotík a neužívate žiadne iné lieky, tak krv darovať môžete."
            },
            {
                question: "Ochoriem vždy po darovaní",
                answer: "Odber krvi je pre organizmus istá forma záťaže a stresu, u citlivejších jedincov sa takáto záťaž môže prejaviť prechodným oslabením imunity. Preto je veľmi dôležité po odbere mať dostatok odpočinku, dostatok spánku, telesne nepreťažovať organizmus, a mať stravu bohatú na vitamíny, u vás by bolo vhodné prechodne po odbere si dať aj multivitamíny určené pre darcov krvi."
            },
            {
                question: "Prekonaná mononukleóza",
                answer: "Po prekonanej mononukleóze môžete krv darovať, pokiaľ sa cítite zdravý, nie ste často chorý, nepotrebujete užívať lieky, nemáte zväčšené lymfatické uzliny."
            },
            {
                question: "Alergie",
                answer: "Pokiaľ nie je potrebné užívať lieky na alergiu a nie sú aktuálne prejavy ochorenia ako napr. silná nádcha, akútny kašeľ, ťažšie formy ekzémov - tak krv darovať môžete."
            },
            {
                question: "Očkovanie proti hepatitíde",
                answer: "Darovanie krvi po očkovaní proti hepatitíde - minimálne jeden týždeň po očkovaní sa nemôže krv darovať, t.j. medzi jednotlivými dávkami očkovania krv darovať môžete, pokiaľ nie sú žiadne zdravotné ťažkosti."
            },
            {
                question: "Senná nádcha",
                answer: "Čo sa týka darovania krvi pri sennej nádche - v čase prejavov nádchy a potreby užívania liekov krv darovať nemôže. Predpokladám, že keď je to senná nádcha - ťažkosti sú skôr v jarných a letných mesiacoch - v takomto prípade je najlepšie prísť darovať krv v zimných mesiacoch."
            },
            {
                question: "Vyliečenie hyperaktívnej štítnej žľazy",
                answer: "Po liečbe štítnej žľazy sa krv vo všeobecnosti darovať môže, ak nepotrebujete užívať už žiadne lieky."
            },
            {
                question: "Vysoký krvný tlak",
                answer: "Pri liečbe vysokého krvného tlaku nie je vhodné darovať krv."
            },
            {
                question: "Prekonaná infekčná žltačka",
                answer: "Darovať krv môžete len ak sa jednalo o žltačku - hepatitídu typu A, neužívate žiadne lieky a máte výsledky pečeňových testov v norme. Pri vyplnení dotazníka darcov a lekárskom vyšetrení musíte uviesť prekonanie infekčných ochorení."
            },
            {
                question: "Darovanie krvi po prekonaní boreliózy a toxoplazmózy",
                answer: "Krv sa môže darovať po uplynutí minimálne 6 mesiacov od laboratórne potvrdeného vyliečenia."
            },
            {
                question: "Očkovanie proti tetanu, čiernemu kašľu.",
                answer: "Po očkovaní proti tetanu, diftérii, čiernemu kašľu sa môže darovať krv, ak je darca zdravý. Môže v podstate hneď na druhý deň, ale je lepšie počkať aspoň 2-3 dni, ak by sa objavili komplikácie očkovania ako teploty, zapálené miesto vpichu očkovacej látky  - vtedy sa krv nedaruje."
            },
            {
                question: "Očkovanie proti chrípke",
                answer: "Po očkovaní proti chrípke môžete darovať krv - najlepšie je počkať 2-3 dni a ak sa nie sú žiadne zdravotné problémy, krv môže byť odobratá. Po očkovaní proti chrípke sa niekedy môže vyskytnúť tzv. flu-like syndrom, kedy môžete pociťovať niečo ako ľahké prechladnutie, resp. \"ľahká\" chrípka - vtedy nie je vhodné krv darovať."
            },
            {
                question: "Cukrovka. Môže sa pri diabetes darovať krv?",
                answer: "Nie, cukrovkári nemôžu darovať krv,  užívanie antidiabetík nie je vhodné pri darovaní krvi."
            },
            {
                question: "Hmyz. Môžem darovať po uštipnutí včelou?",
                answer: "Po uštipnutí včelou môžete krv darovať, pokiaľ nemáte prejavy nejakej silnej lokálnej alergickej reakcie; to znamená veľký opuch, známky zápalu v mieste uštipnutia, ak ste nemali prejavy celkovej ťažkej alergickej reakcie, tzy. anafylaktickej reakcie. Pri vyšetrení informujte transfuziologického lekára a ukážte mu miesto poštípania."
            },
            {
                question: "Ako dlho po laserovej operácii očí nemôžem darovať krv?",
                answer: "Po laserovej operácii, pokiaľ nemáte žiadne komplikácie, môžete darovať krv po mesiaci."
            },
            {
                question: "V triede sa vyskytol čierny kašeľ, ale ja nejavím žiadne príznaky a zajtra mám na pláne ísť darovať krv... môžem ísť?",
                answer: "V prípade, ak ste prišli priamo do styku s ochorením, doporučujem nedarovať krv po dobu minimálne troch týždňov. Ak sa počas tejto doby u vás neprejavia príznaky žiadneho ochorenia tak môžete krv darovať."
            },
            {
                question: "Mal som zvýšené leukocity a zistili pri odbere že mám ASLO,bral som antibiotiká.Chcem sa spýtať, kedy môžem darovať krv?",
                answer: "Krv môžete darovať mesiac po užívaní antibiotík, ak výsledky krvného obrazu budú v norme a počet leukocytov upravený."
            },
            {
                question: "Neurogénna tetánia",
                answer: "Neurogénna tetánia je tzv. zvratné ochorenie, ktorého liečba  spočíva v dostatočnej relaxácii organizmu a doplnení minerálov hlavne horčíka a vápnika.\n" +
                    "\n" +
                    "Rozhodnutie, či pacient s takouto diagnózou môže darovať krv je veľmi individuálne - závisí od toho, aké konkrétne prejavy tohto ochorenia sa u pacienta vyskytli, posúdi sa ich závažnosť, intenzita, frekvencia...Ak chcete darovať krv, doporučujem Vám zobrať si so sebou na transfúznu stanicu svoju zdravotnú dokumentáciu (zdravotnú kartu) aj s výsledkami absolvovaných vyšetrení a vyšetrujúci lekár zhodnotí Váš stav a rozhodne či už môžete krv darovať, alebo ešte s darovaním nejakú dobu počkať."
            },
            {
                question: "Tetania a zvýšené aslo",
                answer: "Zvýšené ASLO nie je problémom, krv sa darovať môže ak nemáte iné problémy v zmysle prejavov akútneho ochorenia (teploty, nádchu, kašeľ, bolesti hrdla...)\n" +
                    "\n" +
                    "Tetania = tu nastáva trochu problém. Je potrebné vedieť bližšie okolnosti ochorenia, prejavov, liečby. Sú prejavy tetanie, ktoré dovoľujú darovať krv a sú také, pri ktorých to nie je možné. Najlepšie by bolo priniesť na transfúznu stanicu svoju zdravotnú kartu a transfúzny lekár rozhodne o vhodnosti darovania."
            },
            {
                question: "Po vyšetrení magnetickou rezonanciou ",
                answer: "MR vyšetrenie nie je problém, krv darovať môžete. Dôležitejší je dôvod, prečo Vám toto vyšetrenie robili - a pre ten Vás môžu vyradiť z darovania krvi."
            },
            {
                question: "V rodine máme 0+ a všetci máme alergiu na penicilín. Môže to súvisieť s našou krvnou skupinou?",
                answer: "Aj keď vo vedeckom svete existujú názory, že určité lektíny v potravinách, v peli rastlín by mohli vyvolať reakcie u ľudí s  určitým typom krvných skupín, neexistuje však vedecký dôkaz, že to tak naozaj funguje.\n" +
                    "\n" +
                    "Štúdie, ktoré sa zaoberali vzťahom medzi výskytom alergickej rinitídy (peľovej nádchy) a krvnými skupinami nedokázali žiadnu vzájomnú súvislosť."
            },
            {
                question: "Obličky. Prekonala som akútnu glomerulonefritídu, môžem byť darcom?",
                answer: "Po prekonaní akútnej glomerulonefritídy sa krv nemôže darovať 10 rokov."
            }
        ]
    },
    {
        title : "Autotransfúzia",
        questions: [
            {
                question: "Ako funguje autotransfúzia?",
                answer : "Autotransfúziu je ideálne pripraviť cca 2 týždne pred plánovanou operáciou. Avšak dá sa odber urobiť aj dva-tri dni pred operáciou. Dôležité je, o akú operáciu ide a aké hodnoty krvného obrazu má pacient. Počet odberov krvi pred transfúziou by mal určiť transfúzny lekár v spolupráci s lekárom, ktorý operáciu odporúča."
            }
        ]
    },
    {
        title : "Hmotnosť, vek a odstup medzi odbermi",
        questions: [
            {
                question: "Osemnásť budem mať o dva dni, môžem ísť darovať už dnes?",
                answer : "Podľa platnej legislatívy krv môžete darovať až keď dosiahnete vek 18 rokov. Takže na prvý odber môžete prísť v deň Vašich narodenín."
            },
            {
                question: "Môžem darovať krv aj pred uplynutím trojmesačnej lehoty? (O týždeň - dva skôr?)",
                answer : "Môžete, pokiaľ budete mať dobré výsledky predodberových krvných vyšetrení."
            },
            {
                question: "Ako je to s odstupmi medzi odbermi? V Liptovskom Mikuláši to striktne dodržiavajú, v Martine ma zoberú aj po dvoch mesiacoch.",
                answer : "Podľa platných doporučení a predpisov môže muž darovať krv max. 4x do roka, teda á 3 mesiace v pravidelných intervaloch. Odber môže byť urobený aj po 2 mesiacoch v prípade, že sú dobré krvné výsledky, ale počet odberov do roka nesmie prekročiť."
            },
            {
                question: "Je pravda, že darovať krv môžem až rok po operácii?",
                answer : "Všeobecne platí, že po operácii sa nemôže darovať krv minimálne 6 mesiacov. Dôvod operácie a jej rozsah však môžu tento interval prípadne predĺžiť."
            },
            {
                question: "Ak som bol naposledy darovať 4.2., môžem ísť 2.5? Alebo sa to berie striktne a doba musí byť aspoň tri mesiace?",
                answer : "Áno, môžete ísť darovať 2.5. - podmienkou je dobrý krvný obraz. Počet odberov v kalendárnom roku Vám však nemôže presiahnuť 4x. - takže nasledujúce intervaly budú musieť byť dlhšie."
            },
            {
                question: "Prečo môže žena darovať krv iba raz za štyri mesiace, i keď má dostatok hemoglobínu a je zdravá?",
                answer : "Žena môže ísť darovať aj po 3 mesiacoch, ak má dobré výsledky krvného obrazu. Do roka však max. 3-krát. Vyplýva to zo zákona a je to ochrana darkyne krvi, aby nebolo ohrozené jej zdravie."
            },
            {
                question: "Vážim menej ako 50 kg, mám však 18 rokov a som zdravá. Môžem darovať krv?",
                answer : "Darca krvi musí vážiť minimálne 50 kg. Toto kritérium je určené vyhláškou ministerstva zdravotníctva a vyplýva z dodržania hranice bezpečnosti odberu u darcu krvi a z hľadiska dodržania kvality krvného výrobku.\n" +
                    "\n" +
                    "Pod 50 kg sa odber nerobí, pretože odobratím potrebného množstva krvi (450ml) by bol už ohrozený samotný darca. Jednoducho jemu samému by už ostalo malo krvi pre normálne fungovanie celého organizmu."
            },
            {
                question: "Prečo musí mať darca nad 50 kg. Veď aj človek do 50 kg má toľko krvi ako ťažší človek.",
                answer : "Množstvo krvi, ktoré cirkuluje v tele je závislé na hmotnosti človeka - je to cca 8% hmotnosti. To znamená , že ľudia, ktorí menej vážia, majú aj menej krvi. Prečo práve 50kg? Pretože strata krvi 450 ml z celkove nižšieho objemu krvi už nie je bezpečná pre samotného darcu."
            },
            {
                question: "Prečo nemôžu darovať krv ľudia starší ako 65 rokov? Majú horšiu kvalitu krvi? Ublížilo by im darovanie vo vyššom veku?",
                answer : "Ľudia vo veku nad 65 rokov často užívajú lieky alebo majú nejaké ochorenia, pri ktorých sa nemôže darovať krv. Okrem toho samotný odber krvi je pre ich organizmus väčšia záťaž. Vyšší vek je spojený s vyšším výskytom napr. nádorových ochorení, ktoré sa nemusia ešte zistiť v čase odberu krvi."
            }
        ]
    },
    {
        title : "Autotransfúzia",
        questions: [
            {
                question: "x",
                answer : "x"
            }
        ]
    }
];

export {requests, user, markers, help}