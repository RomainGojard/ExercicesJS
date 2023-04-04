const somme = (nombre1, nombre2) => {
    return nombre1 + nombre2;
}

console.log("somme de 3 et 4 : " + somme(3, 4));

const plusGrandNombre = (tab) => {
    if (tab.length === 0){
        return false;
    }else {
        let resultat = tab[0];
            tab.forEach(nombre =>{
                if (nombre > resultat){
                    resultat = nombre;
                }
        })

        return resultat;
    }
}
const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("\nPlus grand nombre du tableau " + tab + " : " + plusGrandNombre(tab));

const chaineSansVoyelles = (chaine) => {
    const voyelles = ['a', 'e', 'y', 'u', 'i', 'o'];
    let nouvelleChaine = "";
    [...chaine].forEach(lettre => {
        if (!voyelles.includes(lettre)){
            nouvelleChaine += lettre;
        }
    })
    return nouvelleChaine;
}

const chaine = "Coucou les copains";
console.log("\nChaine avec voyelles : " + chaine + "\nChaine sans voyelles : " + chaineSansVoyelles(chaine));

const chainesTriees = (tabChaines) => tabChaines.sort();

const tabChaines = ["Javascript", "Classique", "JePreferePython"];
console.log("\nChaines pas triées : " + tabChaines + "\nChaines triées : " + chainesTriees(tabChaines));

const nombreEnLettre = (nombre) => {
    const unite = nombre % 10
    const dizaine = (nombre - unite) / 10

    let uniteEnLettre = '';
    switch (unite) {
        case 1 : uniteEnLettre = "un" ;
        break
        case 2 : uniteEnLettre = "deux";
        break
        case 3 : uniteEnLettre = "trois";
        break
        case 4 : uniteEnLettre = "quatre";
        break
        case 5 : uniteEnLettre = "cinq";
        break
        case 6 : uniteEnLettre = "six";
        break
        case 7 : uniteEnLettre = "sept";
        break
        case 8 : uniteEnLettre = "huit";
        break
        case 9 : uniteEnLettre = "neuf";
        break
    }

    let dizaineEnLettre = '';
    switch (dizaine) {
        case 1 : dizaineEnLettre = "dix" ;
            break
        case 2 : dizaineEnLettre = "vingt";
            break
        case 3 : dizaineEnLettre = "trente";
            break
        case 4 : dizaineEnLettre = "quarante";
            break
        case 5 : dizaineEnLettre = "cinquante";
            break
        case 6 : dizaineEnLettre = "soixante";
            break
        case 7 : dizaineEnLettre = "soixante-dix";
            break
        case 8 : dizaineEnLettre = "quatre-vingt";
            break
        case 9 : dizaineEnLettre = "quatre-vingt-dix";
            break
    }

    if(unite === 0){
        return dizaineEnLettre;
    }else{
        return dizaineEnLettre + '-' + uniteEnLettre;
    }
}

console.log("\nAfficher le nombre 42 en toute lettre : " + nombreEnLettre(42));

const tableauPropriete = (tabObjets, propriete) => {
    const tabResult = [];
    tabObjets.forEach(objet => {
        tabResult.push(objet[propriete]);
    })
    return tabResult;
}

const player = {
    name: "",
    active : true,
    age : 0,
    playertoString: function() {
        return (`${this.name}. Player actif ? ${this.active}. Âge du joueur : ${this.age}`);
    }
};

const player1 = Object.create(player);
player1.name = "Chico";
player1.age = 22;
const player2 = Object.create(player);
player2.name = "Lexio";
player2.age = 22;
const player3 = Object.create(player);
player3.name = "XxSasukexX";
player3.age = 12;
console.log("\nAffichage de l'attribut âge pour les joueurs : " + player1.playertoString() + "\t" + player2.playertoString() + "\t" + player3.playertoString() + "\n" + tableauPropriete([player1, player2, player3], "name"));

const comparerNombreDecroissant = (a, b) => {
    return b - a;
}

const nombresParOrdreDecroissant = (tabNombres) => {
    return tabNombres.sort(comparerNombreDecroissant);
}

const tabNombres = [200, 10, 5, 790, 56];
console.log("\nTri du tableau : " + tabNombres + " par ordre décroissant : " + nombresParOrdreDecroissant(tabNombres));

const chaineVoyellesEnMajuscule = (chaine) => {
    const voyelles = ['a', 'e', 'y', 'u', 'i', 'o'];
    let nouvelleChaine = "";
    [...chaine].forEach(lettre => {
        if (voyelles.includes(lettre)) {
            nouvelleChaine += lettre.toUpperCase();
        }else {
            nouvelleChaine += lettre;
        }
    })
    return nouvelleChaine;
}

console.log("\nLa chaine : " + chaine + " avec les voyelles en majuscules : " + chaineVoyellesEnMajuscule(chaine));

const nombreDeVoyelles = (chaine) => {
    const voyelles = ['a', 'e', 'y', 'u', 'i', 'o'];
    let nbVoyelles = 0;
    [...chaine].forEach(lettre => {
        if (voyelles.includes(lettre)) {
            nbVoyelles ++;
        }
    })
    return nbVoyelles;
}

console.log("\nLa chaine : " + chaine + " contient " + nombreDeVoyelles(chaine) + " voyelles");

const chaineConsonnesEnMajuscule = (chaine) => {
    const voyelles = ['a', 'e', 'y', 'u', 'i', 'o'];
    let nouvelleChaine = "";
    [...chaine].forEach(lettre => {
        if (!voyelles.includes(lettre)) {
            nouvelleChaine += lettre.toUpperCase();
        }else {
            nouvelleChaine += lettre;
        }
    })
    return nouvelleChaine;
}

console.log("\nLa chaine : " + chaine + " avec les consonnes en majuscules : " + chaineConsonnesEnMajuscule(chaine));

// ****************************************
// TABLEAUX
// ****************************************

//1
const tableau = [0, 1, 2, 3, 4, 5, 6 , 7, 8, 9, 10];
tableau.forEach(nombre => console.log(nombre));