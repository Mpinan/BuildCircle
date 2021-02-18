# **BuildCircle Tech Test**

I introduce you a tech test give by Build Circle, an small web app where you are able to chat with anyone.
I have never build a chat and I have never used react with hooks until now. This tech test has given me the opportunity to learn more about react and about how a chat works.

![alt text](https://github.com/jaitone/BuildCircle/raw/main/emptyChat.png)
![alt text](https://github.com/jaitone/BuildCircle/raw/main/chat.png)

## **Task to complete**

### **Build Circle messenger using PubNub**
<br>
Welcome to the Build Circle junior developer tech test. Here we will ask you to
develop a prototype instant messaging app using the PubNub messaging backend.
<br>
The minimum deliverable is a zip file containing your source code and instructions on
how to start the app. Any additional designs or documentation are also welcome.
Unless instructed otherwise you will have four days to build your app and bring it to
an open collaboration day. You can use any technology stack you wish, the app can
either be a web app or a mobile app, we recommend using technologies and tools
you are familiar with as you will be assessed on the quality of your code as well as
the apps functionality.
<br>
<br>

### **Messaging Backend & PubNub**

<br>
We do not expect you to build or deliver backend services for the instant messaging
app. For this we will use a service called PubNub which offers comprehensive SDKs
and services for creating this type of app. If you are unfamiliar with the publish &
subscribe pattern used by PubNub please take some time to research it before
starting the project.

### **Messaging Frontend**

<br>
For the front-end deliverable, we will assess three major areas:
-	Consideration of the user experience
-	Quality & readability of code
-	Functionality

There are a huge number of features that could be built into an instant messaging
app such as emojis, gifs, read receipts and group conversations. However, you only
have a limited amount of time. Take as much inspiration for features as you like form
existing chat applications (or invent brand new ones) but not at the expense of code
quality or usability.
On the open collaboration day, we will be pairing you with other developers to
further improve your apps, more information will be given on the day

## **Tech used / API's**
- React
- Pubnub
- CSS  

## **Approach**
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

## **How to use**
If  you are reading this you are in the right repository so follow the steps below:
- Open the terminal on the directory you want the app and write:	
	- ```git clone https://github.com/jaitone/BuildCircle.git ```
- Go to the directory:
	- ```cd BuildCircle```	
-	Once inside chat app, install dependecies:
	-	```npm install```
	-	If this command gives you trouble, you might need to install node.js on your computer: https://nodejs.org/en/download/
- Now that you are set, you can run the app on the same path:
	- ```npm start```	
	- If the browser won't open, you can go manually to your browser and paste it to `http://localhost:3000/`
- You can also run the tests:
	- ```npm test```
