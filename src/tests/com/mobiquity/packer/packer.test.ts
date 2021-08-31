import path from 'path';
import ApiError from '../../../../com/mobiquity/packer/error';

import { Packer } from "../../../../com/mobiquity/packer/packer";

test('should return data from text file', () => {
    const filePath = path.join(__dirname, './example.txt');
    const packageStringData = Packer.pack(filePath);

    expect(packageStringData).toBeDefined;
});