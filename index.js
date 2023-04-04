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
console.log("plus grand nombre du tableau " + tab + " : " + plusGrandNombre(tab));

let chaineSansVoyelles = (chaine) => {
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
console.log("Chaine avec voyelles : " + chaine + "Chaine sans voyelles : " + chaineSansVoyelles(chaine));