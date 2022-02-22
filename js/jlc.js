function resolveData(data){
    let arr=[];
    for(k in data){
        let str=k+'='+data[k];
        arr.push(str);
    }
    return arr.join('&');
}

function jlc(options){
    var xhr=new XMLHttpRequest();

    // 把外界传过来的参数对象，转化为查询字符串
    let qs=resolveData(options.data);

    if(options.method.toUpperCase()==='GET'){
        // 发起get请求
        xhr.open('get',options.url+'?'+qs);
        xhr.send();
    }
    else if(options.method.toUpperCase()==='POST'){
        //发起post请求
        xhr.open('post',options.url);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        xhr.send(qs);
    }

    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status===200){
            let result=JSON.parse(xhr.responseText);
            options.success(result);
        }
    }
}