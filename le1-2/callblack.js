function createQuote(quote, callback) {
    let myQuote = "Like I always say, " + quote;
    callback(myQuote); // 2 เรียกฟังชั่นตัวล่าง
  }
  
  function logQuote(quote) { // เรียก logQuote ตัวล่างจากบรรทัดที่ 3
    console.log(quote + ' Yes..');
  }
  
  createQuote(" you will getting better!", logQuote); // 1