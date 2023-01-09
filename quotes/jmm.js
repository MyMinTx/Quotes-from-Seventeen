function change() {
    var x = document.getElementById("light-text");
    if (x.innerHTML === "OFF") {
        x.innerHTML = "ON";
    } else {
        x.innerHTML = "OFF";      
    }
    var element = document.body;
    element.classList.toggle("lights-on");
}

const quotes = [{
    quote: '" คุณต้องทำ 150% หรือเตรียมตัวให้มากกว่านั้นเสมอเพราะถ้าคุณพลาดคุณก็จะยังทำได้ 100% "',
    writer: '-Hoshi-'
}, { quote: '" เมมเบอร์มีค่ากับผมมากกว่าบริษัทอีกครับ "',
writer: '-Scoups-'
}, { quote: '" ถ้าเซเว่นทีนเป็นดอกไม้ กะรัตก็เป็นเหมือนกับน้ำ "',
writer: '-Wonwoo-'
}, { quote: '" บางคนบอกว่า คุณจะประสบความสำเร็จในชีวิต ถ้าคุณมีเพื่อนที่ดี 2-3 คน แต่ผมมีพวกเขาแล้วถึง 12 คน "',
writer: '-Jeonghan-'
}, { quote: '" อยากเอาชนะฉันงั้นเหรอ แค่นั้นนายก็แพ้แล้ว "',
writer: '-Jeonghan-'
}, { quote: '" ขนาดพระอาทิตย์ยังขึ้นใหม่ในทุกๆวันตัวผมเองก็จะรีเซ็ตใหม่ในทุกๆวันเหมือนกัน "',
writer: '-Jun-'
}, { quote: '" เดินเร็วกว่าไม่ได้หมายความว่ามันดีกว่าเสมอไป เดินอย่างช้าๆบนทางที่คุณเชื่อมั่น อาจจะทำให้คุณได้เห็นทิวทัศน์ที่คนเดินเร็วกว่าไม่เคยเห็น "',
writer: '-Hoshi-'
}, { quote: '" เมื่อเวลาฝนตกพวกเราต่างเป็นร่มในกันและกันเมื่อเวลาแดดจ้าพวกเราต่างเป็นเป็นร่มเงาให้กันและกัน "',
writer: '-Hoshi-'
}, { quote: '" เมื่อรอยเท้าเล็กๆ ของฉันกองพะเนิน สักวันหนึ่งจะมีการสร้างถนนที่มั่นคง "',
writer: '-Woozi-'
}, { quote: '" ไม่ต้องคาดหวังที่จะให้ทุกคนมารักคุณ ก็เพราะว่าตัวเองยังไม่สามารถรักคนทุกคนได้เลย "',
writer: '-Scoups-'
}, { quote: '" ไม่ว่าใครจะพูดอะไร ตัวละครหลักในชีวิตของคุณก็คือคุณ เพราะฉะนั้นเชื่อมั่นและก้าวต่อไป "',
writer: '-DK-'
}, { quote: '" คุณจะเจ็บปวดได้ก็ตอนที่พูดเรื่องที่ทำร้ายคนอื่นใช่มั้ยล่ะครับ? คุณไม่ควรพูดกับคนอื่นแบบนั้นเลย "',
writer: '-Scoups-'
}]

let btn = document.querySelector("#Qbtn");
let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");

btn.addEventListener("click",function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
})