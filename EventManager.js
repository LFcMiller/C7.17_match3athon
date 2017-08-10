
function EventManager(){

    var events = [];

    this.add_listener = function (event_name, callback){
        var e = getEventByName(event_name);
        if(e === null){
            e = new Event(event_name);
            e.listener.push(callback);
            events.push(e);
        }else{
            for(var li in e.listener){
                if(e.listener[li] === callback){
                    return;
                }
            }
            e.listener.push(callback);
        }
    };

    this.remove_listener = function(event_name, callback){
        var e = getEventByName(event_name);
        for(var li in e.listener){
            if(e.listener[li] === callback){
                e.listener.splice(li,1);
            }
        }
    };

    this.raise = function(event_name, sender, arg1, arg2, arg3){
        var e = getEventByName(event_name);
        for(var li in e.listener){
            e.listener[li](event_name, sender, arg1, arg2, arg3);
        }
    };

    function getEventByName(name){
        for(var e in events)
            if(events[e].name === name) return events[e];
        return null;
    };

    function Event(name){
        this.name = name;
        this.listener = [];
    }
}

