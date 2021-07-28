const TelegramApi = require('node-telegram-bot-api')
const mysql = require('mysql2')
const fs = require('fs')

const token = '1741745035:AAFzaFZxzk5wGemlZNrJzhc6XUcTgCjCRHo'

const bot = new TelegramApi(token, {polling: true})

bot.setMyCommands([
    {command: '/start', description: 'Запуск бота, приветствие'},
    {command: '/help', description: 'Описание функционала'},
    {command: '/random', description: 'Подброшу монетку!'}
])


const start = async () => {

    bot.on('message', async msg => {
        const text = msg.text;
        const chatId = msg.chat.id;

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();
        var hour = today.getHours()
        var minute = String(today.getMinutes()).padStart(2, '0');

        var time = hour + ':' + minute + ' ' + dd + '/' + mm + '/' + yyyy;
        fs.appendFile('logs.txt', ('\n\n[message] ' + text + '\n[from] ' + msg.from.username + '\n[time] ' + time), function(error){})

        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/a93/3bb/a933bb07-c608-4603-8765-ee62fb481afc/1.webp')
            await bot.sendMessage(chatId, 'Привет, я бот! Команда /help расскажет о моих основных функциях')
            return
        }

        if (text === '/help') {
            await bot.sendMessage(chatId, 'Я умею подбрасывать монетку (команда /random) и переводить некоторые английские слова на русский язык (просто напиши слово)!')
            return
        }

        if (text === '/random') {
            let rnd = Math.floor(Math.random() * 10) % 2
            if (rnd) await bot.sendMessage(chatId, 'Орёл!')
            else await bot.sendMessage(chatId, 'Решка!')
            return
        }

        const connection = mysql.createConnection({
            host: "wizzard1.beget.tech",
            user: "wizzard1_sqlbot",
            database: "wizzard1_sqlbot",
            password: "C020903c!"
        });

        var sql = "SELECT * FROM `dictionary` WHERE `eng`='" + text + "'"
        let translation = "Перевод: "
        let kol = 0
        await connection.execute(sql, async function (err, results) {
            if (err) {
                fs.appendFile('logs.txt', ('[database error] ' + 'Запрос: ' + sql), function(error){})
                await connection.close()
                return
            }
            kol = results.length
            for (var i = 0; i < results.length; i++) {
                if (i < 100) translation = translation + results[i].ru + "\n"
                else {
                    translation = translation + '\nЯ не могу выводить больше 100 переводов за раз ('
                    break
                }
            }
            if (kol === 0) {
                await bot.sendMessage(chatId, "Перевод не найден!")
                connection.close()
                return
            }
    
            await bot.sendMessage(chatId, translation)
            connection.close()
        })

    })

}


start()