ServerEvents.tags('block', event => {
    event.remove('minecraft:needs_stone_tool', 'minecraft:iron_ore')
    event.remove('minecraft:needs_stone_tool', 'minecraft:deepslate_iron_ore')
    event.add('minecraft:needs_iron_tool', 'minecraft:iron_ore')
    event.add('minecraft:needs_iron_tool', 'minecraft:deepslate_iron_ore')
})

ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:stone_age/${id}`;

    // -- REMOVED RECIPES -- //
    const VANILLA_DELETED_SMELTING = [
        mc('iron_ingot_from_smelting_raw_iron'),
        mc('iron_ingot_from_blasting_raw_iron'),
        mc('iron_ingot_from_smelting_iron_ore'),
        mc('iron_ingot_from_blasting_iron_ore'),
        mc('iron_ingot_from_smelting_deepslate_iron_ore'),
        mc('iron_ingot_from_blasting_deepslate_iron_ore'),
        mc('copper_ingot_from_smelting_raw_copper'),
        mc('copper_ingot_from_blasting_raw_copper'),
        mc('gold_ingot_from_smelting_raw_gold'),
        mc('gold_ingot_from_blasting_raw_gold'),
        fb('framing_saw/framed_item_frame'),
        fb('framing_saw/framed_glowing_item_frame'),
        th('goggles_arcane_workbench'),
        th('thavmite_vanguard_helmet_infusion'),
        th('thavmite_vanguard_chestplate_infusion'),
        th('thavmite_vanguard_leggings_infusion'),
        th('thavmite_vanguard_boots_infusion'),
        es('ender_pouch'),
        cc('printed_book'),
        fd('book_from_canvas'),
        mc('furnace'),
        mc('paper'),
        mc('sugar_from_sugar_cane'),
        fd('paper_from_tree_bark'),
        su('lunch_basket')
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
            mf('ores/' + MORTAR_GRINDING_RAW_ORES),
            8,
            {},
            [ { item: itemId } ],
            { 
                count: 1,
                id: mi(`${MORTAR_GRINDING_RAW_ORES}_dust`)
            },
        )
    })

        // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let drying = (id, cook_time, xp, item_inputs, item_outputs) => {
        let newRecipe = {
            type: ed('drying_rack'),
            cookingtime: cook_time,
            experience: xp,
            result: item_outputs
        }
        if (item_inputs)
            newRecipe['ingredient'] = item_inputs;
        event.custom(newRecipe).id(id);
    }

    // tanned leather recipe
    drying(
        mf('tanned_leather'),
        2000,
        10.0,
        [ {tag: 'c:leathers'} ],
        {
            count: 1,
            id: kj('tanned_leather')
        }
    )

    event.smelting(
        su('ash'),
        mi('wood_pulp')
    ).cookingTime(200).id(mf('ash_from_wood_pulp'))

    event.replaceInput(
        {input: mc('leather')},
        mc('leather'),
        kj('tanned_leather')
    )

    event.replaceInput(
        {id: hg('glider_wing')},
        mc('stick'),
        mi('bronze_rod')
    )

    event.replaceInput(
        {id: hg('glider_framework')},
        mc('iron_ingot'),
        mi('iron_rod')
    )

    event.replaceInput(
        {id: 'morphtool:tool'},
        mc('iron_ingot'),
        mi('iron_rod')
    )

    event.replaceInput(
        {id: mc('piston')},
        mc('iron_ingot'),
        mi('iron_rod')
    )

    event.replaceInput(
        {id: mc('glider_framework')},
        mc('iron_ingot'),
        mi('bronze_ingot')
    )

    event.shaped(Item.of(mc('furnace')),
    [   'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: '#minecraft:stone_tool_materials',
        B: '#c:ingots/bronze'

    }).id(mf('furnace'))

        event.shaped(Item.of(mt('primitive_furnace')),
    [   'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: mc('mud_bricks'),
        B: mc('campfire')

    }).id(mf('primitive_furnacr'))

})