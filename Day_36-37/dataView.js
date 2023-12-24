// dataView
//Create dataView objects or returns a new DataView object that will represent the specified data buffer


// syntax
//new DataView(buffer, byteOffset, byteLength)

// Creating an ArrayBuffer with a size in bytes
var buffer = new ArrayBuffer(20);

// Creating views 
var view1 = new DataView(buffer); 
    
// Creating view from byte 0 for the next 4 bytes 
var view2 = new DataView(buffer,0,5);  
    
// Creating view from byte 12 for the next 2 bytes 
var view3 = new DataView(buffer,14,2); 
    
// Putting 1 in slot 0 
view1.setInt8(0, 1);  
    
// Putting 2 in slot 12 
view1.setInt8(14, 2) 
    
// Printing the views 
console.log(view2.getInt8(0)) 
console.log(view3.getInt8(0))

// Creating buffer with size in byte
var buffer = new ArrayBuffer(20);
 
// Creating a view
var dataview1 = new DataView(buffer, 0, 12);
 
// put the data 56.34 at slot 1
dataview1.setFloat32(1, 58.24);
console.log(dataview1.getFloat32(1));
