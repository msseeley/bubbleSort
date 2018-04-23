const bubbleSort=(array)=>{
  if (!Array.isArray(array)) return []
  let reorder = false;

  for (let i = 0; i < array.length; i++){
    if ( array[i] > array[i+1] ){
      reorder = true;
      let larger = array[i]
      array[i] = array[i+1]
      array[i + 1] = larger
    }
  }
  if ( reorder === false ){
    return array
  }
  else {
    return bubbleSort(array)
  }
 
}
