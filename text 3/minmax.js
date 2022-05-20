function getMin(arr, n){
    	let res = arr[0];
        
    	for(let i = 1; i < n; i++)
    		res = Math.min(res, arr[i]);
            
    	return res;
    }
    function getMax(arr, n)
    {
    	let res = arr[0];
        
    	for(let i = 1; i < n; i++)
    		res = Math.max(res, arr[i]);
            
    	return res;
    }
    
    let arr = [ 3, 2, 1, 56, 10000, 167 ];
    let n = arr.length;
    	console.log(getMin(arr, n) )
    console.log(getMax(arr, n));
    