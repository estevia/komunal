CYPRESS WEB
================================

Installation package cypress
----------------------------
1. install npm `npm install`
2. install cypress `npm install cypress --save-dev`
3. install cypress browser permission `npm i cypress-browser-permissions --save-dev`
4. install type script `npm install typescript --save-dev`
5. `npm install --save-dev dotenv cypress-dotenv`
6. upload file `npm install --save-dev cypress-file-upload`
7. sesuaikan `function.js` dan `.env`
8. `npm run cy:open`
   <!-- `npx cypress open` untuk menjalankan semua testing sekaligus -->
   <!-- `./node_modules/.bin/cypress open` untuk menjalankan spesific test file -->

create branch 
-------------
`https://dev.azure.com/lemonilo/Lemonilo%20Testing/_git/lemonilo-frontend-web-e2e/branches` --> click button `New Branch`
`git checkout -b feature/{namabranch}` --> buat branch baru di local

push branch ke azure
--------------------
1. `git status` --> pastikan sedang di branch kalian sendiri
2. `git add .` -> add semua file changes akan masuk ke stages
   `git add {namafile}` -> add per file change akan masuk ke stage
3. `git commit -m "PesanCommit"` ->  commit file stages dengan memakai pesan commit contoh "update file.js"
4. `git log` -> memastikan commit sudah masuk
5. `make add-latest-tag` ->  push otomatis membuat tag version (keperluan run pipeline - release)
   `git push origin {namabranch}` -> push ke azure (jika branch nya sudah ada di azure)
   `git push -u origin {namabranch}`-> push ke azure (jika branch nya baru di local)
6. pastikan di azure sudah masuk dan cek kembali sudah sesuai
7. lakukan `pull request` di azure dan add reviewer dari 2 orang team SDET
8. ketika reviewer sudah approved lakukan `complete` untuk `merge ke main`
9. author wajib membuat `branch` baru jika sudah melakukan `merge`

or push tag version ke azure
----------------------------
<!-- `git tag` -> lihat tag -->
<!-- `git fetch --tag` -> fetch tag list -->
<!-- `git tag -a "veriontag" -m "versiontag"` -> buat tag terbaru -->
<!-- `git push origin tag {versiontag}` -> push tag ke azure -->

menjadikan 1 commit
-------------------
`git log` --> cek commit yang base `main`
`git reset --soft {commitlognumber}` atau `git reset --soft origin/main` --> reset commit 
`git commit -am "add sample file clean"` --> merge commit
`git push origin {namabranch} -u -f` --> push ke azure
<!-- sebelum jadiin 1 commitan, di pull rebase dulu ketika di git log tidak ada main-nya, lalu jalanin perintah git reset, setelah itu git commit, cek di git log kalo udah jadi 1, lalu langsung Push ke azure pakai make add latest tag -->

save sebelum rebase main (simpan sementara) 
case: ada org lain yg merge ke main branch tp kita blm sempet commit dan pengen ambil pembaruan tersebut
-----------------------------------------------------------------------------------------------
1. `git stash save {message}` -> save stash
2. `git stash list` -> cek list yang ter save
3. `git stash apply {listnumber}` -> buka stash yang ter save
   `git stash drop {listnumber}` -> hapus stash yang ter save

pull rebase (disarankan setiap SDET ketika sudah ada yang merge ke main)
-------------------------------------------------------------------
1. `git pull --rebase origin {namabranch}` -> untuk pull branch based ketika telah terjadi update
2. `git rebase --continue` -> lanjut rebase ketika ada conflict dan solved

setelah PR mau dimerge dan ada bbrp commit-an yang udah dipush ke azure (dilakukan setelah PR mau di merge/di complete)       
----------------------------------------------------------------------------------------------------
`git rebase -i Head~(jumlah commitnya)` -> jumlah commitnya bisa di cek pakai `git log` notes kalo di git log ga ada tulisan "origin/main" di salah satu commit artinya belum rebase dari main branch, lakuin `git pull --rebase origin {namabranch}` dulu lalu balik ke step 1
cari kata "pick" ganti ke huruf s dari commit yg ke 2 sampai seterusnya 
lalu ESC:x{enter}, lalu ganti message commitnya, lalu ESC:wq{enter}
`git push origin (nama branch) -f`

ubah author
------------
`git config user.email` {namaemail} --> melihat emailnya benar
`git config --list` --> cek email nya sudah masuk
`git commit --amend --reset-author` --> ubah email author sebelumnya
`git push origin main-e2e -u -f` --> push ke azure

update nodejs
------------
a. cek nvm didalam bashrc
 - open new terminal
 - ketik "cd"
 - ketik "ls -la" cari file .bashrc
 - ketik "code .bashrc"
 - lihat dipaling bawah pada file bashrc ada code
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
 - `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash` -> copy kalau belum ada bashrc code export NVM_DIR
b. Instal NVM
 - open terminal baru
 - ketik "node -v" -> cek version nodejs
 - open terminal baru
 - `nvm install 16`
 - `npm i / npm install`
