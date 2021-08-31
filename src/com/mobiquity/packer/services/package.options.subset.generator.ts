import { PackerConstants } from "../constants/packer.constants";
import { PackageData } from "../types/package.data.interface";
import { Item } from "../types/item.interface";

export default function packageOptionsSubsetGenerator(packageData: PackageData): string {
    let itemsSubSets: string = "";
    let packageItemsLengthShift = 1 << packageData.items.length; 

    if (packageData.items.length == 0) {
        return itemsSubSets;
    }

    const packageWeightLimit: number = packageData.package_weight;

    for( var i = 1 ; i < packageItemsLengthShift ; ++i ) {
        const sublist = packageData.items.filter( (value ,key) =>{
            return i >> key & 1
        });

        if (sublist.reduce((p, item) => {return p + item.cost} , 0) <= PackerConstants.MAX_ITEM_COST) {
            if (sublist.reduce((p, item) => {return p + item.weight} , 0) <= packageWeightLimit) {
                sublist.forEach((itemData: Item)=> {
                    itemsSubSets += itemData.index + ",";
                });

                itemsSubSets = itemsSubSets.replace(/,\s*$/, "") + "\n";
            }
        }
    }

    return itemsSubSets + "- \n";
}