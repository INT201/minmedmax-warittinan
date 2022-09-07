const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  //code here


    if(n1>=n2&&n1>=n3){
        maxx =n1
        if (n2>n3){
            midd =n2,minn=n3
        }if(n2<n3){
            midd =n3,minn=n2
        }if(n2>=n3){
            midd =n2,minn=n3  
        }
    }else if(n2>=n1&&n2>=n3){
        maxx =n2
        if (n1>n3){
            midd=n1,minn=n3
        }
        {
            midd=n3,minn=n2
        }
    }else if(n3>=n2&&n3>=n1){
        maxx =n3
        if(n1>n2){
            midd = n1,minn=n2
        }
        if (n1<n2){
            midd = n2,minn=n1
        }
    }
    let x
    x={"min":minn,"mid":midd,"max":maxx}
    return x ;
}
module.exports = minMedMax
