setTimeout (function () {alert('Welcome, (please take a minute to read "How to Play")')
var enterCabin = confirm('You are in the middle of the woods with no prior memory. In front of you there\'s a cabin, Do you go in?');

if (enterCabin == true) {
    var chooice1 = prompt('As you walk in you\'re immediately hit with a flash & get a sense of dreed. You see what seems to be stairs , it\'s odd but you can\'t seem to make out the direction the stairs are going, or a sense of how big the cabin really is. There\'s a large mostly empty room to the right. Which way will you go? Stairs(1) or room(2)?');
    
    if (chooice1 == 1)
    alert('You walk towards the stairs only to stumble when you go to find the first step. You can\'t tell which way you tumbled but you land in foul smelling water')
  
    else if(chooice1 ==2)
    alert('You walk into the room only to fall through a hole. You land in foul smelling water')


}
  else{
  alert('You decided to take your chance in the wilderness , you get ambushed by someone or something and get knocked out, you awake in foul smelling water');
 }

 var level2 = prompt('You get up dazed and quickly re-orginaize yourself, take a deep breath and look around . The water seems to be knee high, you see a clown staute standing menacingly in a dark, moldy corner. It\'s eyes appear to be glowing. There\'s a shimer of light coming from the other side of the room, it appers to be dim and a bit far. Do you approach the clown(1) or head towards the light(2) ?')
 
 if (level2 == 1)
  alert('As you walk towards the clown its head slowly starts turing towards you, by the time you are in front of it, it\'s making direct eye contact with you . You freeze as the clown reaches towards you.  As soon as it touches you, you are thrown into a dark abyss. you seem to be teleported to a strange place. ')
 
else if(level2 == 2 )
 alert('You strugle to move in the water but you keep pushing foward. Behind you , you hear movement in the water but are to scared to turn around. Panicing you start to hurry towards the light. It feels as if you are making no progress. You stop to catch your breath only to feel a hand hovering over your shoulder, You quickly bolt foward and trip only to fall through the floor and into some dark abyss. after a flash of light you are teleported to a strange place')
 

 var level3 = prompt('Shocked, you take a minute to regather your thoughts, you hear a voice saying "How long has it been?" you franticly look for the source of the voice but to no avail. You feel tugging on your arm & your vision is getting distored. After sometime you feel normal agan, Should you explore this place(1) or wait here(2) ?.')

 if (level3 == '1')
 alert('You walk deeper into the mansion. In the distance you hear children laughing , you pass many rooms all locked. it gets darker & you start to hear footsteps following you. ')

 else if (level3 == '2')
  alert('You start feeling paranoid & anxiety starts to kick in. you try to distract yourself but theres nothing to distract you, everywhere you look is darkness. "Are you scared ?" you hear the voice again followed by footsteps.')

var subl3 = confirm('Should you look for the footsteps or ignore them?')

if (subl3 == true)
 alert('You couldnt ignore the footsteps , you go out of your way to look for them. You cant seem to find the source but you keep going, hoping its the right path. You hear growling and yelling close by , you\'re scared. You keep going through this mayhem untill you find a door. On the floor you find a piece of paper with a strange symbol on it. You hesitate before you walk in')

 else if (subl3 == false)
  alert('you ignore them and keep going trying to find your way out, you come across a door, on the floor you find a piece of paper with a strange symbol. You hesitate before you walk in')


var level4 = prompt('as you walk in you get a sense of relief, it\'s a silver-ish room with old white flooring and strange symbols on the wall. As you get comfortable , you expolre. you find a white item the size of a bean(1), you also find a strange liquid(2). You get the urge to consume one of them. Which one do you consume ?')
  if (level4 == '1')
  alert('BREAK TIME (I havent programmed this part yet')
  else if (level4 == '2')
  alert('BREAK TIME (I havent programmed this part yet')

} , 5000);// below this line the delay stops