ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/assembler/misc/${id}`;


    // -- HOSTILE NEURAL NETWORKS COMPAT -- // 
    event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('6x ' + mi('steel_plate'))
            .itemIn('2x ' + mi('red_alloy_plate'))
            .itemIn('2x ' + mc('ender_eye'))
            .itemIn('2x ' + mi('analog_circuit'))
            .itemOut(hnn('sim_chamber'))
            .id(mf('sim_chamber'))

    event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('6x ' + mi('steel_plate'))
            .itemIn('2x ' + mi('aluminum_plate'))
            .itemIn('1x ' + mi('red_alloy_block'))
            .itemIn('3x ' + mi('analog_circuit'))
            .itemOut(hnn('loot_fabricator'))
            .id(mf('loot_fab'))

    event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('4x ' + mi('steel_plate'))
            .itemIn('1x ' + mi('diamond_plate'))
            .itemIn('4x ' + mi('red_alloy_plate'))
            .itemIn('1x ' + mi('analog_circuit'))
            .itemOut(hnn('blank_data_model'))
            .id(mf('blank_data_model'))

    event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('3x ' + mi('aluminum_cable'))
            .itemIn('9x ' + mi('red_alloy_plate'))
            .itemIn('9x ' + mi('analog_circuit'))
            .itemOut(hnn('deep_learner'))
            .id(mf('deep_learner'))

    // -- TRAVEL ANCHORS COMPAT -- // 
    event.recipes.modern_industrialization.assembler(8, 200)
            .itemIn('6x ' + mi('steel_plate'))
            .itemIn('2x ' + mi('red_alloy_plate'))
            .itemIn('1x ' + mc('ender_eye'))
            .itemOut(ta('travel_anchor'))
            .id(mf('travel_anchor'))

    // -- KJS COMPAT -- // 
    event.recipes.modern_industrialization.assembler(8, 500)
            .itemIn('16x ' + ed('melon_rind_stirfry'))
            .itemIn('16x ' + ed('lime_souffle'))
            .itemIn('16x ' + ed('cheese_souffle'))
            .itemIn('16x ' + ed('kyiv_cake_slice'))
            .itemIn('16x ' + ed('kimchi_fried_rice'))
            .itemIn('16x ' + ed('fish_chips'))
            .itemIn('16x ' + ed('bacon_cheeseburger'))
            .itemIn('64x #c:foods/cookie/gingerbread')
            .itemIn('64x ' + ed('fudge'))
            .itemOut(kj('healing_axe_head'))
            .id(mf('healing_axe_head'))

    // -- VANILLA COMPAT -- //
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x ' + mc('amethyst_shard'))
        .itemIn('2x ' + mc('glass'))
        .itemOut('4x ' + mc('tinted_glass'))
        .id(mf('tinted_glass'))
    
    event.recipes.modern_industrialization.assembler(8, 100)
            .itemIn('1x ' + mc('redstone'))
            .itemIn('1x ' + mc('stick'))
            .itemOut(mc('redstone_torch'))
            .id(mf('redstone_torch'))

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('3x ' + mc('stone'))
        .itemIn('2x ' + mc('redstone_torch'))
        .itemIn('1x ' + mc('redstone'))
        .itemOut(mc('repeater'))
        .id(mf('repeater'))

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('3x ' + mc('stone'))
        .itemIn('3x ' + mc('redstone_torch'))
        .itemIn('1x ' + mc('quartz'))
        .itemOut(mc('comparator'))
        .id(mf('comparator'))

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('4x #minecraft:stone_tool_materials')
        .itemIn('3x #minecraft:wooden_slabs')
        .itemIn('1x ' + mc('redstone'))
        .itemIn('1x ' + mi('iron_rod'))
        .itemOut(mc('piston'))
        .id(mf('piston'))

    event.recipes.modern_industrialization.assembler(8, 100)
        .itemIn('1x ' + mc('piston'))
        .itemIn('1x ' + mc('slime_ball'))
        .itemOut(mc('sticky_piston'))
        .id(mf('sticky_piston'))

    event.recipes.modern_industrialization.assembler(8, 100)
        .itemIn('1x ' + mc('piston'))
        .fluidIn('10x ' + mi('acrylic_glue'))
        .itemOut(mc('sticky_piston'))
        .id(mf('sticky_piston_alt'))

    // -- FRAMED BLOCKS COMPAT -- // 
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('3x ' + fb('framed_cube'))
        .itemIn('3x ' + mi('iron_plate'))
        .itemIn('1x ' + mi('invar_rotary_blade'))
        .itemOut(fb('framing_saw'))
        .id(mf('framing_saw'))

    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + fb('framing_saw'))
        .itemIn('1x ' + fb('framed_cube'))
        .itemIn('3x ' + mi('analog_circuit'))
        .itemIn('2x ' + mi('robot_arm'))
        .itemOut(fb('powered_framing_saw'))
        .id(mf('powered_framing_saw'))

    event.recipes.modern_industrialization.assembler(8, 100)
        .itemIn('4x #minecraft:planks')
        .itemIn('4x ' + mc('stick'))
        .itemOut('4x ' + fb('framed_cube'))
        .id(mf('framed_cube'))

    event.recipes.modern_industrialization.assembler(8, 100)
        .itemIn('4x #minecraft:planks')
        .itemIn('4x ' + mc('stick'))
        .fluidIn('100x ' + mi('creosote'))
        .itemOut('8x ' + fb('framed_cube'))
        .id(mf('framed_cube_alt'))

})