    // 0 dan n gacha bolgan son

        // for(i= 0; i < 5 ; i++){
        //     console.log(i)
        // }

        // n dan 1 gacha bolgan son

        // for( a = 10; a > 0; a--){
        //     console.log(a)
        // }

        // task 3
        // let sum = 0;
        // for(i = 0; i <= 10; i++){
        //         console.log(sum +=i)
        // }

        // task 4
        // let sum = 0;
        // for(i = 0; i < 10; i++){
        //     if(i % 2 == 0){
        //         console.log(sum+=i)
        //     }
        // }

        // task 5

        // let sum = 0;
        // for (i = 0; i < 10; i++) {
        //     if (i % 2 == 1) {
        //         sum += i
        //         console.log(i);
        //     }
        // }
        // console.log(sum);


        // task 6

        // let sum = prompt("son kirting");
        // for( let i = 0; i < sum; i++){
        //     if(sum % i == 0){
        //         console.log(i)
        //     }
        // }
        // console.log(sum)

        // task 7

        // let sum = parseInt(prompt("son kirting"));
        // let total = 0
        // for (let i = 0; i <= sum; i++) {
        //     if (sum % i == 0) {
        //         total += i
        //         console.log(i);
        //     }
        // }
        // console.log("yig'indi",total);


        // task 8


    //     let n = parseInt(prompt("raqam kirting"));
    //     let chek = true
    //     for(let i = 2; i  <= Math.sqrt(n); i++ ){
    //        if(n % i == 0){
    //            console.log("tub emas");
    //            chek = false
    //            break
    //        }
    // }
    // if(chek){
    //     console.log("tub son");
    // }


    // qoshmcha

    // task 1

    // let n = parseInt(prompt("musbat sondi kirting"));
    // while (n < 0) {
    //     n = parseInt(prompt("musbat sondi kirting"));
    // } 
    // alert(n);

    // foydalanuvchi musbat son kirtishni sorang 
    // agar manifi son kirtsa yana takroran kirtsin 

    // let n;
    // do{
    //    n = parseInt(prompt("musbat sondi kirting"));

    // }while(n < 0 || isNaN(n))


    // alert(n);


    // 1 dan 20gava bolgan ekranga chiqaring
    // lekin 13 ga keganda sindring


    // for( let i = 1; i <= 20; i++){
    //     console.log(i);
    //     if(i == 13){
    //         break;
    //     }
        
    // }


    // For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).

    // let a = +prompt("son_1 kirting");
    // let b = +prompt("son_2 kirting");

    // for(let i = a; i <= b; i++){
    //     console.log(i);
        
    // }

    // console.log(`${a} vs ${b} orasida ${b - a + 1} ta son bor `);
    


    
    // For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.


    // let a = +prompt("kichik sondi kirting");
    // let b = +prompt("katta sondi kiriting");
    
    //   for(let i = b - 1; i > a; i--){
        //     console.log(i);
    //   }
    //   console.log(`${b} vs ${a} orasida ${b - a - 1} ta son bor`);
      

    // For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.


    // let a = +prompt("narxdi kirting");


    // for(let i = 1; i <= 10; i++){

    //     console.log(`${i * a} som`);
    // }

    // For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

    // let a = parseFloat(prompt("narxni kirting"));
    
    
    // for(let i = 1.2; i <= 2; i += 0.2){
    //     console.log(`${i * a}`);
        
    // }


    // For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.

    // let a = +prompt("son1 kirting");
    // let b = +prompt("son2 kirting");
    // let sum = 0;
    // for(let i = a; i < b; i++){
    //     sum += i 
        
        
    // }

    // console.log(sum);

    
    // While1. A va B butun musbat sonlari berilgan (A> B). A usunlikdagi kesmada maksimal darajada B kesma joylashtirilgan. A kesmaning bo'sh qismini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.


    // let a = +prompt("A kesmani kirting");
    // let b = +prompt("B kesmani kirting ")

    // while(a >= b ){
    //     a -= b    
    // }
    // console.log(a)

    // While2. A va B butun musbat sonlari berilgan (A > B). A usunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi programma tuzilsin. Ko'paytirish va bo'lish amallarini ishlatmang.


    //  let a = +prompt("A kesmani kirting");
    // let b = +prompt("B kesmani kirting ");
    // let count = 0;
    // while(a >= b){
    //     a -= b
    //     count++        
    // }
    // console.log(count);
    
    