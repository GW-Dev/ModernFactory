ServerEvents.tags('block', event => {
    event.remove('minecraft:needs_stone_tool', 'minecraft:iron_ore')
    event.remove('minecraft:needs_stone_tool', 'minecraft:deepslate_iron_ore')
    event.add('minecraft:needs_iron_tool', 'minecraft:iron_ore')
    event.add('minecraft:needs_iron_tool', 'minecraft:deepslate_iron_ore')
})