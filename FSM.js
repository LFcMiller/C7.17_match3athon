
function FSM(default_state){

    this.current = default_state;
    this.CheckCondition = function(){
        if(current.onCheck()){
            changeState(current,current.nextState);
        }
    }
    function changeState(current, nextState){
        current.onExit();
        nextState.onEnter();
        current = nextState;
    }
}

/*
    example : {
        nextState : null,
        onEnter : function(){

        },
        onExit : function(){

        },
        onCheck : function(){

        }
    }
*/