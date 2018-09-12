class Sorter {
  constructor() {
  this.array = [];
  this.len = 0;
 this.comparator;
  }

  add(element) {
    this.array[this.len++] = element;
  }

  at(index) {
    if(index < this.len)
    return this.array[index];
  }

  get length() {
    return this.len;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {

   for(var x = 1; x <= (indices.length-1); x++){
    if(indices[0] > indices[x]){
    var tmp = indices[0];
    indices[0] = indices[x];
    indices[x] = tmp;
}

var arr = this.array.slice(indices[0], indices[x]+1);
if(this.comparator)
arr.sort(this.comparator);
else
arr.sort(function(a,b){return a-b;});
this.array.splice(indices[0],indices[x] -indices[0]+1 , ...arr);
}
  }


  setComparator(compareFunction) {
      this.comparator = compareFunction;

}
}
module.exports = Sorter;
