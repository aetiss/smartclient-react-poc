const sampleData = [
  {
    category: "Adding Machine/calculator Roll",
    itemName: "Adding Machine Roll 57x57mm Lint Free",
    sku: "226500",
    unitCost: 0.52,
    units: "Roll",
  },
  {
    category: "Pastes and Gum",
    itemName: "Glue UHU Clear Gum 250ml",
    sku: "724800",
    unitCost: 2.26,
    description:
      "Ideal for paper and card. Dries clear. Easy to use. Washable & Non-Toxic.",
  },
  {
    category: "Pastes and Gum",
    itemName: "Glue UHU Clear Gum 250ml",
    sku: "724800",
    unitCost: 2.26,
    description:
      "Ideal for paper and card. Dries clear. Easy to use. Washable & Non-Toxic.",
  },
];

const DataSource = {
  create(ISC) {
    console.log("ISC", ISC);
    ISC.DataSource.create({
      ID: "supplyItem",
      dataFormat: "json",
      clientOnly: true,
      cacheData: sampleData,
      fields: [
        { name: "pk", type: "integer", hidden: true, primaryKey: true },
        { name: "category", type: "text", title: "Category", required: true },
        { name: "itemName", type: "text", title: "Item Name", required: true },
        { name: "sku", type: "text", title: "SKU", required: true },
        { name: "unitCost", type: "text", title: "Unit Cost", required: true },
        {
          name: "description",
          type: "text",
          title: "description",
          required: true,
        },
      ],
    });
  },
};

export default DataSource;
