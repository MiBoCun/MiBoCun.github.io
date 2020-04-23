let introduceText="Hello, I'm a front-end development engineer from Shenzhen, China. I like sports, and I'm good at running and billiards. MiBoCun is my former name. If we are lucky to know each other and become friends, you will know my real name. In my spare time, I will not update my GitHub constantly, and browse the latest topics at the same time. Welcome to pay attention to each other. If I receive your follow, I will browse your personal blog as soon as possible. Recently, I've been focusing on vue.js &amp; Vue router &amp; vuex, as well as front-end component development ideas. The above English introduction is my use of Baidu translation software translation, if there is a wrong understanding, welcome to correct. By the way, now the new coronavirus is spreading all over the world. I hope you are safe and sound in the distance and continue to have ideals.";

window.onload=function(){
    let textPartDom= document.getElementById('textPart');
    console.log(typeof a);
    let i = 0;
    timer=setInterval(function(){
        textPartDom.innerHTML=introduceText.substring(0,i)
        i++;
        if(textPartDom.innerHTML==introduceText){clearInterval(timer);};
    },50);
}
