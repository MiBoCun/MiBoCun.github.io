
let introduceEnglish="Hello, I'm a front-end development engineer from Shenzhen, China. I like sports, and I'm good at running and billiards. MiBoCun is my former name. If we are lucky to know each other and become friends, you will know my real name. In my spare time, I will constantly update my GitHub and browse the latest topics. Welcome to pay attention to each other. If I receive your attention, I will browse your personal blog as soon as possible. Recently, I've been focusing on vue.js &amp; Vue router &amp; vuex, as well as front-end component development ideas. The above English introduction is my use of Baidu translation software translation, if there is a wrong understanding, welcome to correct. By the way, the new coronavirus is now spreading all over the world. I hope you are safe and sound in the distance and continue to have ideals.";
let introduceChinese="你好 我是一名来自中国深圳的前端开发工程师.我喜欢运动，擅长跑步和桌球。米柏存是我的曾用名,如果我们有幸认识成为朋友，那么你会知道我的真实名字。业余时间我会不断更新我的gitHub,同时浏览最新的话题。欢迎互相关注,如果收到你的关注，我会第一时间浏览你的个人博客。最近我在持续关注vue.js&vue-router&vuex，以及前端组件化开发思想。 以上这段英文介绍是我使用百度翻译软件翻译，如果有理解不对，欢迎指正。对了，新冠病毒现在全球蔓延，希望远方的你安然无恙，继续心怀理想。";

window.onload=function(){
    let textPartDom= document.getElementById('textPart');
    let texTitleDom=document.getElementById("texTitle");

    let i = 0;
    timer=setInterval(function(){
        textPartDom.innerText=introduceEnglish.substring(0,i)
        i++;

        if(textPartDom.innerText==introduceEnglish){
            clearInterval(timer);
            $("#langBox").animate({marginTop:'0px'},800)


    }
    },50)
    let languageDoms=document.getElementsByClassName("languageIcon");
    for(let k=0;k<languageDoms.length;k++){
        languageDoms[k].onclick=function (e) {
            let eDom=e.target;
            let language=eDom.alt;
            if(language=="English"){
                texTitleDom.innerText="Welcome to my github blog";
                textPartDom.innerText=introduceEnglish;
                textPartDom.className='englishText';

            }else{
                texTitleDom.innerText="欢迎来到我的github博客";
                textPartDom.innerText=introduceChinese;
                textPartDom.className='chineseText';


            }
        }

    }

}
