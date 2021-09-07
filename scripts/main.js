let myImage = document.querySelector('img')

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    // alert(mySrc)
    if(mySrc === 'images/image-bg.png'){
        myImage.setAttribute('src', 'images/image-boat.gif');
    }else{
        myImage.setAttribute('src', 'images/image-bg.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('请输入你的名字。');        // get，prompt也弹出对话框，输入用户名
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem('name', myName);        // store，储存对话框里的数据，下次打开网页也能获得
        myHeading.textContent = '酷毙了，' + myName;    // 将myName赋值给name
    }
    
}

// 页面一加载，就会执行该段落
if(!localStorage.getItem('name')){      // 为空，则调用
    setUserName();
}else{
    let storedName = localStorage.getItem('name')   // 不为空，则获取
    myHeading.textContent = '酷毙了，' + storedName;
}

// 点击按钮，会调用该方法
myButton.onclick = function(){
    setUserName();
}