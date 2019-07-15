## Инструкция по запуску

**Превью**: убедитесь, что на вашем компьютере установлен git. Если git отсутствует, то:
 Для Windows скачайте по ссылке https://git-scm.com/download/win и установите, следуя инструкциям
 Для Ubuntu выполните следующие команды в терминале:
  `sudo apt-get update`
  `sudo apt-get install git-core`
  `git --version`

*1. Для запуска необходима установленная среда Node.js.*
  - Для Ubuntu Node.js можно установить через менеджер пакетов. Откройте терминал и введите следующие команды:
    `curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
    `sudo apt-get install -y nodejs`
  - Для Windows нужно перейти по ссылке https://nodejs.org/en/download/ и скачать, следуя инструкциям
  - Перезагрузите компьютер

*2. Проверьте, что Node.js установлен с помощью команды `node -v` в терминале Ubuntu или в консоли Windows*
*3. Проверьте, что менеджер пакетов npm установлен с помощью команды `npm -v` (Устанавливается вместе с Node.js)*
*4. Также необходим менеджер пакетов yarn.*
 - Для Ubuntu нужно выполнить в терминале следующие команды:
    `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`
    `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
    `sudo apt-get update && sudo apt-get install yarn`
 - Для Windows нужно проследовать инструкции по ссылке:
  https://yarnpkg.com/lang/en/docs/install/#windows-stable

*5. Проверьте, установлен ли yarn с помощью команды* `yarn --version` *в терминале Ubuntu или в консоли Windows*
*6. Если yarn установлен, склонируйте репозиторий с помощью команды* `git clone https://github.com/shinnik/startblock-frontend-demo.git`
*После этого выполните команду* `git checkout development` *, чтобы перейти в ветку разработки.*
*7. Перейдите в папку с проектом и выполните следующие команды:*
 `sudo yarn install`
 `yarn start`
*8. Проект должен открыться в браузере по адресу localhost:3000*