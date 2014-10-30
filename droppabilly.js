// droppabilly.js
// Version: 0.1.0
// Author: Jeff Chen; github=@chienhungchen twitter=@jeffchen330
// Plugin for creating droppables to use with draggabilly.js
// This is suppose to be a barebones alternative (when coupled with draggabilly.js) to jQuery UI + touchpunch

(function(root){
    "use strict";

    //Methods
    var overlap = function(a, b) {
            var p1 = getPositions(a),
            p2 = getPositions(b);
            return comparePositions(p1[0], p2[0]) && comparePositions(p1[1], p2[1]);
        },
        getPositions = function(el) {
            var pos = offset(el),
            width = el.offsetWidth,
            height = el.offsetHeight;
            return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
        },
        comparePositions = function(p1, p2) {
            var r1, r2;
            r1 = p1[0] < p2[0] ? p1 : p2;
            r2 = p1[0] < p2[0] ? p2 : p1;
            return r1[1] > r2[0] || r1[0] === r2[0];
        },
        getDefined = function(f) {
            return (f === undefined || f === null) ? function() {} : f;
        },
        offset = function(el) { 
            //Taken from http://cvmlrobotics.blogspot.co.at/2013/03/angularjs-get-element-offset-position.html 
            var _x = 0; 
            var _y = 0; 
            var body = document.documentElement || document.body; 
            var scrollX = window.pageXOffset || body.scrollLeft; 
            var scrollY = window.pageYOffset || body.scrollTop; 
            _x = el.getBoundingClientRect().left + scrollX; 
            _y = el.getBoundingClientRect().top + scrollY; 
            return { left: _x, top:_y }; 
        };
    //Methods End

    //Droppabilly Start
    root.Droppabilly = function(el, params) {
        var curDroppabilly = el,
            flags = {
                wasOver : false,
                hasDropped : false,
                hasReleased : true,
                invokedOverFunc : false,
                invokedOutFunc : false,
                invokedDropFunc : false
            },
            draggies = document.getElementsByClassName(params.dragstersClassName);

        function dragMove(event, droppabilly, draggabilly, flags) {
            //event: over
            if(overlap(droppabilly, draggabilly)) {
                flags.wasOver = true;
                flags.invokedOutFunc = false;
                if(!flags.hasDropped && !flags.invokedOverFunc) {
                    if(params.over(droppabilly, draggabilly)) {
                        flags.invokedOverFunc = true;
                    }
                }
            }
            //event: out
            else if(flags.wasOver && !flags.hasReleased) {
                if(!flags.invokedOutFunc) {
                    if(params.out(droppabilly, draggabilly)) {
                        flags.invokedOutFunc = true;
                    }
                }
                flags.invokedOverFunc = false;
            }
        };

        function dragEnd(event, droppabilly, draggabilly, flags) {
            //event: drop on drop zone
            if(overlap(droppabilly, draggabilly)) {
                if(!flags.invokedDropFunc) {
                    params.drop(droppabilly, draggabilly);
                    flags.invokedDropFunc = true;
                }
                flags.hasDropped = true;
            }

            flags.hasReleased = true;
            flags.wasOver = false;
            flags.invokedOverFunc = false;
            flags.invokedOutFunc = false;
            flags.invokedDropFunc = false;
        };

        function dragStart(event, droppabilly, draggabilly, flags) {
            flags.hasDropped = false;
            flags.hasReleased = false;
        };

        for(var i = 0; i < draggies.length; i++) {
            draggies[i].onmousemove = function(event) {
                dragMove(event, curDroppabilly, this, flags);
            };

            draggies[i].addEventListener("touchmove", function(event) {
                dragMove(event, curDroppabilly, this, flags);
            }, false);
            
            draggies[i].onmouseup = function(event) {
                dragEnd(event, curDroppabilly, this, flags);
            };

            draggies[i].addEventListener("touchend", function(event) {
                dragEnd(event, curDroppabilly, this, flags);
            }, false);
            
            draggies[i].onmousedown = function(event) {
                dragStart(event, curDroppabilly, this, flags);
            };

            draggies[i].addEventListener("touchstart", function(event) {
                dragStart(event, curDroppabilly, this, flags);
            }, false);
        }
    };

})(this);