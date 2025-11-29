MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Red Alloy", "red_alloy", 0xD63131, builder => {
        builder.addParts("nugget", "dust", "tiny_dust",  "plate")
            .hardness("soft")
            .materialSet("metallic")
            .block("copper")
            .addExternalPart("ingot", mr('red_alloy_ingot'))
            .addExternalPart("wire", mr('red_alloy_wire'))
            .defaultRecipes()
    });
});