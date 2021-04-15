//Deklarierung der funktionen trafficlight & pedestrian
var trafficLight = new TrafficLight(),
    pedestrian = new Pedestrian();

//Observer wird deklariert welcher dem pedestrian zugeschrieben ist
    trafficLight.observable.addObserver(pedestrian);
    trafficLight.switchColor();
    trafficLight.switchColor();

   function TrafficLight() {
       var self = this, color = 'red';
//self = this -> self = TrafficLight
       self.observable = new ObservableT();
       self.switchColor = function () {
           //If grün Gibt
           if (color === 'red') color = 'green';
           else color = 'red';
           console.log("Color now is: " + color);
           //Übergabe der Farbe an den Observer
           self.observable.notifyObservers(color);
       };
       //Erstellung observer
       function ObservableT() {
           var observers = [];
           this.addObserver= function(observer) {
               observers.push(observer);
           };
           //gib nachricht an Observer solange Observer.lenght größer i
           this.notifyObservers= function(data) {
               //observer.length ist am anfang 0, wechselt dann auf 1
               for (var i= 0; i< observers.length; i= i+ 1)
                   observers[i].update(data);
               //beende update sobald observer.length = 1
               console.log("Forlänge: " + observers.length);
           };
           console.log("länge: " + observers.length);
       }
   }
   function Pedestrian() {
       var self = this;
       self.update = function (color) {
           //Wenn rot mach "waiting" ansonsten "Walking"
           if (color === 'red')
               console.log("Waiting");
           else console.log("Walking");
       };

   }
