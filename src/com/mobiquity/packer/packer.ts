import readFileLines from "./services/filereader";

import packageOptionsCreator from "./services/package.options.creator";
import packageOptionsSubsetGenerator from "./services/package.options.subset.generator";

import { PackageData } from "./types/package.data.interface";

export class Packer {
    static pack(inputFile: string): string
    {
        let packageSubSets: string = "";

        const filePackageData: string[] = readFileLines(inputFile);

        filePackageData.forEach((packageInfo: string) => {
            const packageData: PackageData = packageOptionsCreator(packageInfo);
            
            if (packageData.items.length > 0) {
                packageSubSets += packageOptionsSubsetGenerator(packageData);
            }
        })

        return packageSubSets;
    }
}