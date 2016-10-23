//oop编程

var Base = {
    getId:function(id){
        return document.getElementById(id);
    },
    getName:function(name){
        document.getElementsByName(name);
    },
    getTag:function(TagName){
        document.getElementsByTagName(TagName);
    }
}