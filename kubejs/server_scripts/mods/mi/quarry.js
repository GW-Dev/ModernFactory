ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/quarry/${id}`;

    // -- REMOVED RECIPES -- //
    const RECIPES_TO_REMOVE = [
        mi('quarry/bronze'),
        mi('quarry/copper')
    ];
    RECIPES_TO_REMOVE.forEach(id => event.remove( {id: id} ));

    event.recipes.modern_industrialization.quarry(8, 600)
        .itemIn('1x ' + mi('bronze_drill'), 0.04)
        .itemOut(mc('iron_ore'), 0.4)
        .itemOut(mc('coal_ore'), 0.4)
        .itemOut(mi('lignite_coal_ore'), 0.24)
        .itemOut(mc('copper_ore'), 0.2)
        .itemOut(mi('tin_ore'), 0.3)
        .itemOut(mc('gold_ore'), 0.15)
        .itemOut(mc('redstone_ore'), 0.2)
        .id(mf('bronze'))

    event.recipes.modern_industrialization.quarry(8, 600)
        .itemIn('1x ' + mi('copper_drill'), 0.1)
        .itemOut('32x ' + mc('cobblestone'), 0.5)
        .itemOut('16x ' + mc('diorite'), 0.25)
        .itemOut('16x ' + mc('andesite'), 0.25)
        .itemOut('16x ' + mc('granite'), 0.25)
        .itemOut('10x ' + mc('dirt'), 0.5)
        .itemOut('10x ' + mc('gravel'), 0.5)
        .itemOut('16x ' + mc('cobbled_deepslate'), 0.25)
        .itemOut('16x ' + mc('tuff'), 0.25)
        .id(mf('copper'))
    
})