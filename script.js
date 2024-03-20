const justFood= (pocetLidi) => {
    return `Just Food pro ${pocetLidi} lidí za ${pocetLidi*200} Kč.`
}

const yourMama = (pocetLidi) => {
    return `Your Mama pro ${pocetLidi} lidí za ${pocetLidi*500} Kč.`
}

const flavourHaven = (pocetLidi) => {
    return `Flavour Haven pro ${pocetLidi} lidí za ${pocetLidi*1000} Kč.`
}

console.log(justFood(100))
console.log(yourMama(100))
console.log(flavourHaven(100))

const createEvent = (udalost, pocetLidi, funkce) => {
    return console.log(`${udalost} s cateringem od ${funkce(pocetLidi)}`)
}

createEvent("Nanebevzetí Aštara Šerana", 100, justFood)
createEvent("Denethorova svačina", 50, yourMama)
createEvent("Hostina v Lepší než život", 5, flavourHaven)
