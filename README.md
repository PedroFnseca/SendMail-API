# API de envio de Emails 📬

### O objetivo é permitir que outras aplicações possam enviar emails através de um rest-api.

<br>

## Como instalar o projeto 🔨
#### Clone o projeto em alguma pasta
```bash
git clone https://github.com/pedroFnseca/SendMail-API.git
```
#### Entre na pasta
```bash
cd SendMail-API
```
#### Instale as dependências 
```bash
npm install
```
<br>

## Configurações 🔧

#### Crie um arquivo na raiz do projeto com o nome `.env`

#### Entre no arquivo e adicione as informações necessárias para o funcionamento do projeto
```bash
EMAIL_USER="email-para-envio@dominio.com"
EMAIL_PWD_APP="senha-app"
```
## Nota importante 📝⚠️
> #### A senha da aplicação é gerada pelo servidor de email e não pode ser alterada.
> #### Caso use um email @gmail neste link tem o passo a passo para configurar o email: https://support.google.com/accounts/answer/185833?hl=pt-BR

#### Salve o arquivo e inice o projeto 🚀
```bash
node src/index.js
```


<br>



## Como usar o projeto 📝

#### URL (POST): ```http:localhost:3333/send/text```
```json
{
    "to": "paraquem@dominio.com",
    "subject": "Assunto do email",
    "text": "Envio de texto simples"
}
```

#### URL (POST): ```http:localhost:3333/send/text```
```json
{
    "to": "paraquem@dominio.com",
    "subject": "Assunto do email",
    "html": "<h1>Envio de html</h1>"
}
```

<br>


## Códigos 💥

#### ```500``` Verifique se o email e a senha estão corretos.

#### ```422``` verifique se o formato do json está correto.

#### ```404``` verifique se o endpoint e método está correto.

#### ```200``` enviado com sucesso.

<br>

## Caso use o projeto 📝
### Cite o projeto em seu README 😁
### Caso encontre bugs ou erros, reporte no github 😞
### Caso queira contribuir com o projeto, faça um pull request 🚀

<br>

## Nota 📝⚠️

### O projeto já está configurado para ser hospedado no heroku, e caso queira hospedar, somente altere as váriaveis de ambiente.

<br>

## Aplicações do projeto em prática 💻
### [Backend](https://github.com/IntecEmbu/Biblioteca-backend)
> #### O projeto é um backend de sistema de biblioteca.

### [Subprocesso](https://github.com/pedroFnseca/Subprocess-API)
> #### O projeto é um subprocesso de sistema de biblioteca, onde é realizado processamentos de rotinas automáticos.
