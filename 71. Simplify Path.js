var simplifyPath = function (path) {
  let arr = path.split("/");
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "") continue;
    if (arr[i] === ".") continue;
    if (arr[i] === "..") {
      ans.pop();
      continue;
    }
    ans.push("/" + arr[i]);
  }
  if (ans.length === 0) return "/";
  return ans.join("");
};

let input = "//////home/";
input = "/../";
console.log(simplifyPath(input));
// Output= "/home"

input = "/home/user/Documents/../Pictures";
console.log(simplifyPath(input));
// Output= "/home/user/Pictures"

input = "/../home/user/Documents";
console.log(simplifyPath(input));
// Output= "/home/user/Documents"

input = "/home/user/../../usr/local/bin";
console.log(simplifyPath(input));
// Output= "/usr/local/bin"

input = "/home/user/./Downloads/../Pictures/././";
console.log(simplifyPath(input));
// Output= "/home/user/Pictures"

input = "/home/user/Documents/../../usr/local/bin";
console.log(simplifyPath(input));
// Output= "/usr/local/bin"

input = "/home/user/Documents/../../../usr/local/bin";
console.log(simplifyPath(input));
// Output= "home/usr/local/bin"

// CHEAT CODE :
// " . " ==> Continue (current directory);
// " . . " ==> Remove the before directory;
// " // " ==> make it into "/"
