# workshop-2 
<br />
website: https://harn475.github.io/workshop-2/

## Overview
This project creates a snowflake animation with a snowman figure on a canvas. The snowflakes fall from the top of the canvas, and a message saying "Brr...I'm Cold" or "It's Freezing!" alternates every second. The snowman is drawn with basic shapes, and the snowflakes are dynamically added to and removed from the canvas.
## Notes
### Comments while following the code on the workshop video.
I had fun making different shapes appear on the screen. 
Create Github Account, learn about README.

## Progress (Problem Solving/Code)
The snowflakes were initially created using static positions but were later randomized using the xPos and yPos arrays.
The changeWords function was added to switch between the two text phrases at a 1-second interval.
Logic was implemented to limit the maximum number of snowflakes on the screen at once (100).
Code was optimized to ensure new snowflakes are added and old ones are removed properly as they exceed the canvas height.
The snowman drawing was built incrementally using circles and rectangles for the different body parts and accessories.
I did have some trouble with the smooth falling of the snowflakes. However, luckily for me, I have a code savvy flatmate who was able to explain to me more indepth about arrays, and how when one leaves the next one will randomly start falling again.

## Final coding comments
The code successfully generates falling snowflakes and displays a simple snowman.
The alternating text messages are visually appealing and add to the ambiance of the animation.
Snowflakes are randomly placed and reset to random positions once they go off the screen, ensuring a continuous snow effect.
The snowman is drawn using basic shapes, and its design is simple yet effective.

## Future development
Add more interactive features, like changing the background color based on user input or time of day.
Improve the snowflake animation with variations in size, speed, and opacity.
Add sound effects for a more immersive experience, such as wind or the sound of snowflakes falling.
Introduce a more complex snowman design with additional accessories like a scarf or gloves.

## Reflection
This project was a fun and simple exercise in working with the p5.js library. It allowed me to practice creating dynamic animations and manipulating arrays to control objects on the canvas. I enjoyed experimenting with the snowflake effect and adding the snowman. Going forward, I’d like to explore more advanced animations and interactions with the canvas.

Certainly! Here's a reference list along with a declaration of your help sources:

---

**Reference List:**

1. p5.js Reference - 2D Primitives. (n.d.). Retrieved from [https://p5js.org/reference/#2D%20Primitives](https://p5js.org/reference/#2D%20Primitives)
   
2. p5.js Discourse Forum. (n.d.). Retrieved from [https://discourse.processing.org/c/p5js/10](https://discourse.processing.org/c/p5js/10)
   
3. Reddit User. 

---

**Declaration:**

I declare that I received help with my coding from my flatmate, who is experienced with programming. Additionally, I conducted several quick Google searches to resolve issues encountered during the development process. These searches helped in understanding how to implement specific features and troubleshoot problems, especially related to p5.js, as well as getting advice from relevant forums and communities.
