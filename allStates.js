var allStates = {
    //dont modify it
    //maybe need a onState which can update every 0.02sec or something like that
    example : {
        nextState : null,
        onEnter : function(){

        },
        onExit : function(){

        },
        onCheck : function(){

        }
    },
    wait_first_input : {
        nextState : null,
        onEnter : function(){
            console.log("wait_first_input onEnter");
        },
        onExit : function(){
            console.log("wait_first_input onEnter");
        },
        onCheck : function(){
            /*if(some condition === true){
                change the nextState
                return true;
            }*/
            return false;
        }
    },
    wait_second_input :{
        nextState : null,
        onEnter : function(){
            console.log("wait_second_input onEnter");
        },
        onExit : function(){
            console.log("wait_second_input onEnter");
        },
        onCheck : function(){
            /*if(some condition === true){
                change the nextState
                return true;
            }*/

            return false;
        }
    }
};