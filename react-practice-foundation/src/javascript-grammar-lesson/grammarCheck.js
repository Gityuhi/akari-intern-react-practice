// // 1. アロー関数 (Arrow Function) function add(a, b) { return a + b; } この従来の関数宣言を、アロー関数を使った形に書き換えてください。
// // const function((a, b) => {
// //     return a + b
// // })

// export const Sum = (a, b) => {
//   return a + b;
// };

// // 2. map (配列の変換) const numbers = [1, 2, 3]; この配列の各要素を2倍にした、新しい配列 [2, 4, 6] を、map とアロー関数を使って作成してください。
// const numbers = [1, 2, 3];
// export const number = numbers.map((num2) => {
//   return num2 * 2;
// });
// console.log(number);

// // 3. filter (配列の絞り込み) const scores = [80, 45, 100, 60]; この配列から、60 点以上の要素だけを抽出した、新しい配列 [80, 100, 60] を、filter とアロー関数を使って作成してください。
// const scores = [80, 45, 100, 60];
// export const highScore = scores.filter((score) => {
//   return score >= 60;
// });
// console.log(highScore);

// // 4. 三項演算子 (Ternary Operator) let score = 85; let result; if (score >= 80) { result = "合格"; } else { result = "不合格"; } このif文を、三項演算子を使って result に値を代入する一行のコードに書き換えてください。
// // let score = 85;
// // let result;
// // if (score >= 80) {
// //   result = "合格";
// // } else {
// //   result = "不合格";
// // }

// let score = 85;
// let result = score >= 80 ? "合格" : "不合格";
// console.log(result);

// // 5. スプレッド構文 (Spread Syntax - 配列の結合) const arr1 = [1, 2, 3]; const arr2 = [4, 5, 6]; スプレッド構文を使って、これら2つの配列を結合した新しい配列 [1, 2, 3, 4, 5, 6] を作成してください。

// // ・コピー
// // ・展開
// // ・まとめる
// // ・結合

// // 展開
// // const arr1 = [1, 2]
// // console.log(...arr1); // 出力結果 1 2

// // const sumNum = (a, b) => console.log(a + b);
// // // sumNum(arr1[0], arr1[1])
// // // スプレッド構文を使って配列を展開すると,順番に引数に代入される。
// // sumNum(...arr1)

// // // 配列をまとめて受け取る
// // const arr2 = [1, 2, 3, 4, 5]
// // const [a, b, ...arr3] = arr2
// // console.log(arr3); // 出力結果[3, 4, 5]

// // // コピー
// // const arr4 = [10, 20, 30]
// // const arr5 = [40, 50, 60]
// // // 展開した配列を[]で囲うことでコピーされた配列にする
// // const arr6 = [...arr4]
// // arr6[2] = 100
// // console.log(arr6);
// // // arr6はarr4のコピーだからarr4は変わらない
// // console.log(arr4);

// // // 結合
// // const arr7 = [...arr4, ...arr5]
// // console.log(arr7);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// // 6. スプレッド構文 (Spread Syntax - オブジェクトのコピー) const user = { id: 1, name: "山田" }; スプレッド構文を使って、このuserオブジェクトのプロパティをすべてコピーし、さらに age: 30 というプロパティを追加した、新しいオブジェクト newUser を作成してください。
// const user = { id: 1, name: "山田" };
// const newUser = { ...user, age: 30 };
// console.log(newUser);

// // 7. 論理積演算子 && (Reactの条件付きレンダリング) const isLoggedIn = true; isLoggedIn が true の場合のみ、コンソールに "ようこそ" と表示するコードを、&& 演算子を使って一行で書いてください。（if文は使わないでください）
// const isLoggedIn = true;
// let welcome = isLoggedIn && "ようこそ";
// console.log(welcome);

// 🚀 Level 2: Reactを意識した「使う」練習
// （目的：ReactのState操作で必須となる、配列・オブジェクトの「イミュータブル（不変）な」操作を実践する）

// 1. map + オブジェクト配列の変換 const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }]; このユーザーの配列から、name プロパティだけを抜き出した新しい配列 ["Alice", "Bob"] を map を使って作成してください。
// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// export const userName = users.map((user) => {
//   return user.name;
// });

