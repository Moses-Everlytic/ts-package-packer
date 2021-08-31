import packageOptionsCreator from "../../../../com/mobiquity/packer/services/package.options.creator";

test('should convert package string to type PackageData', () => {
    const srtingArray =  "99 : (1,38,$50.80) (2,60,$2.80) (3,210,$2.80)";

    const data = packageOptionsCreator(srtingArray);

    expect(data.package_weight).toBe(99);
    expect(data.items.length).toBe(2);
});

test('should retrun only package weight', () => {
    const srtingArray =  "120 : (1,20,R122)";

    const data = packageOptionsCreator(srtingArray);

    expect(data.package_weight).toBe(120);
    expect(data.items.length).toBe(0);
});