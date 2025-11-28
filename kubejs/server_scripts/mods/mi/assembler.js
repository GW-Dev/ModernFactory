ServerEvents.recipes(event => {

    // -- MOD NAMESPACE UTILITY FUNCTIONS -- // 
    let mf = (id) => `modern_factory:modern_industrialization/assembler/${id}`;

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

    // -- MORE RED COMPAT -- // 

    // hexidecrubrometer recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('8x ' + mr('stone_plate'))
        .itemIn('9x ' + mc('redstone'))
        .itemIn('4x ' + mc('quartz'))
        .itemOut(mr('hexidecrubrometer'))
        .id(mf('hexidecrubrometer'))

    // redwire post relay plate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('1x ' + mc('redstone'))
        .itemIn('2x ' + mr('red_alloy_ingot'))
        .itemOut(mr('redwire_post_relay_plate'))
        .id(mf('redwire_post_relay_plate'))
        
    // latch recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('3x ' + mc('redstone'))
        .itemOut(mr('latch'))
        .id(mf('latch'))

    // pulse gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('1x ' + mc('redstone'))
        .itemIn('1x ' + mr('red_alloy_ingot'))
        .itemOut(mr('pulse_gate'))
        .id(mf('pulse_gate'))

    // redwire post recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x ' + mr('red_alloy_ingot'))
        .itemOut(mr('redwire_post'))
        .id(mf('redwire_post'))

    // redwire post plate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('2x ' + mr('red_alloy_ingot'))
        .itemOut(mr('redwire_post_plate'))
        .id(mf('redwire_post_plate'))

    // bundled cable post recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('red_alloy_ingot'))
        .itemIn('1x ' + mr('bundled_network_cable'))
        .itemOut(mr('bundled_cable_post'))
        .id(mf('bundled_cable_post'))

    // bundled cable relay plate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x ' + mr('stone_plate'))
        .itemIn('1x ' + mr('bundled_network_cable'))
        .itemIn('1x ' + mr('red_alloy_ingot'))
        .itemOut(mr('bundled_cable_relay_plate'))
        .id(mf('bundled_cable_relay_plate'))

    // bundled cable recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('3x #morered:network_cables')
        .itemOut('3x ' + mr('bundled_network_cable'))
        .id(mf('bundled_network_cable'))

    // diode recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('3x ' + mc('redstone'))
        .itemOut(mr('diode'))
        .id(mf('diode'))

    // diode recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('3x ' + mc('redstone'))
        .itemOut(mr('diode'))
        .id(mf('diode'))

    // not gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('2x ' + mc('redstone'))
        .itemOut(mr('not_gate'))
        .id(mf('not_gate'))
        
    // nor gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('2x ' + mc('redstone'))
        .itemOut(mr('nor_gate'))
        .id(mf('nor_gate'))

    // nand gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('4x ' + mc('redstone'))
        .itemOut(mr('nand_gate'))
        .id(mf('nand_gate'))

    // or gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('3x ' + mc('redstone'))
        .itemOut(mr('or_gate'))
        .id(mf('or_gate'))

    // and gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('5x ' + mc('redstone'))
        .itemOut(mr('and_gate'))
        .id(mf('and_gate'))

    // xor gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('4x ' + mc('redstone'))
        .itemOut(mr('xor_gate'))
        .id(mf('xor_gate'))

    // xnor gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('4x ' + mc('redstone'))
        .itemOut(mr('xnor_gate'))
        .id(mf('xnor_gate'))


    // multiplexer recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('1x ' + mr('red_alloy_ingot'))
        .itemIn('1x ' + mc('redstone'))
        .itemOut(mr('multiplexer'))
        .id(mf('multiplexer'))

    // 2 input and gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('4x ' + mc('redstone'))
        .itemOut(mr('and_2_gate'))
        .id(mf('and_2_gate'))

    // 2 input nand gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('1x ' + mr('stone_plate'))
        .itemIn('3x ' + mc('redstone'))
        .itemOut(mr('nand_2_gate'))
        .id(mf('nand_2_gate'))

    // bitwise diode recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x ' + mr('stone_plate'))
        .itemIn('1x ' + mc('quartz'))
        .itemIn('1x ' + mc('redstone'))
        .itemIn('1x ' + mr('bundled_network_cable'))
        .itemOut(mr('bitwise_diode'))
        .id(mf('bitwise_diode'))

    // bitwise not gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x ' + mr('stone_plate'))
        .itemIn('1x ' + mc('quartz'))
        .itemIn('1x ' + mc('redstone'))
        .itemIn('1x ' + mr('bundled_network_cable'))
        .itemOut(mr('bitwise_not_gate'))
        .id(mf('bitwise_not_gate'))

    // bitwise or gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x ' + mr('stone_plate'))
        .itemIn('1x ' + mc('quartz'))
        .itemIn('1x ' + mc('redstone'))
        .itemIn('1x ' + mr('bundled_network_cable'))
        .itemOut(mr('bitwise_or_gate'))
        .id(mf('bitwise_or_gate'))

    // bitwise and gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x ' + mr('stone_plate'))
        .itemIn('1x ' + mc('quartz'))
        .itemIn('1x ' + mc('redstone'))
        .itemIn('1x ' + mr('bundled_network_cable'))
        .itemOut(mr('bitwise_and_gate'))
        .id(mf('bitwise_and_gate'))

    // bitwise xor gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x ' + mr('stone_plate'))
        .itemIn('1x ' + mc('quartz'))
        .itemIn('1x ' + mc('redstone'))
        .itemIn('1x ' + mr('bundled_network_cable'))
        .itemOut(mr('bitwise_xor_gate'))
        .id(mf('bitwise_xor_gate'))

    // bitwise xnor gate recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('2x ' + mr('stone_plate'))
        .itemIn('1x ' + mc('quartz'))
        .itemIn('1x ' + mc('redstone'))
        .itemIn('1x ' + mr('bundled_network_cable'))
        .itemOut(mr('bitwise_xnor_gate'))
        .id(mf('bitwise_xnor_gate'))

    // redwire spool recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('3x ' + mr('red_alloy_wire'))
        .itemIn('4x ' + mi('steel_plate'))
        .itemIn('2x ' + mc('stick'))
        .itemOut('2x ' + mr('redwire_spool'))
        .id(mf('redwire_spool'))

    // bundled cable spool recipe
    event.recipes.modern_industrialization.assembler(8, 200)
        .itemIn('3x ' + mr('red_alloy_wire'))
        .itemIn('4x ' + mi('steel_plate'))
        .itemIn('2x ' + mc('stick'))
        .itemOut('2x ' + mr('bundled_cable_spool'))
        .id(mf('bundled_cable_spool'))

})