const nodemailer = require ('nodemailer');

const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth:{
        user:"bhavanijavvadi123@outlook.com",
        pass:"123456"
    }
})
const options = {
    from : "bhavanijavvadi123@outlook.com",

    // sending to single receiver
    // to : "bhavanijavvadi241@gmail.com",

    // sending to multiple receivers 
    // to : "bhavanijavvadi241@gmail.com, bhavanij142@gmail.com",

    to : "bhavanijavvadi241@gmail.com, bhavanij142@gmail.com",
    subject : "send a mail with node.js",
    text : "yes u got it right"
}
transporter.sendMail(options, function(err,info){
    if (err){
        console.log(err)
    }
    else{
        console.log("sent: "+ info.response);
    }
    
})