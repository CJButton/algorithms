


// Hash Directory
// Suppose a hash representing a directory. All keys are strings with
// names for either folders or files. Keys that are folders point to
// nested hashes. Keys that are files point to "true". Write a function
// that takes such a hash and returns an array of strings with the path
// to each file in the hash.




// Example:
//
// files = {
//   'a' => {
//     'b' => {
//       'c' => {
//         'd' => {
//           'e' => true
//         },
//
//         'f' => true
//       }
//     }
//   }
// }
//
// file_list(files) # => ['a/b/c/d/e', 'a/b/c/f']
