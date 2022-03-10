function DNAtoRNA(dna) {
    return  dna.split("").map(function(el){if (el=="T"){return el="U"}return el}).join("")
    }