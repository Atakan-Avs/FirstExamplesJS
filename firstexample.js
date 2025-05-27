/* function test() {
    if (true) {
        let message ="Var ile tanımladım!";
        console.log(message); // çıktı : "Var ile tanımladım!"
}
}
    test(); */

/* for (let i =0; i<3; i++) {
    console.log("Döngü içindeki i: " , i);
    console.log("Döng, dışındaki i: " , i); // çıktı: "Döngü dışındaki i: 3"
} */

/* function testLet() {
    if (true) {
        let message = "Let ile tanımladım!";
        console.log(message); // çıktı: "Let ile tanımladım!"
        console.log(message); // Referans hatası: message is not defined
    }
    
}
testLet(); */


/* for (let i = 0; i<3; i++) {
    console.log("Döngü içindeki i: ", i);
}
console.log("Döngü dışındaki i: ", i); */

/* const PI = 3.14159;
console.log(PI); // çıktı: 3.14
PI = 3.14159; // TypeError: Assignment to constant variable */

/* const colors = ["red", "green", "blue"];
colors.push("yellow");
console.log(colors); // çıktı: ["red", "green", "blue", "yellow"] */

/* let mesaj ="Hello world!";
selam = 'Merhaba JavaScript!';
console.log(mesaj); // çıktı: "Hello world!"
console.log(selam); // çıktı: "Merhaba JavaScript!" */

/* let mesaj = "Hello world!";
console.log(f"Mesajın uzunluğu : , mesaj.lengt"); // çıktı: "Hello world!" */

/* let mesaj ="JavaScript";
console.log(mesaj.charAt(0)); // çıktı: "J"
console.log(mesaj.charAt(4)); // çıktı: "S" */

/* let mesaj = "JavaScript";
console.log(mesaj.toUpperCase()); // çıktı: "JAVASCRIPT"
console.log(mesaj.toLowerCase()); // çıktı: "javascript" */


/* let mesaj = "Merhaba Dünya!";
console.log(mesaj.indexOf("a")); // çıktı: 4
console.log(mesaj.lastIndexOf("a")); // çıktı: -1 (büyük-küçük harf duyarlı) */

/* let mesaj = "JavaScript";
console.log("İlk dört karakter : " , mesaj.slice(0,4)); 
console.log("Son dört karakter : " , mesaj.slice(4)); // çıktı: "Script" */

/* let mesaj = "JavaScript";
console.log(mesaj.substring(4,10)); // çıktı: "Script"
console.log(mesaj.substr(4,3)); // çıktı: "Scr"  */

/* let mesaj = "Merhaba JavaScript";
console.log(mesaj.replace("JavaScript", "Dünya")); // çıktı: "Merhaba Dünya" */

/* let mesaj = "JavaScript öğreniyorum";
console.log(mesaj.includes("JavaScript")); // çıktı: true
console.log(mesaj.includes("Python")); // çıktı: false  */

/* let mesaj = "JavaScript öğreniyorum";
console.log(mesaj.startsWith("Java")); // çıktı: true
console.log(mesaj.endsWith("yorum")); // çıktı: true  */

/* let mesaj = "   JavaScript   ";
console.log(mesaj.trim()); // çıktı: "JavaScript"  // boşlukları kaldırır */


/* let mesaj = "Merhaba , Dünya , JavaScript!";
console.log(mesaj.split(",")); // çıktı: ["Merhaba ", " Dünya ", " JavaScript!"] */

//ÖRNEK1

/* function formatName(firstName, lastName) {
    let formattedFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    let formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    return `${formattedFirstName} ${formattedLastName}`;
}

console.log(formatName("john", "doe")); // çıktı: "John Doe" */




//ÖRNEK2// 
/* function countWords(sentence) {
    // Cümledeki boşlukları temizle ve kelimeleri ayır
    let words = sentence.trim().split(/\s+/);
    return words.length;
}
console.log(countWords("Merhaba bugün JavaScript öğreniyorum.")); // çıktı: 4 */


//ÖRNEK3   kullanıcıdan alınan e-posta adresinin geçerliliğini kontrol etme

/* function validateEmail(email) {
    if (!email.includes("@") || !email.includes(".com")) {
        return "Geçersiz e-posta adresi!";
    }
    return "Geçerli e-posta adresi";
}

console.log(validateEmail("aaaaaaa@.comgmalil")); */


//ÖRNEK4  kullanıcıdan bir kelime alın ve bu kelimenin ters çevrilmiş halini ekrana yazdırın
/* function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("JavaScript")); // çıktı: "tpircSavaJ" */


//ÖRNEK5  kullanıcının girdiği bir cümledeki tüm "kötü" kelimeleri sansürleyin. örnegin "JavaScript çok zor" cümlesinde "zor" kelimesini sansürleyin
/* function censorWord(sentence, wordToCensor) {
    let censoredWord = "*".repeat(wordToCensor.length);
    return sentence.replace(new RegExp(wordToCensor, "g"), censoredWord);
}
console.log(censorWord("JavaScript çok zor", "zor")); // çıktı: "JavaScript çok ***"  */


//ÖRNEK6  kullanıcının girdiği bir isim listesindeki isimleri uygun biçime dönüştürerek ekrana yazdırın. tüm isimlerin ilk harfi büyük diger harfleri kücük olacak.
 /* function formatNames(names) {
    return names.map(name => {
        let formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        return formattedName;
    });
}

let namesList = ["ali", "veli", "ayşe", "fatma"];
console.log(formatNames(namesList)); // çıktı: ["Ali", "Veli", "Ayşe", "Fatma"] 

console.log("Orjinal isim listesi: ", namesList); // çıktı: ["ali", "veli", "ayşe", "fatma"]
console.log("Biçimlendirilmiş isim listesi: ", formatNames(namesList)); // çıktı: ["Ali", "Veli", "Ayşe", "Fatma"] */


//ÖRNEK7  kullanıcıdan bir iism alın ve ismi içeren özel bir mesaj oluşturun. örneğin kullanıcı "Ali" ismini girdiyse "Merhaba Ali, JavaScript öğrenmeye hoş geldin!" mesajını oluşturun
 /* function createWelcomeMessage(name) {
    return `Merhaba ${name}, JavaScript öğrenmeye hoş geldin!`;
}
let userName = "Ali";
console.log(createWelcomeMessage(userName)); // çıktı: "Merhaba Ali, JavaScript öğrenmeye hoş geldin!" 

console.log("Kullanıcı ismi: ", userName); // çıktı: "Ali"
console.log("Hoş geldin mesajı: ", createWelcomeMessage(userName)); // çıktı: "Merhaba Ali, JavaScript öğrenmeye hoş geldin!" */

