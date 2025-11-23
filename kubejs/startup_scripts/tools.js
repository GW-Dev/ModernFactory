ItemEvents.toolTierRegistry(event => {
  event.add('bronze', tier => {
    tier.uses = 400
    tier.speed = 5
    tier.attackDamageBonus = 1.5
    tier.enchantmentValue = 18
    tier.repairIngredient = '#c:ingots/bronze'
  })

    event.add('steel', tier => {
    tier.uses = 1561
    tier.speed = 8
    tier.attackDamageBonus = 3
    tier.enchantmentValue = 12
    tier.repairIngredient = '#c:ingots/steel'
  })
})

StartupEvents.registry("armor_material", (event) => {
    event
        .create(`bronze`)
        .defense({
            helmet: 2,
            chestplate: 4,
            leggings: 5,
            boots: 2,
        })
        .enchantmentValue(18)
        .equipSound(`minecraft:item.armor.equip_iron`)
        .repairIngredient(() => Ingredient.of('#c:ingots/bronze'))
        .toughness(0)
        .knockbackResistance(0);
});

StartupEvents.registry('item', event => {
 
  // healing axe
  event.create('healing_axe', 'axe').tier('diamond')

  // bronze items
  event.create('bronze_axe', 'axe').tier('bronze')
  event.create('bronze_boots', 'boots').material('kubejs:bronze')
  event.create('bronze_chestplate', 'chestplate').material('kubejs:bronze')
  event.create('bronze_helmet', 'helmet').material('kubejs:bronze')
  event.create('bronze_hoe', 'hoe').tier('bronze')
  event.create('bronze_leggings', 'leggings').material('kubejs:bronze')
  event.create('bronze_pickaxe', 'pickaxe').tier('bronze')
  event.create('bronze_shovel', 'shovel').tier('bronze')
  event.create('bronze_sword', 'sword').tier('bronze')
})
