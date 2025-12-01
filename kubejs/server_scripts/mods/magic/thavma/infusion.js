ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:magic/thavma/infusion/${id}`;

    // -- REMOVED RECIPES -- //
    const RECIPES_TO_REMOVE = [
        th('thavmite_vanguard_helmet_infusion'),
        th('thavmite_vanguard_chestplate_infusion'),
        th('thavmite_vanguard_leggings_infusion'),
        th('thavmite_vanguard_boots_infusion'),
        ti('time_in_a_bottle'),
        es('ender_chest'),
        es('ender_tank'),
        es('ender_pouch'),
        'javd:portal_block'
    ];
    RECIPES_TO_REMOVE.forEach(id => event.remove( {id: id} ));

    // -- CUSTOM RECIPE UTILITY FUNCTION -- //
    let infusion = (id, aspect, central_input, item_inputs, item_outputs) => {
        let newRecipe = {
            type: th('infusion'),
            aspects: aspect,
            base: central_input,
            result: item_outputs
        }
        if (item_inputs)
            newRecipe['components'] = item_inputs;
        event.custom(newRecipe).id(id);
    }

    // time in a bottle recipe
    infusion(
        mf('time_in_a_bottle'),
        {
            'thavma:motus': 36,
            'thavma:instrumentum': 24
        },
        {item: mc('glass_bottle')},
        [ 
            {item: wy('warp_stone')},
            {item: th('thavmite_block')},
            {item: th('thavmite_block')},
            {item: th('orichalcum_block')}
        ],
        {
            count: 1,
            id: ti('time_in_a_bottle')
        }
    )

    // ender chest recipe
    infusion(
        mf('ender_chest'),
        {
            'thavma:alienis': 16,
            'thavma:instrumentum': 16,
            'thavma:motus': 8
        },
        {item: mc('ender_eye')},
        [ 
            {item: wy('warp_stone')},
            {item: mc('obsidian')},
            {item: mc('white_wool')},
            {item: mc('blaze_rod')},
            {item: mc('blaze_rod')},
            {item: mc('chest')}
        ],
        {
            count: 1,
            id: es('ender_chest')
        }
    )

    // ender tank recipe
    infusion(
        mf('ender_tank'),
        {
            'thavma:alienis': 16,
            'thavma:instrumentum': 16,
            'thavma:motus': 8
        },
        {item: mc('ender_eye')},
        [ 
            {item: wy('warp_stone')},
            {item: mc('obsidian')},
            {item: mc('white_wool')},
            {item: mc('blaze_rod')},
            {item: mc('blaze_rod')},
            {item: mc('cauldron')}
        ],
        {
            count: 1,
            id: es('ender_tank')
        }
    )

    // ender pouch recipe
    infusion(
        mf('ender_pouch'),
        {
            'thavma:alienis': 16,
            'thavma:instrumentum': 16,
            'thavma:motus': 8
        },
        {item: mc('ender_eye')},
        [ 
            {item: wy('warp_stone')},
            {item: mc('blaze_rod')},
            {item: mc('white_wool')},
            {item: mc('blaze_rod')},
            {item: kj('tanned_leather')},
            {item: kj('tanned_leather')}
        ],
        {
            count: 1,
            id: es('ender_pouch')
        }
    )

    // void portal recipe
    infusion(
        mf('void_portal'),
        {
            'thavma:alienis': 32,
            'thavma:instrumentum': 16,
            'thavma:motus': 32
        },
        {item: mc('ender_eye')},
        [ 
            {item: wy('warp_stone')},
            {item: mc('obsidian')},
            {item: mc('obsidian')},
            {item: mc('obsidian')},
            {item: mc('obsidian')},
            {item: mc('obsidian')},
        ],
        {
            count: 1,
            id: 'javd:portal_block'
        }
    )

    // healing axe recipe
    infusion(
        mf('healing_axe'),
        {
            'thavma:herba': 32,
            'thavma:instrumentum': 16,
            'thavma:motus': 16
        },
        {item: kj('healing_axe_head')},
        [ 
            {item: th('greatwood_core')},
            {item: mc('breeze_rod')},
            {item: mc('breeze_rod')},
            {item: mc('breeze_rod')},
            {item: mc('breeze_rod')},
        ],
        {
            count: 1,
            id: kj('healing_axe'),
            components: {
                'minecraft:unbreakable': {value: true}
            }
        }
    )

    // beacon recipe
    infusion(
        mf('beacon'),
        {
            'thavma:lux': 32,
            'thavma:instrumentum': 16,
            'thavma:praecantatio': 16,
            'thavma:aether': 32
        },
        {item: mc('nether_star')},
        [ 
            {item: wy('warp_stone')},
            {item: mc('obsidian')},
            {item: mc('obsidian')},
            {item: mc('obsidian')},
            {item: mc('diamond_block')},
            {item: th('sealing_jar')},
        ],
        {
            count: 1,
            id: mc('beacon')
        }
    )

    // enchanting table recipe
    infusion(
        mf('enchanting_table'),
        {
            'thavma:instrumentum': 16,
            'thavma:praecantatio': 16,
            'thavma:aether': 16
        },
        {item: mc('bookshelf')},
        [ 
            {item: mi('red_alloy_block')},
            {item: mc('obsidian')},
            {item: mi('diamond_large_plate')},
            {item: th('fabric')},
            {item: th('fabric')},
            {item: th('fabric')},
        ],
        {
            count: 1,
            id: mc('enchanting_table')
        }
    )

    // thavmite vanguard helmet recipe
    infusion(
        mf('vanguard_helmet'),
        {
            'thavma:praecantatio': 16,
            'thavma:praemunio': 32
        },
        {item: th('thavmite_helmet')},
        [ 
            {item: mc('netherite_ingot')},
            {item: mi('diamond_large_plate')},
            {item: th('thavmite_block')},
            {item: kj('tanned_leather')},
        ],
        {
            count: 1,
            id: th('thavmite_vanguard_helmet')
        }
    )

    // thavmite vanguard chestplate recipe
    infusion(
        mf('vanguard_chestplate'),
        {
            'thavma:praecantatio': 16,
            'thavma:praemunio': 32
        },
        {item: th('thavmite_chestplate')},
        [ 
            {item: mc('netherite_ingot')},
            {item: mi('diamond_large_plate')},
            {item: th('thavmite_block')},
            {item: kj('tanned_leather')},
        ],
        {
            count: 1,
            id: th('thavmite_vanguard_chestplate')
        }
    )

    // thavmite vanguard leggings recipe
    infusion(
        mf('vanguard_leggings'),
        {
            'thavma:praecantatio': 16,
            'thavma:praemunio': 32
        },
        {item: th('thavmite_leggings')},
        [ 
            {item: mc('netherite_ingot')},
            {item: mi('diamond_large_plate')},
            {item: th('thavmite_block')},
            {item: kj('tanned_leather')},
        ],
        {
            count: 1,
            id: th('thavmite_vanguard_leggings')
        }
    )

    // thavmite vanguard boots recipe
    infusion(
        mf('vanguard_boots'),
        {
            'thavma:praecantatio': 16,
            'thavma:praemunio': 32
        },
        {item: th('thavmite_boots')},
        [ 
            {item: mc('netherite_ingot')},
            {item: mi('diamond_large_plate')},
            {item: th('thavmite_block')},
            {item: kj('tanned_leather')},
        ],
        {
            count: 1,
            id: th('thavmite_vanguard_boots')
        }
    )
})