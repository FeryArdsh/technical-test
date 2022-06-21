function kalkulator(input) {
    let ambilNilai = input.split(" ")
    let nilaiPertama = parseInt(ambilNilai[0])
    let nilaiKedua = parseInt(ambilNilai[2])

    if (nilaiPertama <= 1000000 && nilaiKedua <= 1000000) {
        return (console.log(eval(input)))
    }
    return console.log("Angka tiak boleh lebih dari 1000000")
}

kalkulator("13 + 187") //200
kalkulator("134 - 11") //123
kalkulator("8 * 7") //56
kalkulator("16 / 4") //4
kalkulator("20000000 + 12") //angka tidak boleh lebih dari 1 juta
