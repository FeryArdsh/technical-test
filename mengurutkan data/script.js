const data = [
    {
        nama: "indomie",
        harga: 3000,
        rating: 5,
        likes: 150
    },
    {
        nama: "laptop",
        harga: 4000000,
        rating: 4.5,
        likes: 123
    },
    {
        nama: "aqua",
        harga: 3000,
        rating: 4,
        ikes: 250
    },
    {
        nama: "smartTv",
        harga: 4000000,
        rating: 4.5,
        likes: 42
    },
    {
        nama: "headphone",
        harga: 4000000,
        rating: 3.5,
        likes: 90
    },
    {
        nama: "verySmartTv",
        harga: 4000000,
        rating: 3.5,
        likes: 87
    },
]

const urutkanHarga = (a, b) => {
    if (a.harga < b.harga) {
        return -1
    }
    if (a.harga > b.harga) {
        return 1
    }
    return 0
}


const urutkanRating = (a, b) => {
    if (a.rating < b.rating) {
        return 1
    }
    if (a.rating > b.rating) {
        return -1
    }
    return 0
}

const urutkanLikes = (a, b) => {
    if (a.likes < b.likes) {
        return 1
    }
    if (a.likes > b.likes) {
        return -1
    }
    return 0
}


const hasilUrutan = (a, b) => {
    const hasilHarga = urutkanHarga(a, b)
    if (hasilHarga !== 0) {
        return hasilHarga
    }

    const hasilRating = urutkanRating(a, b)
    if (hasilRating !== 0) {
        return hasilRating
    }

    return urutkanLikes(a, b)
}
console.log(data.sort(hasilUrutan))




