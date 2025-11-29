ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/blast_furnace/${id}`;


    // red alloy ingot recipe
    event.recipes.modern_industrialization.blast_furnace(8, 200)
        .itemIn('2x ' + mi('steel_ingot'))
        .fluidIn('100x ' + mi('molten_redstone'))
        .itemOut('1x ' + mr('red_alloy_ingot'))
        .id(mf('red_alloy_ingot'))

    // prediction matrix recipe
    event.recipes.modern_industrialization.blast_furnace(8, 200)
        .itemIn('2x ' + mi('steel_plate'))
        .itemIn('4x #c:glass_panes')
        .fluidIn('800x ' + mi('liquid_ender'))
        .itemOut('8x ' + hnn('prediction_matrix'))
        .id(mf('prediction_matrix'))

    // liquid ender recipe
    event.recipes.modern_industrialization.blast_furnace(8, 200)
        .itemIn('1x ' + ae('ender_dust'))
        .fluidOut('100x ' + mi('liquid_ender'))
        .id(mf('liquid_ender'))
    
})