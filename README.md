#Droppabilly
Barebone, No-jQuery droppable. Use with Draggabilly, yo. (http://draggabilly.desandro.com)

##Dependencies
- Draggabilly (1.0.1+)

##License
MIT License (http://opensource.org/licenses/MIT)

##Demo
Download and load index.html in your browser for a basic demo.

##Browser Support
TBD

##Parameters
All available parameters below, put in the form of sample code. Enjoy!

``` js
var dropster = new Droppabilly(document.getElementById('drop-id'),{
	
	//--------------------
	// classname of dragsters (passes directly into document.getElementsByClassName)
	//--------------------
	dragsters: 'selector',

	//--------------------
	// function is invoked when element is over the droppabilly
	// drop is the droppabilly element
	// drag is the current draggabilly element
	//--------------------
	over: function(drop, drag) {
		//put some code here!
		//return true to make this function happen only once
	},
	
	//--------------------
	// function is invoked when element moves out of the droppabilly
	// drop is the droppabilly element
	// drag is the current draggabilly element
	//--------------------
	out: function(drop, drag) {
		//put some code here!
		//return true to make this function happen only once
	},

	//--------------------
	// function is invoked when element is dropped on the droppabilly
	// drop is the droppabilly element
	// drag is the current draggabilly element
	//--------------------
	drop: function(drop, drag) {
		//put some code here!
	}
});
```
