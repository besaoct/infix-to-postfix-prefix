document.getElementsByClassName('nav-mobile')[0].onclick=function(){if(document.getElementsByClassName('nav-list')[0].style.display=="none")
{document.getElementsByClassName('nav-list')[0].style.display="block";}
else
{document.getElementsByClassName('nav-list')[0].style.display="none";}}
function subscribeMe()
{document.getElementById('subscribtionStatus').innerHTML="";var xmlhttp,instantEmail,instantEmailArr=[],getStatus;instantEmailArr[0]=document.getElementById("emailForSubscription").value;instantEmail=JSON.stringify(instantEmailArr);document.getElementById("temporaryPopup").style.animation="none";var resultText=document.getElementsByClassName("subscriber-container")[0];if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(this.readyState==4&&this.status==200)
{getStatus=JSON.parse(this.responseText);if(getStatus==2)
{document.getElementById('subscribtionStatus').innerHTML='<p style="color:red; font-size:14px;font-family:athiti,sans-serif;">Invalid email address</p>';}
else if(getStatus==1)
{resultText.style.textAlign="center";resultText.innerHTML='<p style="font-size:20px;"><span style="color:green;font-family:athiti,sans-serif;">Congratulations!</span> You have been subscribed</p>';}
else if(getStatus===0)
{document.getElementById('subscribtionStatus').innerHTML='<b style="color:red;font-family:athiti,sans-serif;">Sorry! You have not been subscribed</b>';}
else if(getStatus===3)
{document.getElementById('subscribtionStatus').innerHTML='<p style="color:blue; font-size:14px;font-family:athiti,sans-serif;">Email is already registered</p>';}}};xmlhttp.open("POST","/newman/subscribe_me.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("emailSubscription="+instantEmail);}
function subscribeMeOnRight()
{document.getElementById('subscribtionStatusOnRight').innerHTML="";var xmlhttp,instantEmail,instantEmailArr=[],getStatus;instantEmailArr[0]=document.getElementById("emailForSubscriptionOnRight").value;instantEmail=JSON.stringify(instantEmailArr);document.getElementById("temporaryPopup").style.animation="none";var resultText=document.getElementsByClassName("emailSubscriberContainer")[0];if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(this.readyState==4&&this.status==200)
{getStatus=JSON.parse(this.responseText);if(getStatus==2)
{document.getElementById('subscribtionStatusOnRight').innerHTML='<p style="color:red; font-size:14px; font-family:athiti,sans-serif;">Invalid email address</p>';}
else if(getStatus==1)
{resultText.style.textAlign="center";resultText.innerHTML='<div class="subsribtionStatus" style="font-size:20px;"><p><span style="color:green; font-family:athiti,sans-serif;">Congratulations!</span> You have been subscribed</p></div>';}
else if(getStatus===0)
{document.getElementById('subscribtionStatusOnRight').innerHTML='<p style="color:red; font-size:14px; font-family:athiti,sans-serif;">Sorry! You have not been subscribed</p>';}
else if(getStatus===3)
{document.getElementById('subscribtionStatusOnRight').innerHTML='<p style="color:blue; font-size:14px;font-family:athiti,sans-serif;">Email is already registered</p>';}}};xmlhttp.open("POST","/newman/subscribe_me.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("emailSubscription="+instantEmail);}
function unsubscribeMe()
{document.getElementById('subscribtionStatusOnRight').innerHTML="";var xmlhttp,instantEmail,instantEmailArr=[],getStatus;instantEmailArr[0]=document.getElementById("emailForSubscriptionOnRight").value;instantEmail=JSON.stringify(instantEmailArr);document.getElementById("temporaryPopup").style.animation="none";var resultText=document.getElementsByClassName("emailSubscriberContainer")[0];if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(this.readyState==4&&this.status==200)
{getStatus=JSON.parse(this.responseText);if(getStatus==2)
{document.getElementById('subscribtionStatusOnRight').innerHTML='<p style="color:red; font-size:14px;font-family:athiti,sans-serif;">Invalid email address</p>';}
else if(getStatus==1)
{resultText.style.textAlign="center";resultText.innerHTML='<div class="subsribtionStatus" style="font-size:20px;"><p><span style="color:green;font-family:athiti,sans-serif;"></span> You have been unsubscribed successfully.</p></div>';}
else if(getStatus==0)
{document.getElementById('subscribtionStatusOnRight').innerHTML='<p style="color:red; font-size:14px;">No such email exists. So you don\'t need to subscribe.</p>';}}};xmlhttp.open("POST","/newman/unsubscribe_me.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("emailSubscription="+instantEmail);}
function getFeedBack(feedElement)
{var yes,no,url,strFeedBack,getStatus=0;url=window.location.pathname;var feedBack=[];if(feedElement.innerHTML=='Yes')
{yes=1;no=0;}
else
{yes=0;no=1;}
feedBack=[yes,no,url];strFeedBack=JSON.stringify(feedBack);if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function(){if(this.readyState==4&&this.status==200)
{getStatus=JSON.parse(this.responseText);if(getStatus==1)
{document.getElementsByClassName('helpContainer')[0].innerHTML='<p style="text-align:center;">Thanks for you feedback</p>';}
else
{document.getElementsByClassName('helpContainer')[0].innerHTML=this.responseText+""+strFeedBack;}}};xmlhttp.open("POST","/newman/feedBack.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("getFeed="+strFeedBack);}
function moveup()
{var gElement=document.getElementsByClassName('main-comment-container');document.getElementsByClassName('feedOpen')[0].style.display="none";gElement[0].style.display="block";}
function movedown()
{var gElement=document.getElementsByClassName('main-comment-container');document.getElementsByClassName('feedOpen')[0].style.display="block";gElement[0].style.display="none";document.getElementsByClassName('feedbackStatus')[0].innerHTML='<p style="font-family:athiti,sans-serif!important;">Email: <input type="email" name="email" id="guestEmail" placeholder="Email"></p><p style="font-family:athiti,sans-serif!important;">Message: </p><textarea name="message" cols="100" id="guestMessage" rows="5" placeholder="We always welcome your suggestion or feedback"></textarea> <button class="sendMessage" id="submitFeedback" onclick="sendMail()">submit</button>';}
function sendMail(){var xmlhttp,instantEmail,instantEmailArr=[],getStatus;instantEmailArr[0]=document.getElementById("guestEmail").value;instantEmailArr[1]=document.getElementById("guestMessage").value;instantEmail=JSON.stringify(instantEmailArr);if(instantEmailArr[1].length<3)
{document.getElementsByClassName("sendDetails")[0].innerHTML='Please write a valid message';}
else
{document.getElementsByClassName("sendDetails")[0].innerHTML="";if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
xmlhttp.onreadystatechange=function()
{if(this.readyState==4&&this.status==200)
{if(this.responseText==1)
{document.getElementsByClassName('feedbackStatus')[0].innerHTML="<p style='text-align:center; color:white; font-size:20px; margin-top:100px; font-family:athiti,sans-serif!important'>Your message has been sent successfully.<br>Thanks for your suggestion or feedback.</p>";}
else
{document.getElementsByClassName('feedbackStatus')[0].innerHTML="<p style='text-align:center; color:white; font-size:20px; margin-top:100px; font-family:athiti,sans-serif!important'>Sorry, you message was not sent</p>";}}}};xmlhttp.open("POST","/suggestion/get-suggestion.php",true);xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");xmlhttp.send("sendEmail="+instantEmail);}
function subscribe_sharing()
{var block=document.getElementById("shareblock"),span=document.getElementsByClassName("exit")[0];block.style.display="block",span.onclick=function(){block.style.display="none"}}
function compareTime()
{var dateString,now,object,counting=0;if(localStorage.getItem("key"))
{object=JSON.parse(localStorage.getItem("key"));dateString=object.timestamp;counting=parseInt(object.value)+1;object={value:counting,timestamp:dateString};localStorage.setItem("key",JSON.stringify(object));now=new Date().getTime().toString();dateString+=43200000;if(now>dateString||counting>=30)
{counting=0;localStorage.removeItem("key");object={value:counting,timestamp:new Date().getTime()}
localStorage.setItem("key",JSON.stringify(object));setTimeout(subscribe_sharing,60000);}}
else
{setTimeout(subscribe_sharing,60000);counting=counting+1;object={value:counting,timestamp:new Date().getTime()}
localStorage.setItem("key",JSON.stringify(object));}}
compareTime();