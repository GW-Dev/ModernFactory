ServerEvents.recipes(event => {
    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:misc/${id}`;

        // -- REMOVED RECIPES -- //
    const RECIPES_TO_REMOVE = [
        fb('framing_saw/framed_item_frame'),
        fb('framing_saw/framed_glowing_item_frame'),
        th('goggles_arcane_workbench'),
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
        mr('red_alloy_wire'),
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
        hnn('prediction_matrix'),
        hni('hostilenetworks/prediction_matrix_assembler'),
        hni('hostilenetworks/loot_fabricator_assembler'),
        hni('hostilenetworks/simulation_chamber_assembler'),
        hni('hostilenetworks/deep_learner_assembler'),
        hni('hostilenetworks/blank_data_model_assembler'),
        fb('framing_saw'),
        fb('powered_framing_saw'),
        bg('template_manager'),
        bg('gadget_building'),
        bg('gadget_exchanging'),
        bg('gadget_copy_paste'),
        bg('gadget_cut_paste'),
        bg('gadget_destruction'),
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

    // -- FRAMING SAW -- //
    event.shaped(fb('framing_saw'), [
        ' B ',
        'FFF',
        'III'
    ],
    {
        B: mi('invar_rotary_blade'),
        F: fb('framed_cube'),
        I: mi('iron_plate')

    })
    .id(mf('framing_saw'));

    // -- POWERED FRAMING SAW -- //
    event.shaped(fb('powered_framing_saw'), [
        ' S ',
        'AFA',
        'RAR'
    ],
    {
        S: fb('framing_saw'),
        F: fb('framed_cube'),
        A: mi('analog_circuit'),
        R: mi('robot_arm')

    })
    .id(mf('powered_framing_saw'));


    // -- TEMPLATE MANAGER -- //
    event.shaped(bg('template_manager'), [
        'SSS',
        'AFA',
        'SSS'
    ],
    {
        S: mi('steel_plate'),
        F: mr('red_alloy_ingot'),
        A: mi('analog_circuit'),

    })
    .id(mf('template_manager'));

    // -- BUILDING GADGET -- //
    event.shaped(bg('gadget_building'), [
        'SFS',
        'DFD',
        'SAS'
    ],
    {
        S: mi('steel_plate'),
        F: mr('red_alloy_ingot'),
        D: mi('diamond_plate'),
        A: mi('analog_circuit'),

    })
    .id(mf('building_gadget'));

    // -- EXCHANGING GADGET -- //
    event.shaped(bg('gadget_exchanging'), [
        'SFS',
        'DAD',
        'SAS'
    ],
    {
        S: mi('steel_plate'),
        F: mr('red_alloy_ingot'),
        D: mi('diamond_plate'),
        A: mi('analog_circuit'),

    })
    .id(mf('exchanging_gadget'));

    // -- COPY PASTE GADGET -- //
    event.shaped(bg('gadget_copy_paste'), [
        'SFS',
        'EFE',
        'SAS'
    ],
    {
        S: mi('steel_plate'),
        F: mr('red_alloy_ingot'),
        E: mi('emerald_plate'),
        A: mi('analog_circuit'),

    })
    .id(mf('copy_paste_gadget'));

    // -- CUT PASTE GADGET -- //
    event.shaped(bg('gadget_cut_paste'), [
        'SFS',
        'EFE',
        'SAS'
    ],
    {
        S: mi('steel_plate'),
        F: mr('red_alloy_ingot'),
        E: mi('invar_rotary_blade'),
        A: mi('analog_circuit'),

    })
    .id(mf('cut_paste_gadget'));

    // -- DESTRUCTION GADGET -- //
    event.shaped(bg('gadget_destruction'), [
        'SFS',
        'EFE',
        'SAS'
    ],
    {
        S: mi('steel_plate'),
        F: mr('red_alloy_ingot'),
        E: mc('ender_eye'),
        A: mi('analog_circuit'),

    })
    .id(mf('destruction_gadget'));

    })