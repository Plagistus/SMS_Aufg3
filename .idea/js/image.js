function light(sw){
    var pic;

    if (sw == 0) {
        pic = "pics/greenlight.png"
    } else {
        pic = "pics/redlight.png"
    }
    document.getElementById('myImage').src =pic;
}