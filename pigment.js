export default class Pigment{
   /**
    * Default constructor for defining a Pigment
    * @param object Object to pass variables in it.
    * 
    * Variables: 
    * * name -> The name of the Pigment
    * * style -> Define styling for the Pigment
      * 
      * Example of defining a style
      * 
      *  style = [
      * 
      * 'color: red',
      * 
      * 'background-color: black',
      * 
      * 'font-weight : bolder'
      * 
      * ]
    */
   constructor(parameters){
      /**
       * The name of the Pigment
       */
      this.name = parameters.name;
      /**
       * Define styling for the Pigment
      */
      this.style = parameters.style.join(';')
      /**
       * You may not need to chaange this. Compilation of styles of your Pigment
       */
      this.applyStyle = `padding:2px;border-radius: 3px;${this.style}`
      /**
       * This variable is predefined. Styling for the table headers for array and objects.
       */
      this.propertyStyle = [
      'color: white',
      'background : dimgrey',
      'font-weight : 500',
      'text-align : justify',
      'border-radius : 3px',
      ].join(';');
      /**
       * Works like default console.log.
       * 
       * Usage -> [Pigment variable].log([Some text])
       */
      this.log = function(text){
         //check for error
         if(typeof text !== 'string' && typeof text !== 'number'){
            throwError("Expected a string or a number")
         }
         console.log(`%c${text}`, this.applyStyle)
      }
      /**
       * Works like default console.warn.
       * 
       * Usage -> [Pigment variable].warn([Some text])
       */
      this.warn = function(text){
         //check for error
         if(typeof text !== 'string' && typeof text !== 'number'){
            throwError("Expected a string or a number")
         }
         console.warn(`%c${text}`, this.applyStyle)
      }
      /**
       * Works like default console.error.
       * 
       * Usage -> [Pigment variable].error([Some text])
       */
      this.error = function(text){
         //check for error
         if(typeof text !== 'string' && typeof text !== 'number'){
            throwError("Expected a string or a number")
         }
         console.error(`%c${text}`, this.applyStyle)
      }
      /**
       * Use this to print an Array in console
       * 
       * Usage -> [Pigment variable].array([Array variable])
       */
      this.array = function(array){
         //Throw errors
         if(typeof array === 'string'){
            throwError("Expected an Array but instead saw a String.")
         }
         if(typeof array === 'number'){
            throwError("Expected an Array but instead saw a Number.")
         }
         if(!Array.isArray(array)){
            throwError("Expected an Array.")
         }
         //length of array to print
         let index = array.length
         //count element index
         let arraycount = -1;
         console.groupCollapsed(`Array(${index})`)
         console.log(`%cIndex : Value`, this.propertyStyle)
         for(let thing of array){
            //add double quotes for string
            if(typeof thing === 'string'){
               thing = `\"${thing}\"`
            }
            arraycount++
            //Fallback; if the element is an array 
            if(Array.isArray(thing)){
               this.array(thing)
            }
            else{
            console.log(`%c${arraycount} : ${thing}`,this.applyStyle)
         }
      }
         console.dir(array);
         console.groupEnd();
      }
      let throwError = function(msg){
         let error = new Error(msg);
            error.name = 'PigmentError'
            throw error;
      }
      /**
       * Use this to print an Object in console
       * 
       * Usage -> [Pigment variable].object([Object variable])
       */
      this.object = function(object){
         //Throw errors
         if(Array.isArray(object)){
            throwError("Expected an Object but instead saw an Array.")
         }
         if(typeof object === 'string'){
            throwError("Expected an Object but instead saw a String.")
         }
         if(typeof object === 'number'){
            throwError("Expected an Object but instead saw a Number.")
         }
         console.groupCollapsed("Object")
         console.log(`%cProperty : Value`, this.propertyStyle)
         for (let key in object) {
            if (object.hasOwnProperty(key)) {
               //fallback; if element's value is a string
               if(typeof object[key] === 'string'){
                  object[key] = `\"${object[key]}\"`
               }
              console.log(`%c${key} : ${object[key]}`, this.applyStyle)
            }
         }
         console.dir(object)
         console.groupEnd();
      }
   }
}