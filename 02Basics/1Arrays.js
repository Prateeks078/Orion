const arr1=[1,3,5,6,8,"PRATEEK"];
console.log(arr1); 

// Arrays in JS follow the Shallow Copy Means a copy whose properties do share the same references Means Copy By Reference whereas 
// Deep Copy Means a copy whose properties do not share the same references Means Just Copied by the Value

arr1.push(67);
console.log(arr1);

const newArr=arr1.join();
console.log(arr1);
console.log(newArr);


// ******************** MAJOR DIFFERENCE BETWEEN SLICE & SPLICE **********************

const myarr=[0,1,2,3,4,5];
console.log("Original Array: ", myarr);

const myarr1=myarr.slice(1,3);
console.log("Sliced Array: ", myarr1);

const myarr2=myarr.splice(1,3);
console.log("Spliced Array: ", myarr2);
console.log("Major difference is Depicted: ", myarr);
// 1--> First Point is End wala gets included in Splice 
// 2--> Original Array se Gayab in Splice 