// 2. filter + map (メソッドチェーン) const products = [{ name: "Apple", price: 100 }, { name: "Banana", price: 80 }, { name: "Orange", price: 120 }]; price が 90 以上の商品だけを filter で絞り込み、そのまま続けて map を使い、その商品の name だけの配列 ["Apple", "Orange"] を作成してください。
// const products = [
//   { name: "Apple", price: 100 },
//   { name: "Banana", price: 80 },
//   { name: "Orange", price: 120 },
// ];

// export const productName = products
//   .filter((product) => product.price >= 90)
//   .map((product) => product.name);
// console.log(productName);

// 3. スプレッド構文 (Stateの一部更新) const userState = { id: 1, name: "田中", age: 25 }; const newName = "鈴木"; Reactの useState で name だけを更新する時を想定してください。 userState の name プロパティだけを newName の値で更新した、新しいオブジェクト updatedState をスプレッド構文を使って作成してください。（id と age は元の値を引き継ぐこと）
// const userState = { id: 1, name: "田中", age: 25 };
// const newName = "鈴木";
// export const updatedState = { ...userState, name: newName };

// 4. アロー関数 + filter (Stateからの要素削除) const todos = [{ id: 1, task: "A" }, { id: 2, task: "B" }, { id: 3, task: "C" }]; const targetId = 2; todos 配列から id が targetId（つまり 2）と一致する要素を除外した、新しい配列 newTodos を filter を使って作成してください。
// const todos = [
//   { id: 1, task: "A" },
//   { id: 2, task: "B" },
//   { id: 3, task: "C" },
// ];
// const targetId = 2;

// export const newTodos = todos.filter((todo) => todo.id !== targetId)

// 5. スプレッド構文 + map (State内の特定要素の更新) const posts = [{ id: 1, title: "Post 1", liked: false }, { id: 2, title: "Post 2", liked: false }]; const targetPostId = 1; posts 配列を map でループ処理します。 id が targetPostId（つまり 1）と一致する投稿だけ、liked プロパティを true に変更してください。 id が一致しない他の投稿は、そのままのオブジェクトを返してください。 （map の中で三項演算子とスプレッド構文を組み合わせると解けます）
// const posts = [
//   { id: 1, title: "Post 1", liked: false },
//   { id: 2, title: "Post 2", liked: false },
// ];
// const targetPostId = 1;

// export const newPosts = posts.map((post) => {
//     return post.id == targetPostId ? {...post, liked: "true"} : {...post}
// })

// 1. テンプレート文字列 (Template Strings) const user = { name: "鈴木", age: 28 }; このuserオブジェクトを使い、「こんにちは、鈴木さん。あなたは28歳です。」という文字列を、テンプレート文字列（バッククォート `` と ${}）を使って作成し、コンソールに表示してください。
// const user = { name: "鈴木", age: 28 };
// console.log(`こんにちは、${user.name}さん。あなたは${user.age}歳です。`);

// 2. 分割代入 (Object Destructuring) const props = { title: "React課題", priority: "High" }; このpropsオブジェクトから、titleとpriorityという2つの変数を一行で取り出す、分割代入のコードを書いてください。 （const title = ... や const priority = ... と2行で書くのはNGです）
// const props = { title: "React課題", priority: "High" }
// const { title, priority} = props
// console.log(`title: ${title}
//     priority: ${priority}`);

// 3. 分割代入 (Array Destructuring) const [todos, setTodos] = useState(...); は、まさにこれです。 const colors = ["Red", "Green", "Blue"]; この配列から、1番目の要素をprimaryColor、2番目の要素をsecondaryColorという変数に一行で取り出す、分割代入のコードを書いてください。
// const colors = ["Red", "Green", "Blue"]
// const [primaryColor, secondaryColor] = colors

// 4. デフォルト値 (in Destructuring) const settings = { theme: "dark" }; このsettingsオブジェクトから、themeとfontSizeを分割代入で取り出してください。 ただし、fontSizeはsettingsの中に存在しないため、デフォルト値として 16 が代入されるようにコードを書いてください。
// const settings = { theme: "dark" }
// const { theme, fontSize = 16} = settings

// 5. デフォルト値 (in Function Parameters) function createGreeting(name) { return "こんにちは、" + name + "さん"; } この関数を、nameが渡されなかった場合（createGreeting()と引数なしで呼ばれた場合）でも、"こんにちは、ゲストさん"と返せるように、引数にデフォルト値を設定する形で修正してください。
function createGreeting(name = "ゲスト") {
  return "こんにちは、" + name + "さん";
}
createGreeting()