function heroicInventory(arr) {
    class Hero {
        constructor(name, level, items) {
            this.name = name;
            this.level = Number(level);
            this.items = items;
        }
    }
    let heroes = [];
    arr.forEach(hero => {
        let [name, level, items] = hero.split(" / ");
        items = items ? items.split(", ") : [];
        heroes.push(new Hero(name, level, items));
    });
    return JSON.stringify(heroes);
}

console.log(heroicInventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ]));