
# API 


API criada com Node.js, Express, CORS e MongoDB.

# Descrição
Este é um projeto de API que permite realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados MongoDB. A API foi desenvolvida utilizando Express para o servidor, CORS para controle de acesso e Prisma para a conexão com o banco de dados.

# Requisitos
Node.js 
MongoDB (banco de dados em nuvem ou local)

# Instruções
Passos para Executar o Projeto Localmente
1. Clone o Repositório:
Clone este repositório em sua máquina:

git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. Instale as Dependências
Navegue até a pasta do projeto e instale as dependências:

cd nome-do-repositorio
npm install

3. Configure as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com a URL do seu banco de dados MongoDB. Exemplo:


MONGODB_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/nome_do_banco?retryWrites=true&w=majority"

4. Inicie o Servidor
Depois que o banco de dados estiver configurado, você pode iniciar o servidor localmente:

npm run dev
A API estará disponível localmente em http://localhost:300.

5. Teste os Endpoints
Use o Postman, cURL ou outra ferramenta para testar os endpoints da API.




# Documentação no Postman
Você pode acessar a documentação completa da API no Postman através do link para a documentação do Postman.

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://god.gw.postman.com/run-collection/38542682-ff31df2c-4431-49bd-924b-2c30aec8136a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D38542682-ff31df2c-4431-49bd-924b-2c30aec8136a%26entityType%3Dcollection%26workspaceId%3Daa49e3f0-bc6f-45c2-bb42-1cdda3527807)


