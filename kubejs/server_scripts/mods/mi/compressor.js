ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/compressor/${id}`;

    // -- REMOVED RECIPES -- //
    const RECIPES_TO_REMOVE = [
        mi('materials/diamond/compressor/main'),
        mi('materials/emerald/compressor/main'),
        wi('quartz_sphere')
    ];
    RECIPES_TO_REMOVE.forEach(id => event.remove( {id: id} ));

    event.recipes.modern_industrialization.compressor(32, 800)
            .itemIn('1x ' + mc('diamond'))
            .itemOut(mi('diamond_plate'))
            .id(mf('diamond_plate'))

    event.recipes.modern_industrialization.compressor(32, 800)
            .itemIn('1x ' + mc('emerald'))
            .itemOut(mi('emerald_plate'))
            .id(mf('emerald_plate'))
        
    event.recipes.modern_industrialization.compressor(2, 800)
            .itemIn('8x ' + mc('quartz'))
            .itemOut(wi('quartz_sphere'))
            .id(mf('quartz_sphere'))

})