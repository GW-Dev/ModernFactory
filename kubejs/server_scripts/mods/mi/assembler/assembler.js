ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/assembler/misc/${id}`;

    // -- VANILLA COMPAT -- // 
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