function processDate(){
    var Birthday=document.getElementById("Birthday").value
    var validDate=Birthday
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
    var weekDay= new Map();
    weekDay.set(0,"Sunday")
    weekDay.set(1,"Monday")
    weekDay.set(2,"Tuesday")
    weekDay.set(3,"Wednesday")
    weekDay.set(4,"Thursday")
    weekDay.set(5,"Friday")
    weekDay.set(6,"Saturday")
    if (Gender=="male") {
    document.getElementById("displayName").innerHTML="Your name is: "+maleNames.get(DayOfWeek) +" because you were born on: "+weekDay.get(DayOfWeek)
}
else if(Gender=="female"){
    document.getElementById("displayName").innerHTML="Your name is: " +femaleNames.get(DayOfWeek) +" because you were born on: "+weekDay.get(DayOfWeek)
}
else {
    document.getElementById("displayName").innerHTML="invalid Gender"
}
}
