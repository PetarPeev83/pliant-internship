// function solve() {
//     const slideDiv = document.getElementById('slide');

//     const elementsToSlide = [`<div id="firstSlide">
// <p>"Lorem ipsum dolor sit amet consectetur, adipisicing elit."</p>
// <p>Jonny Doe | <span style='font-size:20px;'>
//     <a onclick="showSelectedParagraph(0)">&#9679;</a>
//     <a onclick="showSelectedParagraph(1)">&#9675;</a>
//     <a onclick="showSelectedParagraph(2)">&#9675;</a></span></p></div>`,
//         `<div id="secondSlide">
// <p>" Dolorem, minima explicabo doloribus quasi exercitationem cum culpa? Veniam at ipsa officiis accusantium
//     iusto consequatur. Magni."</p>
// <p>John Doe | <span style='font-size:20px;'> 
//     <a onclick="showSelectedParagraph(0)">&#9675;</a> 
//     <a onclick="showSelectedParagraph(1)">&#9679;</a> 
//     <a onclick="showSelectedParagraph(2)">&#9675;</a></span></p></div>`,
//         `<div id="thirdSlide">
// <p>"Incidunt eaque velit illum excepturi reprehenderit."</p>
// <p>Johnathan Doe | <span style='font-size:20px;'>
//      <a onclick="showSelectedParagraph(0)">&#9675;</a> 
//      <a onclick="showSelectedParagraph(1)">&#9675;</a> 
//      <a onclick="showSelectedParagraph(2)">&#9679;</a></span></p> </div>`]

//     slideDiv.innerHTML = elementsToSlide[0];

//     function replacingElements() {
//         if (slideDiv.children[0].id == "firstSlide") {
//             slideDiv.innerHTML = elementsToSlide[1];
//         } else if (slideDiv.children[0].id == "secondSlide") {
//             slideDiv.innerHTML = elementsToSlide[2];
//         } else if (slideDiv.children[0].id == "thirdSlide") {
//             slideDiv.innerHTML = elementsToSlide[0];
//         } else {
//             slideDiv.innerHTML = elementsToSlide[0];
//         }
//     };

//     function sliding() {
//         replacingElements();
//         setTimeout(() => {
//             sliding();
//         }, 5000);
//     };
//     // sliding();

//     function showSelectedParagraph(indexP) {
//         slideDiv.innerHTML = elementsToSlide[indexP];
//     };
// };