let list = []; 
module.exports = {
    name: 'stake',
    cooldown: 5,
    description: 'Things about Stake',
    execute(client, config, message, args) {
        if(args[0] == "affiliate") {
        message.channel.send('Sing up via https://stake.com/?c=4b9a20a3c8 and get free $7!');
        }
        if(args[0] == "help") {
            message.channel.send('When you sing up with our affiliate link on Stake, write your name in #stakeaffiliate room, then we will forward it to admins and they will add a "Reload" option on your account (so you will get daily 1$ for 1 week)');
            }
     if(args[0] == "add") {
           if(list.includes(args[1])) {
               message.channel.send('Error adding your name: your name is added already!');

           }
           else { 
               list.push(args[1]);
               message.channel.send('Successfully added your name to new users list for Stake!');
           }
            }
              
     if(args[0] == "list") {
         if(!args[1]) {
         if(list.length == 0) { 
             message.channel.send("The user list is empty!");
         }
         else {
         message.channel.send(`Here is the list of added users: ${list}`);
         }
        }
        else {
        if(args[1] == "add") {
            if(list.includes(args[2])) {
                message.channel.send('Error adding your name: your name is added already!');
 
            }
            else { 
                list.push(args[2]);
                message.channel.send('Successfully added your name to new users list for Stake!');
            }
             }
            }
     }       
    },
};
