const gifts = [
{
    image:"images/1.jpg",
    text:"未来三个月，会有一个重要机会向你靠近。"
},
{
    image:"images/2.jpg",
    text:"你正在走向比想象中更好的未来。"
},
{
    image:"images/3.jpg",
    text:"保持耐心，你期待的答案即将出现。"
},
{
    image:"images/4.jpg",
    text:"一个新的开始正在酝酿。"
},
{
    image:"images/5.jpg",
    text:"不要低估自己的价值。"
},
{
    image:"images/6.jpg",
    text:"你拥有改变现状的力量。"
},
{
    image:"images/7.jpg",
    text:"最近的努力不会白费。"
},
{
    image:"images/8.jpg",
    text:"好运正在路上。"
}
];

const claimBtn = document.getElementById("claimBtn");
const result = document.getElementById("result");
const giftImage = document.getElementById("giftImage");
const giftText = document.getElementById("giftText");

const claimed = localStorage.getItem("claimedGift");

if(claimed){

    const data = JSON.parse(claimed);

    document.getElementById("claimSection").innerHTML =
    "<h2>你已经领取过了 🎉</h2>";

    giftImage.src = data.image;
    giftText.textContent = data.text;

    result.classList.remove("hidden");
}
else{

    claimBtn.addEventListener("click",()=>{

        const randomGift =
        gifts[Math.floor(Math.random()*gifts.length)];

        localStorage.setItem(
            "claimedGift",
            JSON.stringify(randomGift)
        );

        giftImage.src = randomGift.image;
        giftText.textContent = randomGift.text;

        result.classList.remove("hidden");

        document.getElementById("claimSection").innerHTML =
        "<h2>领取成功 🎉</h2>";
    });
}
