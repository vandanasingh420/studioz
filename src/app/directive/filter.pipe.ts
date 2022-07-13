import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
    /**
     * Pipe filters the list of elements based on the search text provided
     *
     * @param items list of elements to search in
     * @param searchText search string
     * @returns list of elements filtered by search text or []
     */
    // transform(items: any[], searchText: string): any[] {
    //     console.log("searchText", searchText)
    //     //     if (!items) {
    //     //         return [];
    //     //     }
    //     //     if (!searchText) {
    //     //         return items;
    //     //     }
    //     //     searchText = searchText.toLocaleLowerCase();

    //     //     return items.filter(it => {
    //     //         return it.toLocaleLowerCase().includes(searchText);
    //     //     });
    //     if (searchText) {
    //         searchText = searchText.toLowerCase();
    //         return items.filter(function (el: any[]) {   // <---- data type!
    //             return el.toLowerCase().indexOf(searchText) > -1;
    //         });
    //     }
    //     return items;
    // }
    transform(value: any[], searchText: string) {
        if (searchText) {
            searchText = searchText.toLowerCase();
            return value.filter(function (el: any) {
                console.log("el", el)
                // el = Object.keys(el).map(key => el[key]);
                // console.log("values", el)

                return el.toLowerCase().indexOf(searchText) > -1;
            });
        }
        return value;
    }
}


