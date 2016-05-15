var counts = { promyelo:0, myelo:0, meta:0, neut:0, lymph:0, erythro:0, eo:0, baso:0, mono:0, blast:0, plasma:0 };

var mc = new Hammer(myElement1);
    // Enable events
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL, threshold: 50 });
    // listen to events...
    mc.on("tap press", function(ev) {
        myElement1.textContent = ev.type +" gesture detected.";
        if(!ev.isFinal) return;
        if(ev.type == 'tap')
            counts["promyelo"]++;
        else if(ev.type == 'panleft')
            counts["blast"]++;
        update_display(myElement1);
    });

    var mc = new Hammer(myElement2);
    // Enable events
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    // listen to events...
    mc.on("tap press", function(ev) {
        myElement2.textContent = ev.type +" gesture detected.";
        if(!ev.isFinal) return;
        if(ev.type == 'tap')
            counts["myelo"]++;
        else if(ev.type == 'panright')
            counts["erythro"]++;
        else if(ev.type == 'panup')
            counts["plasma"]++;
        update_display(myElement2);
    });

    var mc = new Hammer(myElement3);
    // Enable events
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    // listen to events...
    mc.on("tap press", function(ev) {
        myElement3.textContent = ev.type +" gesture detected.";
        if(!ev.isFinal) return;
        if(ev.type == 'tap')
            counts["meta"]++;
        else if(ev.type == 'panright')
            counts["baso"]++;
        else if(ev.type == 'pandown')
            counts["mono"]++;
        update_display(myElement3);
    });

    var mc = new Hammer(myElement4);
    // Enable events
    mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });
    // listen to events...
    mc.on("tap press", function(ev) {
        myElement4.textContent = ev.type +" gesture detected.";
        if(!ev.isFinal) return;
        if(ev.type == 'tap')
            counts["neut"]++;
        else if(ev.type == 'panleft')
            counts["blast"]++;
        update_display(myElement4);
    });

function update_display(myElement) {
    var result = "";
    myElement.classList.add("colour-change");

    $(myElement).on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        myElement.classList.remove("colour-change");
    })

    // $(myElement).effect("highlight", {}, 200);

    var myResult = document.getElementById('myResult');
    for (var el in counts) {
        if( counts.hasOwnProperty(el) ) {
            result += el + ": " + counts[el] + ", ";
        }
    }
    myResult.textContent = result;

}
