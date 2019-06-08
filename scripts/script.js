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
  alert('you eat the bean. Nothing seems to happen , you start looking around and start getting mad, you start pounding on the walls and spiting on the floor in disgust. You start hearing entities but don\'t see anyone, the voices are telling you to be calm and laydown but you refuse to trust them in this dilusional state you are in, why should you ? why whould you when you\'ve been alone till now just fine ? yeah, you\'re ok. You feel something touch you and try to comfort you. You smash your head against the wall untill you pass out. You get up, still looking for an escape.')

  else if (level4 == '2')
  alert('You consume the liquid and sit down on the carpet. After a while you start to feel tingly & funny, the roof starts to flow together and begins to look woven. You feel amazing and free, your heart starts to race as you are filled with all these realizations & ideas of life and why , what & how you got down here. You see the whole world change before you & transform into diffrent enviroments untill finally stopping in space. You feel your whole buddy hit with an invisable force and are instantly back in the room. You can\'t seem to grasp the ideas & the realizations you\'ve just had but you feel reborn and full of energy and motivation. You stand up ready to take on the world!')

var level5 = prompt('The symbols have disapeared , the room has dimmed . You look around and find a ventalition system where a symbol used to be , it seems dark and moldy. You also see the door has been open  , you sense someone waiting outside the room. Go into the vents(1)? or through the door(2) ?')
  if (level5 == '1')
     alert('You go through the vents and are able to get a glimps into the other rooms. In one room you see cages with dogs inside,in the other you see dead bodies piled up and weird symbols with a strange liquid dripping down from them in another room. You find a hole and jump through it.')
  else if (level5 = '2')
  alert('Bravely you walk through the front door. You don\'t see anyone so you keep going and walk past some rooms, you wonder what\'s inside them. As you keep walking the screams continue, the hallway seems never ending. Someone grabs you and turns you around. no ones there but you start hearing hollowing and see some creatures running towards you , you turn to run but fall through a hole.')

var fight = prompt('The creatures follow you . They look uncanny , just like humans but with slight diffrencess , its hard for you to tell in this lighting but you could tell something is off. You get up and get ready to fight them, its only two, you think you could take them, One lunges towards you . Do you dogde(1) or attack(2) ? ')
 if (fight == '1')
   alert('You dodge and counter with a gut shot , its buddy tackles you to the ground. You manage to get back on your feet.')

   else if(fight == '2')
    alert('You attack ! you manage to hit first. You hit it in the jaw once then again in the gut , its buddy charges. You dodge & push it onto the ground. you re focus on the other one , it stares at you while his buddy gets back up')

var fight2 = prompt('You are pinched, They attack. You crouch and jump out the way, Now they are both facing you . You grab it by the back of the neck and run it into his buddys head. You stomp em both and break thier jaw. Do you beat them dead(1) ? or leave them there(2) ?') 
  if (fight2 == '1')
    alert('You mercilessly beat them & gouge there eyes out. you leave them there twicthing wishing to die.')

    else if (fight2 == '2')
    alert('you do the humane thing and just leave them be , they\'ve had enough after all, right ?')


var level6 = prompt('Well then, you brush yourself off and continue. You are met with two paths, left(1) or right(2)')
 if (level6 == '1')
 alert('You go left. (If you\'ve made it this far thank you for taking your time to play , ima stop here for now while i do other things , Tats if you are checking this out thank you ! I\'d ask you to correct my grammer but yours is worse. If Jr is reading this get better at apex, you suck.)')
 
 else if(level6 == '2')
  alert('You go right. (If you\'ve made it this far thank you for taking your time to play , ima stop here for now while i do other things . Tats if you are checking this out thank you ! I\'d ask you to correct my grammer but yours is worse. if Jr is reading this get better at apex, you suck)')
} , 10000);// below this line the delay stops