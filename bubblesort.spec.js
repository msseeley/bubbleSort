describe('Bubble Sort', function(){
  const unsorted = [8,7,6,5,4,3,2,1]
  const sorted = [2,3,4,5,6]
  it('handles an empty array', function(){
    expect( bubbleSort([])).toEqual( [] )
  })
  it('sorts an array', function(){
    expect( bubbleSort(unsorted)).toEqual([1,2,3,4,5,6,7,8])
  })
  it('returns a properly assorted array', function(){
    expect( bubbleSort(sorted)).toEqual([2,3,4,5,6])
  })
})
