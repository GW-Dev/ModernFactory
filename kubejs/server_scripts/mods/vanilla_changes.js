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
        mc('furnace'),
        mc('paper'),
        mc('piston'),
        mc('sugar_from_sugar_cane'),
        mc('iron_bars'),
        mc('bucket'),
        mc('ender_eye'),
        mc('bread'),
        mc('netherite_ingot'),
        mc('clock'),
        mc('compass'),
        mc('chain'),
        mc('blaze_powder'),
        mc('diamond_helmet'),
        mc('diamond_chestplate'),
        mc('diamond_leggings'),
        mc('diamond_boots'),
        mc('diamond_shovel'),
        mc('diamond_pickaxe'),
        mc('diamond_axe'),
        mc('diamond_hoe'),
        mc('diamond_sword'),
        mc('cauldron'),
        mc('brewing_stand'),
        mc('enchanting_table'),
        mc('beacon')
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

    event.replaceInput(
        {input: mc('leather')},
        mc('leather'),
        kj('tanned_leather')
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

    // -- BUNDLE -- //
    event.shaped(mc('bundle'), [
        ' S ',
        'L L',
        ' L '
    ],
    {
        S: '#c:strings',
        L: '#c:leathers'
    })
    .id(mf('bundle'));

    // -- PISTON -- //
    event.shaped(mc('piston'), [
        'WWW',
        'CIC',
        'CRC'
    ],
    {
        W: '#minecraft:wooden_slabs',
        C: '#minecraft:stone_tool_materials',
        I: '#c:rods/iron',
        R: '#c:dusts/redstone'
    })
    .id(mf('piston'));

    // -- IRON BARS -- //
    event.shaped('16x ' + mc('iron_bars'), [
        'RRR',
        'RRR'
    ],
    {
        R: '#c:rods/iron'
    })
    .id(mf('iron_bars'));

    // -- BUCKET -- //
    event.shaped(mc('bucket'), [
        'P P',
        ' P '
    ],
    {
        P: '#c:plates/iron'
    })
    .id(mf('bucket'));

    event.shaped('16x ' + mc('stick'), [
        'L',
        'L'
    ],
    {
        L: '#minecraft:logs'
    })
    .id(mf('sticks_from_log'));

     // -- CLOCK -- //
    event.shaped(mc('clock'), [
        ' R ',
        'RGR',
        ' R '
    ],
    {
        R: mc('redstone'),
        G: mi('gold_ring')
    })
    .id(mf('clock'));

    // -- COMPASS -- //
    event.shaped(mc('compass'), [
        ' R ',
        'ROR',
        ' R '
    ],
    {
        R: mc('redstone'),
        O: mi('iron_ring')
    })
    .id(mf('compass'));
    
    // -- CHAINS -- //
    event.shaped('8x ' + mc('chain'), [
        'O',
        'O',
        'O'
    ], 
    {
        O: mi('iron_ring')
    })
    .id(mf('chain'));

    // -- DIAMOND HELMET -- //
    event.shaped(mc('diamond_helmet'), [
        'SSS',
        'D D',
        '   '
    ],
    {
        S: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_helmet'));

    // -- DIAMOND CHESTPLATE -- //
    event.shaped(mc('diamond_chestplate'), [
        'S S',
        'DSD',
        'DDD'
    ],
    {
        S: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_chestplate'));

    // -- DIAMOND LEGGINGS -- //
    event.shaped(mc('diamond_leggings'), [
        'SSS',
        'D D',
        'D D'
    ],
    {
        S: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_leggings'));

    // -- DIAMOND BOOTS -- //
    event.shaped(mc('diamond_boots'), [
        'S S',
        'D D',
        '   '
    ],
    {
        S: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_boots'));

    // -- DIAMOND SHOVEL -- //
    event.shaped(mc('diamond_shovel'), [
        ' D ',
        ' I ',
        ' S '
    ],
    {
        S: mc('stick'),
        I: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_shovel'));

    // -- DIAMOND HOE -- //
    event.shaped(mc('diamond_hoe'), [
        'DI ',
        ' S ',
        ' S '
    ],
    {
        S: mc('stick'),
        I: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_hoe'));

    // -- DIAMOND PICKAXE -- //
    event.shaped(mc('diamond_pickaxe'), [
        'DID',
        ' S ',
        ' S '
    ],
    {
        S: mc('stick'),
        I: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_pickaxe'));

    // -- DIAMOND AXE -- //
    event.shaped(mc('diamond_axe'), [
        'DI ',
        'DS ',
        ' S '
    ],
    {
        S: mc('stick'),
        I: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_axe'));

    // -- DIAMOND SWORD -- //
    event.shaped(mc('diamond_sword'), [
        ' D ',
        ' I ',
        ' S '
    ],
    {
        S: mc('stick'),
        I: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_sword'));

    // -- CAULDRON -- //
    event.shaped(mc('cauldron'), [
        'S S',
        'S S',
        'SSS'
    ],
    {
        S: '#c:plates/steel'

    })
    .id(mf('cauldron'));

    // -- BREWING STAND -- //
    event.shaped(mc('brewing_stand'), [
        ' B ',
        'SSS',
        '   '
    ],
    {
        B: mc('blaze_rod'),
        S: '#c:plates/steel'

    })
    .id(mf('brewing_stand'));

})