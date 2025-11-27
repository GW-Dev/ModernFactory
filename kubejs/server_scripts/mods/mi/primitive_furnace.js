ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/primitive_furnace/${id}`;


    // starter bronze nugget recipe
    event.recipes.modern_industrialization.primitive_furnace(1, 400)
        .itemIn(mi('bronze_dust'))
        .itemOut(mi('bronze_nugget'))
        .adjacentBlock(mc('campfire'), 'below')
        .id(mf('bronze_nugget'))
    
    // cobble -> stone
    event.recipes.modern_industrialization.primitive_furnace(1, 200)
        .itemIn(mc('cobblestone'))
        .itemOut(mc('stone'))
        .adjacentBlock(mc('campfire'), 'below')
        .id(mf('stone'))

    // charcoal
    event.recipes.modern_industrialization.primitive_furnace(1, 400)
        .itemIn('#minecraft:logs_that_burn')
        .itemOut(mc('charcoal'))
        .adjacentBlock(mc('campfire'), 'below')
        .id(mf('charcoal'))

    // bricks
    event.recipes.modern_industrialization.primitive_furnace(1, 400)
        .itemIn(mc('clay_ball'))
        .itemOut(mc('brick'))
        .adjacentBlock(mc('campfire'), 'below')
        .id(mf('brick'))
})