GTMOGSStartupEvents.worldGenLayers(event => {
    event.create('twilight_forest', layer => {        
        layer.targets('#minecraft:stone_ore_replaceables')
        layer.dimensions('twilightforest:twilight_forest')
    })
})
