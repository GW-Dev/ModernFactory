function keys(obj) {
  let keys = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

ServerEvents.generateData("before_mods", (_) => {
  const GTMOGS = global.GTMOGS;
  /**
   * @param {string} name
   * @param {int} weight
   * @param {int} minY
   * @param {int} maxY
   * @param {int} minSize
   * @param {int} maxSize
   * @returns {Function<GTMOGS.VeinGenerator>>}
   */
  const egregiousUniformVein = GTMOGS.makeVeinTemplate(0.75, "uniform", 0.75);
  const shallowCopy = (arr) => {
    let copy = [];
    for (let i = 0; i < arr.length; i++) {
      copy.push(arr[i]);
    }
    return copy;
  };

  const classic = (vein) => {
    let ores = shallowCopy(vein.ores);
    for (let i = 0; i < ores.length; i++) {
      if (Item.exists(`minecraft:${vein.dim.blockPrefix}${ores[i]}_ore`)) {
        ores[i] = `minecraft:${vein.dim.blockPrefix}${ores[i]}_ore`;
      } else if (Item.exists(`thavma:${ores[i]}_infused_stone`)) {
        ores[i] = `thavma:${ores[i]}_infused_stone`;
      } else {
        ores[
          i
        ] = `modern_industrialization:${vein.dim.blockPrefix}${ores[i]}_ore`;
      }
    }
    let target = { predicate_type: "minecraft:always_true" };
    if (vein.dim == GTMOGS.END) {
      target = { predicate_type: "minecraft:tag_match", tag: "c:end_stones" };
    }
    let v = vein.generator(
      GTMOGS.VeinGenerator.ClassicVeinGenerator()
        .setPrimary(4, ores[0], target)
        .setSecondary(3, ores[1], target)
        .setBetween(2, ores[2], target)
        .setSporadic(1, ores[3], target)
    );

    v(vein.dim);
  };

  // this is such a mess, i truly hope i never have to change it
  const layered = (vein) => {
    // get block ids based on dimension and add to generator
    let ores = shallowCopy(vein.ores.map(keys));
    let builder = GTMOGS.VeinGenerator.LayeredVeinGenerator();
    for (let i = 0; i < ores.length; i++) {
      let name = ores[i][0];
      let currentOre = vein.ores[i][name];
      if (Item.exists(`minecraft:${vein.dim.blockPrefix}${name}_ore`)) {
        ores[i] = `minecraft:${vein.dim.blockPrefix}${name}_ore`;
      } else {
        ores[i] = `modern_industrialization:${vein.dim.blockPrefix}${name}_ore`;
      }
      let target;
      if (vein.dim == GTMOGS.END) {
        target = { predicate_type: "minecraft:tag_match", tag: "c:end_stones" };
      }
      builder.layer(
        currentOre.minSize,
        currentOre.maxSize,
        ores[i],
        currentOre.weight,
        target
      );
    }
    let v = vein.generator(builder);
    v(vein.dim);
  };
  const veins = {};
  // iron
  veins.iron = {
    generator: egregiousUniformVein("iron", 75, 65, 120, 28, 36),
    dim: GTMOGS.OVERWORLD,
    ores: ["iron", "iron", "tin", "tin"],
    veinType: classic,
  };
    keys(veins).forEach((key) => {
    let vein = veins[key];
    vein.veinType(vein);
  });

  JsonIO.write(
    "kubejs/assets/gtmogs/lang/en_us.json",
    GTMOGS.lang
  );
});
