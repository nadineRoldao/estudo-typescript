export class Pessoa { }

let a: string;
let b: number;
let c: Date;
let p: Pessoa;
let e: any;


function somar(a: number, b: number = 10) {
    console.log(a + b);    
}

function somar2(a: number, b?: number) {
    if (!b) b = 10;    
    console.log(a + b);    
}

function somar3(a: number, b: number): void {
    console.log(a + b);    
}

function somar4(a: number, b: number): string {
    // return a + b + '';
    return '' + a + b;
}

console.log(somar4(10, 10));