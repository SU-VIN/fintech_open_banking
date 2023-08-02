let car = {
  name: "sonata",
  ph: "500ph",
  start: function () {
    console.log("start!!!");
  },
  stop: function () {
    console.log("stop");
  },
};

console.log(car.name);
car.start();
console.log(car.stop);
