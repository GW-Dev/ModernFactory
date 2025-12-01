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

    // warp dust recipe
    event.recipes.modern_industrialization.blast_furnace(8, 200)
        .itemIn('1x ' + mc('amethyst_shard'))
        .fluidIn('100x ' + mi('liquid_ender'))
        .itemOut('2x ' + wy('warp_dust'))
        .id(mf('warp_dust'))

    // dormant shard recipe
    event.recipes.modern_industrialization.blast_furnace(8, 200)
        .itemIn('4x ' + wy('warp_dust'))
        .itemIn('1x ' + mi('diamond_large_plate'))
        .itemOut('1x ' + wy('dormant_shard'))
        .id(mf('dormant_shard'))

    // warp stone recipe
    event.recipes.modern_industrialization.blast_furnace(8, 400)
        .itemIn('1x ' + wy('dormant_shard'))
        .itemIn('4x ' + mi('stainless_steel_large_plate'))
        .fluidIn('5000x ' + mi('liquid_ender'))
        .itemOut('1x ' + wy('warp_stone'))
        .id(mf('warp_stone'))
    
})