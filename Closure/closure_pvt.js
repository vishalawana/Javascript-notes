function sectionHolder(secret){ // private variable secret
    return {
        getSecret: function(){
            return secret;
        },
        setSecret: function(newSecret){
            return secret = newSecret;
        }
    };
}
const holder = sectionHolder("Initial");
console.log(holder.getSecret()); // Output: Initial
holder.setSecret("Updated");
console.log(holder.getSecret()); // Output: Updated