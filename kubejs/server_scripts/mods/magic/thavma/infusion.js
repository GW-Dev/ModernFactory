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
})