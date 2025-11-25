ServerEvents.tags('block', event => {
    event.remove('minecraft:needs_stone_tool', 'minecraft:iron_ore')
    event.remove('minecraft:needs_stone_tool', 'minecraft:deepslate_iron_ore')
    event.add('minecraft:needs_iron_tool', 'minecraft:iron_ore')
    event.add('minecraft:needs_iron_tool', 'minecraft:deepslate_iron_ore')
})
ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:stone_age/ores/${id}`;

    // -- REMOVED RECIPES -- //
    const VANILLA_DELETED_SMELTING = [
        mc('iron_ingot_from_smelting_raw_iron'),
        mc('iron_ingot_from_blasting_raw_iron'),
        mc('copper_ingot_from_smelting_raw_copper'),
        mc('copper_ingot_from_blasting_raw_copper'),
        mc('gold_ingot_from_smelting_raw_gold'),
        mc('gold_ingot_from_blasting_raw_gold'),
    ];
    VANILLA_DELETED_SMELTING.forEach(id => event.remove( {id: id} ));

    const MI_DELETED_SMELTING = [
        'antimony',
        'iridium',
        'lead',
        'nickel',
        'silver',
        'tin'
    ];

    const SMELTING_TYPES = [
        'smelting',
        'blasting',
    ]

    MI_DELETED_SMELTING.forEach(MI_DELETED_SMELTING => {
        SMELTING_TYPES.forEach(SMELTING_TYPES => {
            const recipeId = `modern_industrialization:materials/${MI_DELETED_SMELTING}/smelting/raw_metal_to_ingot_${SMELTING_TYPES}`;
            event.remove( {id: recipeId} ) 
        } )
    } );

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let mortar = (id, turns, fluid_outputs, item_inputs, item_outputs) => {
        let newRecipe = {
            type: ed('mortar'),
            fluidOut: fluid_outputs,
            grinds: turns,
            result: item_outputs
        }
        if (item_inputs)
            newRecipe['ingredient'] = item_inputs;
        event.custom(newRecipe).id(id);
    }

    const MORTAR_GRINDING_RAW_ORES = [
        'iron',
        'copper',
        'gold',
        'tin'
    ]

    MORTAR_GRINDING_RAW_ORES.forEach(MORTAR_GRINDING_RAW_ORES => {
        let itemId = mc(`raw_${MORTAR_GRINDING_RAW_ORES}`);
        if (!Item.exists(itemId)) {
            itemId = mi(`raw_${MORTAR_GRINDING_RAW_ORES}`);
        }

        mortar(
            mf(MORTAR_GRINDING_RAW_ORES),
            8,
            {},
            [ { item: itemId } ],
            { 
                count: 1,
                id: mi(`${MORTAR_GRINDING_RAW_ORES}_dust`)
            },
        )
    })
})