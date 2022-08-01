function DNAStrand(dna) {
    let complementaryDna = [];
    for (let i = 0; i < dna.length; i++){
        if (dna[i] == 'A') {
            complementaryDna[i] = 'T'
        }
        if (dna[i] == 'T') {
            complementaryDna[i] = 'A'
        }
        if (dna[i] == 'G') {
            complementaryDna[i] = 'C'
        }
        if (dna[i] == 'C') {
            complementaryDna[i] = 'G'
        }
    }
    return complementaryDna.join('');
}

console.log(DNAStrand('ATTGCCGTA'))