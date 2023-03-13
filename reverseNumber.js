var i = 123456
var reverse = 0
while(i>0){
    reverse = reverse*10 + i%10
    i = Math.floor(i/10)
}
console.log(reverse)



/*
Dry Run


i = 123456
reverse = 0
i>0 true
reverse = 0*10 + 123456%10 = 0*10 + 6 = 6  
i = Math.floor(123456/10) = 12345
i = 12345
reverse = 6
i>0 true
reverse = 6*10 + 12345%10 = 60 + 5 = 65
i = Math.floor(12345/10) = 1234
i = 1234
reverse = 65
i>0 true
reverse = 65*10 + 1234%10 = 650 + 4 = 654
i = Math.floor(1234/10) = 123
i = 123
reverse = 654
i>0 true
reverse = 654*10 + 123%10 = 6540 + 3 = 6543
i = Math.floor(123/10) = 12
i = 12
reverse = 6543
i>0 true
reverse = 6543*10 + 12%10 = 65430 + 2 = 65432
i = Math.floor(12/10) = 1
i = 1
reverse = 65432
i>0 true
reverse = 65432*10 + 1%10 = 654320 + 1 = 654321
i = Math.floor(1/10) = 0
i = 0
reverse = 654321
i>0 false
 */