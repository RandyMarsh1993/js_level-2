'use strict'

/*
для выполнения задания можно было бы обойтись одним выражением (оно закомментировано ниже), но я решил сохранить пробелы на своих местах и выполнить переносы строки, как в оригинале
*/

const textBlock = document.querySelector('.text');
let someText = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
    One: 'Not too bad. The weather is great isn't it?'
    Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
    Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.' `

//Первый вариант закомментировал, так как он удаляет пробел до или после кавычек
//Это, в свою очередь, не позволяет правильно разбить текст на отдельные строки
//let singleTicExp = /(\s\')|(\'\s)/gm;

const ticLineEnd = /\'\n/gm;
//выражение ищет кавычки в конце строки. Это необходимо для последующей разбивки текста на строки

const ticBeforeWord = /\s\'/gm;
const ticAfterWord = /\'\s/gm;
//сделал разные шаблоны, чтобы сохранить пробелы как в оригинальном тексте

const lineBreakEpx = /\n/gm; //выражение определяет переносы строки

let someText1 = someText.replace(ticLineEnd, '"\n');
let someText2 = someText1.replace(ticBeforeWord, ' "');
let someText3 = someText2.replace(ticAfterWord, '" ');

textBlock.insertAdjacentHTML('beforeend', someText3.replace(lineBreakEpx, '<br />'));
