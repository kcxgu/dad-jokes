// export default function Keyboard() {
//     const keyboard = document.querySelector('.key-container')

//     const keys = [
//         'Q',
//         'W',
//         'E',
//         'R',
//         'T',
//         'Y',
//         'U',
//         'I',
//         'O',
//         'P',
//         'A',
//         'S',
//         'D',
//         'F',
//         'G',
//         'H',
//         'J',
//         'K',
//         'L',
//         'ENTER',
//         'Z',
//         'X',
//         'C',
//         'V',
//         'B',
//         'N',
//         'M',
//         '«',
//     ]
//     const guessRows = [
//         ['', '', '', '', ''],
//         ['', '', '', '', ''],
//         ['', '', '', '', ''],
//         ['', '', '', '', ''],
//         ['', '', '', '', ''],
//         ['', '', '', '', '']
//     ]

//     keys.forEach(key => {
//         const buttonElement = document.createElement('button')
//         buttonElement.textContent = key
//         buttonElement.setAttribute('id', key)
//         buttonElement.addEventListener('click', () => handleClick(key))
//         keyboard.append(buttonElement)
//     })

//     const handleClick = (letter) => {
//         if (!end) {
//             if (letter === '«') {
//                 deleteLetter()
//                 return
//             }
//             if (letter === 'ENTER') {
//                 handleInput()
//                 return
//             }
//         }
//     }

//     return (
//         <div class="key-container"></div>
//     );
// }