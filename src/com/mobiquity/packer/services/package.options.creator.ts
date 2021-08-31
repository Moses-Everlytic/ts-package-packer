import { PackerConstants } from "../constants/packer.constants";
import ApiError from "../error";
import { Item } from "../types/item.interface";
import { PackageData } from "../types/package.data.interface";

export default function packageOptionsCreator(packageData: string): PackageData {
    try {
        let itemsArray: Item[] = [];

        const packageValues: string[] = packageData.split(":");
    
        const packageWeight: number = Number(packageValues[0]);
        const packageItems: string = packageValues[1].trim();
    
        if (packageWeight <= PackerConstants.MAX_PACKAGE_WEIGHT) {
            const items: string[] = packageItems.split(" ");
    
            if (items.length <= PackerConstants.MAX_ITEMS) {
                createItemsArray(items, itemsArray);
            }
        }
    
        return {
            package_weight: packageWeight,
            items: itemsArray
        };
    } catch (error) {
        throw new ApiError("Invalid File Data");
    }
}

function createItemsArray(items: string[], itemsArray: Item[]): void {
    for (let index = 0; index < items.length; index++) {

        const packageItem: string[] = items[index].replace("(", "").replace(")", "").split(",");

        const itemIndex = Number(packageItem[0]);
        const itemWeight = Number(packageItem[1]);
        const itemCost = Number(packageItem[2].substring(1));

        if (itemWeight < PackerConstants.MAX_ITEM_WEIGHT && itemCost < PackerConstants.MAX_ITEM_COST) {
            const validItem: Item = {
                index: itemIndex,
                weight: itemWeight,
                cost: itemCost
            };

            itemsArray.push(validItem);
        }
    }
}
