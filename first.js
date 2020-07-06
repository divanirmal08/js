var name="max"
var age=19
var pass=true

name
"max"
age
19
pass
true

typeof(name)
"string"
typeof(age)
"number"
typeof(pass)
"boolean"

var a=30
var b=50
a+b
80
a-b
-20
a*b
1500
a/b
0.6

var a="hello"
var b="world"
a+b
"helloworld"
a-b
NaN
a*b
NaN
a/b  
NaN
a%b
NaN

10+'10'+10
'10'+10+10
10+10+'10'

10+'10'+10
"101010"
'10'+10+10
"101010"

10+'10'+10-1=101009
'10'+10+10-1=101009
10+10+'10'-1=2009

var a= true
undefined
var b=false
undefined
a+b
1
a-b
1
a+7
8
a+"hi"
"truehi"

var a=true
undefined
var b=4
undefined
a+b
5
a-b
-3
var c="hi"
undefined
a-c
NaN
b-c
NaN
a+b-c
NaN
a+b+c
"5hi"

var a="true"
undefined
var b="false"
undefined
a+b
"truefalse"
a-b
NaN

var a=8
undefined
var b="8"
undefined
a==b
true
a===b
false

var a="hi"
undefined
var b="Hi"
undefined
a==b
false
a===b
false

var a = true
undefined
!a
false
var b= false
undefined
!b
true

var a=1
undefined
!a
false
var b=0
undefined
!b
true



alert("form submitted successfully")
undefined
confirm("do you want to quit")
true
confirm("do you want to quit")
false

var name=prompt("what is your name")
undefined
name
"max"
prompt("what is your name")
"john"



var a="5"
undefined
var b="10"
undefined
parseInt(a)
5
parseInt(b)
10
parseInt(a)+parseInt(b)
15
var c ="10.76"
undefined
parseInt(c)
10
parseFloat(c)
10.76


var a="america"
undefined
a.toUpperCase()
"AMERICA"
a.toLowerCase()
"america"


var a="america"
undefined
a[0]
"a"
a[4]
"i"
a.charAt(0)
"a"
a.charAt(5)
"c"

var a="america"
undefined
a.slice(3)
"rica"
a.slice(1,4)
"mer"
a.slice(1,5)
"meri"

var a="america"
undefined
a.slice(-1)
"a"
a.slice(1,-1)
"meric"
a.slice(1,-2)
"meri"
a.slice(-2,-1)
"c"
a.slice(-3,-1)
"ic"
a.slice(-3,1)
""


var a="aMEriCa"
undefined
a.charAt(0).toUpperCase()
"A"
a.slice(1,7).toLowerCase()
"merica"
a.charAt(0).toUpperCase()+a.slice(1,7).toLowerCase()
"America"


var a="  paris  "
undefined
a.length
9
a.trim()
"paris"
var a="   paris .  "
undefined
a.trim()
"paris ."
a.trim().length
7

var data="i am learning javascript"
undefined
data.replace("javascript","js")
"i am learning js"

var data="I am learning JavaScript"
undefined
data.toLowerCase()
"i am learning javascript"
data.toLowerCase().replace('javascript','JS')
"i am learning JS"

var data="javascript i am learning javascript"
undefined
data.replace('javascript','js')
"js i am learning javascript"
data.replace(/javascript/g,'js')
"js i am learning js"

var a="   paris .  "
undefined
a.trim()
"paris ."
a.replace(/ /g,'')
"paris."



Math.random()
0.9637577422736743
Math.random()*10
0.0038895836122931904
Math.random()*100
36.67675870091611
Math.random()*1000
265.73736414812174

Math.floor(11.4)
11
Math.floor(11.7)
11
Math.floor(11.9)
11

Math.ceil(11.7)
12
Math.ceil(11.2)
12
Math.ceil(11.5)
12

Math.round(11.3)
11
Math.round(11.8)
12
Math.round(11.5)
12

Math.random()*1000000
498974.90586071403
Math.ceil(Math.random()*1000000)
230622
Math.floor(Math.random()*1000000)

6275
Math.floor(Math.random()*1000000)
64883
Math.round(Math.random()*1000000)
706449

Math.PI
3.141592653589793
Math.PI.toFixed(3)
"3.142"
Math.PI.toFixed(5)
"3.14159"