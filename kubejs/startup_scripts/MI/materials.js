MIMaterialEvents.addMaterials(event => {
    event.createMaterial("Red Alloy", "red_alloy", 0x430505, builder => {
        builder.addParts("nugget", "dust", "tiny_dust",  "plate")
            .block("copper")
            .addExternalPart("ingot", mr('red_alloy_ingot'))
            .addExternalPart("wire", mr('red_alloy_wire'))
            .defaultRecipes();
    });
});