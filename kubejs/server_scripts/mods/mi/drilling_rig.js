ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/drilling_rig/${id}`;

    event.recipes.modern_industrialization.oil_drilling_rig(16, 200)
        .itemIn('1x ' + mi('gold_drill'), 0.05)
        .fluidOut('500x ' + mc('lava'))
        .id(mf('lava'))
    
})