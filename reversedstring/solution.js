function solution(str){
  let split = str.split('')
  let result = []
  for (let i = split.length - 1; i >= 0; i = i-1) {
    result.push(split[i])
    }
    console.log(result)
    let ans = result.join('')
    return ans
}