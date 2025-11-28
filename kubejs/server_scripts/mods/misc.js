ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:misc/${id}`;

        // -- REMOVED RECIPES -- //
    const RECIPES_TO_REMOVE = [
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
        fd('paper_from_tree_bark'),
        su('lunch_basket'),
        mr('soldering_table'),
        mr('red_alloy_ingot'),
        'craftingstation:crafting_station',
        fd('diamond_knife'),
        ed('offset_spatula_diamond'),
        ed('diamond_spoon'),
        mr('red_alloy_wire')
    ];
    RECIPES_TO_REMOVE.forEach(id => event.remove( {id: id} ));

    event.remove({type: mr('soldering')})

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
        {id: mc('glider_framework')},
        mc('iron_ingot'),
        mi('bronze_ingot')
    )

    // crafting station
    event.shaped(Item.of('craftingstation:crafting_station'),
    [   'AAA',
        'ABA',
        'AAA'
    ],
    {
        A: mc('smooth_stone'),
        B: mc('crafting_table')

    }).id(mf('crafting_station'))

    // dyed items
    const DYE_COLORS = [
        'white',
        'orange',
        'magenta',
        'light_blue',
        'yellow',
        'cyan',
        'lime',
        'pink',
        'gray',
        'light_blue',
        'light_gray',
        'purple',
        'blue',
        'brown',
        'green',
        'red',
        'black'
    ]

    DYE_COLORS.forEach(DYE_COLORS => {
        event.remove( {id: ev(`elevator_${DYE_COLORS}`)} ); 
        event.remove( {id: mr(`${DYE_COLORS}_network_cable`)} ); 

         event.shaped(Item.of(ev(`elevator_${DYE_COLORS}`)),
        [   'AAA',
            'CBC',
            'AAA'
        ],
        {
            A: mc(`${DYE_COLORS}_wool`),
            B: mc('ender_eye'),
            C: mc('piston')

        }).id(mf(`${DYE_COLORS}_elevator`))

        event.recipes.modern_industrialization.packer(2, 200)
            .itemIn('8x ' + mr('red_alloy_wire'))
            .itemIn(mc(`${DYE_COLORS}_wool`))
            .itemOut('8x ' + mr(`${DYE_COLORS}_network_cable`))
            .id(mf(`${DYE_COLORS}_red_alloy_cable`))
    })

    // -- DIAMOND KNIFE -- //
    event.shaped(fd('diamond_knife'), [
        '   ',
        ' ID',
        ' S '
    ],
    {
        S: mc('stick'),
        I: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_knife'));

    // -- DIAMOND OFFSET SPATULA -- //
    event.shaped(ed('offset_spatula_diamond'), [
        ' IS',
        'D  ',
        '   '
    ],
    {
        S: mc('stick'),
        I: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('offset_spatula_diamond'));

    // -- DIAMOND SPOON -- //
    event.shaped(ed('diamond_spoon'), [
        '  D',
        ' I ',
        'S  '
    ],
    {
        S: mc('stick'),
        I: '#c:plates/steel',
        D: '#c:plates/diamond'

    })
    .id(mf('diamond_spoon'));

    })