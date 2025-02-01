function saturdayFun(team = "play, soccer"){
    if (`This Saturday, I want to ${team}!`);
}
saturdayFun()
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
 const mondayWork = function(activity = "go to the office") {
 return `This Monday, I will ${activity}.`;
    
}
console.log(mondayWork())
console.log(mondayWork("work from home."))

function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    };
}