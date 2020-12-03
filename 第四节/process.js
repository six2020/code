// console.log('process.arch ---->', process.arch);


// console.log('process.argv ---->', process.argv);

let playerAtion = process.argv[2];

if(playerAtion === 'shitou' || playerAtion === 'jiandao' || playerAtion === 'bu'){
    let computerAtion = '';

    let random = Math.random() * 3;

    if(random < 1){
        computerAtion = "shitou";

        console.log("电脑出 -> shitou")
    }else if(random > 2){
        computerAtion = "jiandao";

        console.log("电脑出 -> jiandao")
    }else{
        computerAtion = "bu";

        console.log("电脑出 -> bu")
    }


    if(playerAtion === computerAtion){
        console.log('结果 ---> 平局')
    }else if(
        (playerAtion === 'shitou' && computerAtion === 'jiandao') ||
        (playerAtion === 'jiandao' && computerAtion === 'bu') ||
        (playerAtion === 'bu' && computerAtion === 'shitou')
    ){
        console.log("结果 ---> 玩家赢")
    }else{
        console.log("结果 ---> 电脑赢")
    }
}else{
    console.log('--玩家出拳犯规--')
}





