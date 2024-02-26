// type Combinable = number | string;
// type ConversionDescriptor

function add(n1: number, n2: number, showResult: boolean, phrase: string)  {
    // return n1 + n2;
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
    
}
