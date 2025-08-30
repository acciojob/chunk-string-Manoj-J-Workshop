function stringChop(str, size) {
  // your code here
	let chunks = [];
  // let x = 0;

  for(let i=0;i<str.length;i = i+ size){
    let strsub = str.slice(i,i+size);
    chunks.push(strsub);
    // x++;
  }

  return chunks;
}



// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
