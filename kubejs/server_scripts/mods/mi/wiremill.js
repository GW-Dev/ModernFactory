ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/wiremill/${id}`;


    // red alloy wire recipe
    event.recipes.modern_industrialization.wiremill(8, 100)
        .itemIn(mr('red_alloy_ingot'))
        .itemOut('2x ' + mr('red_alloy_wire'))
        .id(mf('red_alloy_wire'))
    
})