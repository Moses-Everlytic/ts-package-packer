import packageOptionsSubsetGenerator from "../../../../com/mobiquity/packer/services/package.options.subset.generator";

test('should convert PackageData to string data for output', () => {
    const packageData =  {
        package_weight: 80,
        items: [
            { index: 1, weight: 20, cost: 100},
            { index: 2, weight: 80, cost: 30},
            { index: 3, weight: 60, cost: 60},
            { index: 4, weight: 10, cost: 21},
            { index: 5, weight: 5, cost: 9},
        ]
    };

    const data = packageOptionsSubsetGenerator(packageData);

    expect(data).toBeDefined
});

test('should return empty string', () => {
    const packageData =  {
        package_weight: 80,
        items: []
    };

    const data = packageOptionsSubsetGenerator(packageData);

    expect(data).toBe("");
});