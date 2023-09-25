// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var maxArea = function(height) {
//     let res=0
//     let l=0
//     let r=height.length-1
//     while (l<r){
//         let area=(r-l)*Math.min(height[r],height[l])
//         res=Math.max(area,res)

//         if(height[l]<height[r])
//             l+=1
//         else
//             r-=1
//     }
//     return res
// };

var maxArea = function (H) {
  let ans = 0,
    i = 0,
    j = H.length - 1
  while (i < j) {
    ans = Math.max(ans, Math.min(H[i], H[j]) * (j - i))
    H[i] <= H[j] ? i++ : j--
  }
  return ans
}
