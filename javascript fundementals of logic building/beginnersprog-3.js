//baby programs for logic building #11
// grid pattern of *

function Stars(n){
    for(let i=0;i<n;i++){
        let row="";                 
        for(let j=0;j<n;j++){
            row+="*";
        }   
        console.log(row);
    }
}
Stars(5); // Prints a 5x5 grid of stars.




//baby programs for logic building #12
//array of *

function Stars(n){
    let s=[];

    for(let i=0;i<n;i++){
        let row="";
        for(let j=0;j<n;j++){
            row.push('*');

        }
        s.push(row);
    }
    return s;
}

console.log(Stars(5)); // Prints a 5x5 array of stars.



//baby programs for logic building #13
// right aligned triangle of *

/*  
    *
   **
  ***
 ****
*****   
row:space:stars 
1:4:1
1:3:2
2:2:3
3:1:4

spaces=n-row-1
stars=row+1
*/

function Star(n){
for(let i=0;i<n;i++){
    let row="";
    for(let j=0;j<n-i-1;j++){
        row+=" ";
    }
    for(let k=0;k<i+1;k++){
        row+="*";
        }
    console.log(row);       
    }
       

}
Star(5); // Prints a right-aligned triangle of stars.






