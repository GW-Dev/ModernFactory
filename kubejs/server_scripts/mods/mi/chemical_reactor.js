ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/chemical_reacotr/${id}`;


    // eye of ender recipe
    event.recipes.modern_industrialization.chemical_reactor(8, 600)
        .itemIn(mc('ender_pearl'))
        .itemIn(mc('blaze_powder'))
        .itemOut(mc('ender_eye'))
        .id(mf('eye_of_ender'))
    
})