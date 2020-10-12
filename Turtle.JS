// ---------------------Ex7: -----------------
// penup()
// rt(90)
// fd(100)
// lt(90)
// fd(50)

// ---------------------Ex8: -----------------
// penup()
// rt(90)
// fd(100)
// lt(90)
// fd(50)
// pendown()
// for ( let i =0 ; i<4 ; i++){
//     fd(20);
//     rt(90);
// }

//---------------------Ex9: -----------------
// penup()
// rt(90)
// fd(100)
// lt(90)
// fd(50)
// pendown()
// fd(40)
// rt(90)
// fd(20)
// rt(90)
// fd(40)
// rt(90)
// fd(20)
// rt(90)

// const cmds = [
//     {
//         shape: 'square',
//         x: 20,
//         y: 40,
//         width: 50,
//     },
//     {
//         shape: 'rect',
//         x: 8,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 70,
//         y: 70,
//         width: 12,
//         height: 40,
//     },
//     {
//         shape: 'rect',
//         x: 10,
//         y: 20,
//         width: 70,
//         height: 20,
//     },
//     {
//         shape: 'square',
//         x: 25,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 33,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 50,
//         y: 40,
//         width: 14,
//     },
//     {
//         shape: 'square',
//         x: 58,
//         y: 42,
//         width: 6,
//     },
//     {
//         shape: 'square',
//         x: 40,
//         y: 25,
//         width: 8,
//     },
//     {
//         shape: 'square',
//         penWidth: 1,
//         x: 500,
//         y: 500,
//         width: 15,
//     },
// ]
// for(let x of cmds){
//     if(a.shape == "square") {
//        penup();
//        rt(90);
//        fd(a.x);
//        lt(90);
//        fd(a.y);
//        pendown();
//        for(i=0; i < 4; i++){
//            fd(a.width);
//            rt(90);
// }
// home();
// } else if(a.shape === "rect") {
//        penup();
//        rt(90);
//        fd(a.x);
//        lt(90);
//        fd(a.y);
//        pendown();
//        for(i=0; i < 2; i++){
//           fd(a.height);
//           rt(90);
//           fd(a.width);
//            rt(90) ;
// }
// }
// home();
// }
