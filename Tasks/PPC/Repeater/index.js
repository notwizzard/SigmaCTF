const TelegramApi = require('node-telegram-bot-api')
const randomWords = require('random-words')

const token = '1885482338:AAGjsD06x48JXArRF82Pp5x9TRpWxMt4YjY'

const bot = new TelegramApi(token, {polling: true})

let flag = 'error_you_are_extremely_stubborn'

let chatsHits = {}
let chatLastWord = {}
let chats = []
let wordsRequires = 2000

const start = async () => {

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        if (chats.indexOf(chatId) == -1) {
            let nw = randomWords(1)
            await bot.sendMessage(chatId, 'Привет, если хочешь получить флаг, докажи, что ты робот!\nПовторяй за мной!\n')
            await bot.sendMessage(chatId, '' + nw)

            chats.push(chatId)
            chatsHits[chatId] = 0
            chatLastWord[chatId] = nw
        }
        else {
            let rest = wordsRequires - chatsHits[chatId]

            if (text == chatLastWord[chatId]) {
                chatsHits[chatId] ++
                rest --
                await bot.sendMessage(chatId, 'Верно!\nОсталось повторить ' + rest + ' слов')
                if (rest > 0) {
                    let nw = randomWords({exactly:1, wordsPerString:1 + Math.floor(chatsHits[chatId] / 100)})
                    chatLastWord[chatId] = nw
                    await bot.sendMessage(chatId, '' + nw)
                }
            }
            else {
                await bot.sendMessage(chatId, 'Неверно! Придется начинать заново')
                chats.splice(chats.indexOf(chatId), 1)
                return
            }

            if (rest <= 0) {
                await bot.sendMessage(chatId, 'Конечно, до моих мощностей тебе еще далеко, и все же... ТЫ НЕВЕРОЯТЕН!\nТвой флаг: ' + flag)
            }
        }

    })

}


start()