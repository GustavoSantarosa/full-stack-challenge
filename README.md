## Início

Bem vindo ao mundo da música!

Atualmente temos a necessidade de consumir os dados de faixas musicais através do código ISRC, que é uma das coisas mais importantes na indústria fonográfica.

Segundo [Abramus](https://www.abramus.org.br/musica/isrc/), ISRC (International Standard Recording Code ou Código de Gravação Padrão Internacional) é um padrão internacional de código para identificar de forma única as gravações (faixas).

Ele funciona como um código de barras da faixa.


## Problema

Durante o fechamento de contrato com um produtor, foram informados 10 ISRC's que não constam em nossas bases de dados, que seguem abaixo:

* US7VG1846811
* US7QQ1846811
* BRC310600002
* BR1SP1200071
* BR1SP1200070
* BR1SP1500002
* BXKZM1900338
* BXKZM1900345
* QZNJX2081700
* QZNJX2078148

Precisamos obter e exibir os seguintes dados:

* Thumb do álbum
* Data de lançamento
* Título da faixa
* Lista dos artistas da faixa
* Duração da faixa em minutos e segundos (mm:ss)
* Player com prévia do áudio
* Link para a página da faixa no Spotify
* Sinalização dizendo se a faixa está ou não disponível no Brasil (BR)

Por decisão técnica, temos a necessidade de guardar estas informações em um banco de dados. Para isso, fique livre para criar a estrutura necessária para guardar as informações que achar pertinente das faixas.

Uma vez armazenados os dados, precisamos exibí-los através de uma webpage pública, ordenados por título da faixa de forma alfabética.


## Requisitos

* Faça um fork deste repositório e abra um PR quando estiver finalizado.
* O backend deve ser feito no framework Laravel 7.0 ou superior.
* O banco de dados deve ser MySQL.
* A página deve ser responsiva para atender todos os tipos de dispositivos.
* Use a API do Spotify: [https://developer.spotify.com/](https://developer.spotify.com/) para coletar os dados das faixas.


## Diferencial

* Desenvolver o frontend no Angular 8 ou superior.
* Desenvolver testes unitários e de integração.


## O que será avaliado

* Fidelidade às instruções.
* Padrões de projeto.
* Clean Code e boas práticas.
* Boas práticas de versionamento.


## Perfil que buscamos

* Comunicativo
* Autodidata
* Automotivado
* Curioso
* Gostar de trabalhar em equipe
* Compromissado


## O que foi feito

Foi desenvolvida uma solução full-stack para atender aos requisitos do desafio, utilizando Laravel como backend e MySQL como banco de dados. O sistema integra-se à API do Spotify para buscar informações das faixas musicais a partir dos ISRCs fornecidos, armazena os dados em banco e os exibe em uma página web pública, ordenados alfabeticamente pelo título da faixa.

* Por conta de uma deficiencia tecnica do pacote da quantum, o search não está funcionando, mas o index e show estão funcionando perfeitamente.
Vou ajustar isso no pacote em breve.
## Comandos úteis via Composer

Utilize os comandos abaixo para facilitar o desenvolvimento do projeto:

- `composer run-script test`  
    Executa a limpeza do cache de configuração e os testes automatizados.

- `composer run-script pint`  
    Realiza a formatação automática do código conforme padrões definidos.

- `composer run-script rector`  
    Aplica refatorações e melhorias sugeridas pelo Rector.

- `composer run-script serve`  
    Inicia o servidor de desenvolvimento Laravel na porta 8000.


## Principais funcionalidades implementadas:

- Integração com a API do Spotify para coleta dos dados das faixas.
- Armazenamento das informações relevantes em banco de dados MySQL.
- Exibição dos dados em uma interface web responsiva.
- Indicação de disponibilidade das faixas no Brasil.
- Player de prévia do áudio e link direto para o Spotify.
- Documentação da API disponível via Swagger.

## URLs úteis

- Documentação Swagger da API: [http://localhost:8000/documentation](http://localhost:8000/documentation)
- Página pública de exibição das faixas: `http://localhost:4200/tracks`
- Página pública de busca de isrc: `http://localhost:4200/search`
- Endpoint principal da API: `http://localhost:8000/`
- Endpoint principal do frontend: `http://localhost:4200/`
- Changelog do projeto: `https://github.com/ONErpm-Lab/full-stack-challenge/blob/986ad67bfcdad1ff5b6050f0f9d2dfa401cd6362/CHANGELOG.md`
- Repositório do projeto: `https://github.com/ONErpm-Lab/full-stack-challenge`