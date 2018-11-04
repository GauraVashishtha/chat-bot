$(function() {
  var INDEX = 0; 

  var msg = "Hello,";
  // generate_message(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');
  msg += "<br>My Name is Gaurav.";
  // generate_message(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');
  msg += "<br>I am here to help you, view your favourite places.";
  // generate_message(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');
  msg += "<br>Try me!! like want to know about schools... or so..";
  generate_message(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');


  
  msg = "Hello,";
  // generate_message2(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');
  msg += "<br>My Name is Nischay.";
  // generate_message2(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');
  msg += "<br>I am here to help you, find awesome places near you.";
  // generate_message2(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');
  msg += "<br>Try me!! like cafe near me.. or so.";
  generate_message2(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');


    


  $("#chat-submit").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input").val(); 
    if(msg.trim() == ''){
      return false;
    }
    
    generate_message(msg, 'self','http://www.followingthenerd.com/site/wp-content/uploads/avatar.jpg_274898881.jpg');
    


    $.ajax({
          url: 'api',
          type: 'GET',
          data: {message:msg},
          async:false,
          dataType: "text", 
          success: function(data)
           { 
              data = data.split("&&");
              msg = data[1];
              generate_message(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');  
              if(data[3]){
                img = data[2];
                addr = data[3];
                phone = data[4];
                website = data[5];
                name = data[6];
                showDiv2(name,img,addr,phone,website);
                message = "Here are some top searches from facebook:- ";
                message += "<br><b>";
                message += name;
                img = data[7];
                addr = data[8];
                phone = data[9];
                website = data[10];
                name = data[11];
                showDiv(name,img,addr,phone,website);
                message += "<br>";
                message += name;
                img = data[12];
                addr = data[13];
                phone = data[14];
                website = data[15];
                name = data[16];
                showDiv(name,img,addr,phone,website);
                message += "<br>";
                message += name;
                message += "</b>";
                generate_message(message, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');  
                
              }

           }
    });

    
  })

  $("#chat-submit2").click(function(e) {
    e.preventDefault();
    var msg = $("#chat-input2").val(); 
    if(msg.trim() == ''){
      return false;
    }
    
    generate_message2(msg, 'self','http://www.followingthenerd.com/site/wp-content/uploads/avatar.jpg_274898881.jpg');
    var latitude=23.212017,longitude=77.4066428;

       if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
      } else {
          alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
      }


      function successFunction(position) {
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
          // console.log('Your latitude is :'+lat+' and longitude is '+long);
          latitude = lat;
          longitude = long;
      }


      function errorFunction(position) {
          console.log('Using default values');
      }


    $.ajax({
          url: 'api2',
          type: 'GET',
          data: {message:msg,latitude:latitude,longitude:longitude},
          async:false,
          dataType: "text", 
          success: function(data)
           { 
              data = data.split("&&");
              msg = data[1];
              generate_message2(msg, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');  
              // console.log(data);
              if(data[3]){
                // name,phone,country,city,latitude,longitude,state,zip,img
                name = data[2];
                phone = data[3];
                country = data[4];
                city = data[5];
                latitude = data[6];
                longitude = data[7];
                state = data[8];
                zip = data[9];
                img = data[10];
                showDiv21(name,phone,country,city,latitude,longitude,state,zip,img);
                message = "Here are some nearest searches from facebook:- ";
                message += "<br><b>";
                message += name;
                
                name = data[11];
                phone = data[12];
                country = data[13];
                city = data[14];
                latitude = data[15];
                longitude = data[16];
                state = data[17];
                zip = data[18];
                img = data[19];
                showDiv1(name,phone,country,city,latitude,longitude,state,zip,img);
                message += "<br>";
                message += name;
                name = data[20];
                phone = data[21];
                country = data[22];
                city = data[23];
                latitude = data[24];
                longitude = data[25];
                state = data[26];
                zip = data[27];
                img = data[28];
                showDiv1(name,phone,country,city,latitude,longitude,state,zip,img);
                message += "<br>";
                message += name;
                message += "</b>";
                generate_message2(message, 'user','http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg');    
              }

           }
    });

    
  })
    $("#chat-circle").click(function() {    
    // console.log("HELLO");
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  
  $(".chat-box-toggle").click(function() {//console.log("HELLO");
    $("#chat-circle").toggle('scale');
    $(".chat-box").toggle('scale');
  })
  $("#chat-circle2").click(function() {    
    // console.log("HELLO");
    $("#chat-circle2").toggle('scale');
    $(".chat-box2").toggle('scale');
  })
  
  $(".chat-box-toggle2").click(function() {//console.log("HELLO");
    $("#chat-circle2").toggle('scale');
    $(".chat-box2").toggle('scale');
  })


  function showDiv2(name,img,addr,phone,website){
    data = '<div class="mdl-card mdl-shadow--2dp mdl-card--horizontal"  style="display: inline-block;margin: 10px;width: 100%;">\
            <div class="mdl-card__media">\
                <img src="'+img+'" alt="img"  style="width:150px;height:200px;">\
            </div>\
            <div class="mdl-card__title">\
              <h2 class="mdl-card__title-text">'+name+'</h2>\
            </div>\
            <div class="mdl-card__supporting-text">\
              Phone:'+phone+'<br>\
              Address:'+addr+'\
            </div>\
            <div class="mdl-card__actions mdl-card--border">\
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='+website+' data-upgraded=",MaterialButton,MaterialRipple">Website Link</a>\
            </div>\
        </div>';

    $("#about-desc2").html(data);
  }

  function showDiv(name,img,addr,phone,website){

    data = '<div class="mdl-card mdl-shadow--2dp mdl-card--horizontal"  style="display: inline-block;margin: 10px;width: 100%;">\
            <div class="mdl-card__media">\
                <img src="'+img+'" alt="img"  style="width:150px;height:200px;">\
            </div>\
            <div class="mdl-card__title">\
              <h2 class="mdl-card__title-text">'+name+'</h2>\
            </div>\
            <div class="mdl-card__supporting-text">\
              Phone:'+phone+'<br>\
              Address:'+addr+'\
            </div>\
            <div class="mdl-card__actions mdl-card--border">\
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href='+website+' data-upgraded=",MaterialButton,MaterialRipple">Website Link</a>\
            </div>\
        </div>';

    $("#about-desc2").append(data);
  }


  function showDiv21(name,phone,country,city,latitude,longitude,state,zip,img){
    data = '<div class="mdl-card mdl-shadow--2dp mdl-card--horizontal"  style="display: inline-block;margin: 10px;width: 100%;z-index:0;">\
            <div class="mdl-card__media">\
                <img src="'+img+'" alt="img" style="width:150px;height:200px;">\
            </div>\
            <div class="mdl-card__title">\
              <h2 class="mdl-card__title-text">'+name+'</h2>\
            </div>\
            <div class="mdl-card__supporting-text">\
              Phone:'+phone+'<br>\
              Address:'+country+', '+city+', '+state+'<br>\
              Latitude:'+latitude+' Longitude:'+longitude+'<br>\
            </div>\
            <div class="mdl-card__actions mdl-card--border">\
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://www.latlong.net/c/?lat='+latitude+'&long='+longitude+'" data-upgraded=",MaterialButton,MaterialRipple">Get On Map</a>\
            </div>\
        </div>';
    $("#about-desc").html(data);
  }

  function showDiv1(name,phone,country,city,latitude,longitude,state,zip,img){
    data = '<div class="mdl-card mdl-shadow--2dp mdl-card--horizontal"  style="display: inline-block;margin: 10px;width: 100%;z-index:0;">\
            <div class="mdl-card__media">\
                <img src="'+img+'" alt="img"  style="width:150px;height:200px;">\
            </div>\
            <div class="mdl-card__title">\
              <h2 class="mdl-card__title-text">'+name+'</h2>\
            </div>\
            <div class="mdl-card__supporting-text">\
              Phone:'+phone+'<br>\
              Address:'+country+', '+city+', '+state+'<br>\
              Latitude:'+latitude+' Longitude:'+longitude+'<br>\
            </div>\
            <div class="mdl-card__actions mdl-card--border">\
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://www.latlong.net/c/?lat='+latitude+'&long='+longitude+'" data-upgraded=",MaterialButton,MaterialRipple">Get On Map</a>\
            </div>\
        </div>';
    $("#about-desc").append(data);
  }

$("#body2").hide();

$(window).scroll(function() {
  $("#about").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
     // $(this).addClass("divNotSlideRightAnim");
      $("#body2").show();
      $("#body").hide();     
   }
    if (pos > winTop + 600) {
     // $(this).addClass("divNotSlideRightAnim");
      $("#body").show();
      $("#body2").hide();     
   }

 });
});


  function generate_message(msg, type,url) {
    INDEX++;
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=";
    str += url;
    str += ">";
    str += "          <\/span>";
    str += "          <div class=\"cm-msg-text\">";
    str += msg;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    if(type == 'self'){
     $("#chat-input").val(''); 
    }    
    $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight}, 1000);    
  }  
  


  function generate_message2(msg, type,url) {
    INDEX++;
    var str="";
    str += "<div id='cm-msg-"+INDEX+"' class=\"chat-msg "+type+"\">";
    str += "          <span class=\"msg-avatar\">";
    str += "            <img src=";
    str += url;
    str += ">";
    str += "          <\/span>";
    if(type!="user")
      str += "          <div class=\"cm-msg-text\" style=\"background: #66cc33;\">";
    else
      str += "          <div class=\"cm-msg-text\" >";
    str += msg;
    str += "          <\/div>";
    str += "        <\/div>";
    $(".chat-logs2").append(str);
    $("#cm-msg-"+INDEX).hide().fadeIn(300);
    if(type == 'self'){
     $("#chat-input2").val(''); 
    }    
    $(".chat-logs2").stop().animate({ scrollTop: $(".chat-logs2")[0].scrollHeight}, 1000);    
  }  
  

})



