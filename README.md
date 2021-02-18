# BuildCircle Tech Test

I introduce you a tech test give by Build Circle, an small web app where you are able to chat with anyone.
I have never build a chat and I have never used react with hooks until now. This tech test has given me the opportunity to learn more about react and about how a chat works.

![alt text](https://github.com/jaitone/Cats/raw/emptyChat.png)
![alt text](https://github.com/jaitone/Cats/raw/chat.png)

## Tech used / API's 
- React
-	Pubnub
- CSS  

## Approach
- First day: 
	- After reading carefully all the documentation, I realise that I still have a lot to learn. I built an skeleton in react without using the api just yet, and without hooks. When decided to join react with the api, I realize that I need hooks which I never used. Despite the challenge, thanks to the react and pubnub documentation, I was able to have my first chat attempt working!
- Second day:
	- On the second day, I wanted to add some of the features that the test offers, such as adding emojis, channels or send files. I tried to tackle all of them and I got them "half" working. 
	<br>
	Despite my efforts, I couldn't get it to work and the clock was ticking.
- Third day:
	- With my energy on high levels, I focused on being able to chat throught different channels and it only took me half a day! (noticed the sarcasm). The clock kept ticking, so I knew I would'nt have time to add all I wanted, so I focused on small things. 
	<br>
	I added a personalized user input to write a username and show it in chat along with the time of the message. 
	<br>
	I was able to add emojis, and even though is not 100% working, it does a fair job for how long it took me.
- Fourth day:
	- The day of delivery. Even though I couldn't add all the features I wanted, I am proud of the project and all the things I learn along the way. 
	<br>
	I extracted some components and added a few tests to make sure those components work.

## How to use
If  you are reading this you are in the right repository so follow the steps below:
- Open the terminal on the directory you want the app and write:	
	- ```git clone https://github.com/jaitone/BuildCircle.git ```
- Go to the directory:
	- ```cd BuildCircle```	
- And then to the app:
	- ``` cd chatapp ```
-	Once inside chat app, install dependecies:
	-	```npm install```
	-	If this command gives you trouble, you might need to install node.js on your computer: https://nodejs.org/en/download/
- Now that you are set, you can run the app on the same path:
	- ```npm start```	
	- If the browser won't open, you can go manually to your browser and paste to `http://localhost:3000/`
- You can also run the tests:
	- ```npm test```