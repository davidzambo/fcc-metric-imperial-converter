// class Converter {
//     private firstAlphaIndex: number;
//     private baseUnit: string;
//     private baseQuantity: number;
//
//     public constructor(input: string) {
//         // search for the index where the unit starts
//         this.firstAlphaIndex = input.search(/[a-zA-Z]/);
//         this.baseUnit = input.slice(this.firstAlphaIndex, input.length);
//         const baseQuantity = input.slice(0, this.firstAlphaIndex).replace(",", ".");
//         // checks if is there a fraction in the baseQuantity
//         if (baseQuantity.search(/\//) === -1) {
//             this.baseQuantity = baseQuantity;
//         } else {
//             const fraction = baseQuantity.split("/");
//         }
//     }
// }
//# sourceMappingURL=converter.js.map