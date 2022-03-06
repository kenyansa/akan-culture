function processDate(){
    var Year=document.getElementById("YoB").value
    var Month=document.getElementById("Month").value
    var Day=document.getElementById("Day").value
    var validDate=Year+ "-" + Month+"-"+ Day
    var D=new Date (validDate)
    var DayOfWeek=D.getDay()
    var Gender=document.getElementById("Gender").value
    var maleNames= new Map();
    maleNames.set(0,"Kwasi")
    maleNames.set(1,"Kwadwo")
    maleNames.set(2,"Kwabena")
    maleNames.set(3,"Kwaku")
    maleNames.set(4,"Yaw")
    maleNames.set(5,"Kofi")
    maleNames.set(6,"Kwame")
    var femaleNames= new Map();
    femaleNames.set(0,"Akosua")
    femaleNames.set(1,"Adwoa")
    femaleNames.set(2,"Abenaa")
    femaleNames.set(3,"Akua")
    femaleNames.set(4,"Yaa")
    femaleNames.set(5,"Afua")
    femaleNames.set(6,"Ama")
if (Gender=="male") {
    document.getElementById("displayName").innerHTML="Your name is: "+maleNames.get(DayOfWeek)
}
else if(Gender=="female"){
    document.getElementById("displayName").innerHTML="Your name is: " +femaleNames.get(DayOfWeek)
}
else {
    document.getElementById("displayName").innerHTML="invalid Gender"
}
}
