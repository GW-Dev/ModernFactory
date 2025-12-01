RecipeViewerEvents.removeCategories(event => {
	event.remove(mr('soldering'))
})

RecipeViewerEvents.removeEntries('item', event => {

        // -- HIDDEN ITEMS -- //
    const ITEMS_TO_HIDE = [
        mr('soldering_table'),
        fs('fluid_1'),
        fs('fluid_2'),
        fs('fluid_4'),
        fs('framed_fluid_1'),
        fs('framed_fluid_2'),
        fs('framed_fluid_4'),
        fs('armory_cabinet'),
        fs('obsidian_upgrade'),
        fs('water_generator_upgrade'),
        fs('dripping_upgrade'),
        hnn('twilight_prediction'),
        bz('omni_spade'),
        bz('auto_placer'),
        bz('block_replacer'),
        bz('meta_wand'),
        bz('block_extend'),
        bz('checkered_spade'),
        bz('color_changer'),
        bz('block_randomizer'),
    ];
    ITEMS_TO_HIDE.forEach(ITEMS_TO_HIDE => event.remove(ITEMS_TO_HIDE));
})