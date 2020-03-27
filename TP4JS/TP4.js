function occur(txt,test){
    let tab=txt.split(" ");
    let lg=txt.length;
    let nb=0;
    for (let i=0;i<lg;i++){
        if (tab[i]==test){
            nb++;
        }
    }
    return nb;
}

function inter(inter)
{
    let min = inter[0];
    let max = inter[1];
    let pas = inter[2];
    let x = '[';
    x += min;
    let nb = Math.floor((max-min)/pas);
    for (let i=0;i<nb;i++){  
        x += ', ';
        x += min+(pas*(i+1));
    }
    x +=']';
    return x
    
}

function longestWord(words){
    let size=words.length;
    let longest=0;
    let lword;
    for (let i=0;i<size;i++){
        if (words[i].length>longest){
            lword=words[i];
            longest=words[i].length
        }
    }
    return lword;
}

function sum2(numbers)
{
    let sum=0;
    for (let number in numbers)
    {
        sum+=numbers[number];
    }
    return sum;
}

function sum(numbers)
{
    let size=numbers.length;
    let sum=0;
    for (let i=0;i<size;i++)
    {
        sum+=numbers[i];
    }
    return sum;
}

function main()
{
    let w = 'gg wp gl pl gg';
    //let y = [1,4,1];
    //let x = ['Ok','non','Ahhhhhhh'];
    //console.log(sum(y));
    //console.log(sum2(y));
    //console.log(longestWord(x));
    //console.log(range(y));
    //console.log(occur(w, 'gg'));
    //console.log(occur(w, 'gl'));
    //console.log(occur(w, 'lp'));
}

main();