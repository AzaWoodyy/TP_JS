function repeat(x, y) {
    let z = "";
    for (let i = 0; i < y; i++) {
        z += x;
    }
    console.log(z);
}

function truncate(x, y) {
    let z = (x.substring(0, y));
    if (x.length >= y) {
        z += "...";
        console.log(z);
    } else {
        console.log(z);
    }
}


function isPalindrome(x) {
    let y = (x.length);
    let z = 0;
    for (let i = 0; i < y / 2; i++) {
        if (x[i] == x[y - i - 1]) {
            z = z + 1;
        } else {
            console.log(false);
            return;
        }
    }
    console.log(true);
}

function swapCase(x) {
    let y = (x.length);
    let z = "";
    for (let i = 0; i < y; i++) {
        if (x.charAt(i) <= 90 && x.charAt(i) >= 65) {
            z += x[i].toLowerCase();
        } else {
            z += x[i].toUpperCase();
        }
    }
    console.log(z);
}

function main() {
    //let x = "oui";
    //repeat(x, 3);
    let x = "bOnJour";
    //truncate(x, 4);
    //let w = "kayak";
    //isPalindrome(x);
    swapCase(x);
}

main();