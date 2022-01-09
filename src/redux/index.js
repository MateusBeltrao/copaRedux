import React from 'react';
import {createStore} from 'redux'
import messi from "../image/messi.png"
import neymar from "../image/neymar.png"
import buffon from "../image/buffon.png"
import chiellini from "../image/Chiellini.png"
import franz from "../image/franzbeckenbauer.png"
import maradona from "../image/maradona.png"
import neuer from "../image/Neuer.png"
import pele from "../image/pelé.png"
import alemanha from "../image/alemanha.png"
import argentina from "../image/argentina.jpg"
import brasil from "../image/brasil.jpg"
import italia from "../image/italia.jpg"


const INITIAL_STATE={

    activeModule: {},
    modules: [
        {
           id: "1",
           name: "Brasil",
           avatar: <img src={neymar} width="450px" alt=""></img>,
           avatar2: <img src={pele} alt=""></img>,
           selecao: <img src={brasil} alt="" width="300px"></img>,
           jogadorNovo: "Neymar jr",
           JogadorClassico: "Pelé",
           dadosSelecao:"Formada em 1914 e considerada um dos maiores símbolos do país, é chamada de Seleção, Seleção Canarinho ou Verde-Amarela. É a seleção mais bem-sucedida da história do futebol mundial, sendo a recordista em conquistas em Copas do Mundo, com cinco títulos invictos (1958, 1962, 1970, 1994 e 2002) e quatro títulos da Copa das Confederações FIFA (1997, 2005, 2009 e 2013).",
           dadosNovo:"Neymar da Silva Santos Júnior (Mogi das Cruzes, 5 de fevereiro de 1992), mais conhecido como Neymar ou Neymar Jr., é um futebolista brasileiro que atua como ponta-esquerda ou meia-atacante. Atualmente joga pelo Paris Saint-Germain e pela Seleção Brasileira. É considerado o principal futebolista brasileiro da atualidade e um dos melhores futebolistas do mundo.",
           dadosClassico: "Edson Arantes do Nascimento[4] (Três Corações, 23 de outubro de 1940), mais conhecido como Pelé, é um ex-futebolista brasileiro que atuava como atacante. Ele é amplamente considerado como um dos maiores atletas de todos os tempos. Em 2000, ele foi eleito Jogador do Século pela Federação Internacional de História e Estatísticas do Futebol (IFFHS) e foi um dos dois vencedores conjuntos do prêmio Melhor Jogador do Século da FIFA"
         },
         {
           id: "2",
           name: "Argentina",
           avatar: <img src={messi} width="400px" alt=""></img>,
           avatar2: <img src={maradona} alt=""></img>,
           selecao: <img src={argentina} alt="" width="300px"></img>,
           jogadorNovo: "Messi",
           JogadorClassico: "Maradona",
           dadosSelecao:"Conhecida carinhosamente como La Albiceleste, a Argentina é uma das grandes seleções de futebol do mundo, tendo conquistado 2 Copas do Mundo - em 1978 e em 1986 - Quinze títulos da Copa América, uma Copa das Confederações e duas medalhas de ouro em Jogos Olímpicos, em Atenas-2004 e em Pequim-2008",
           dadosNovo:"Messi é frequentemente considerado o melhor jogador do mundo e na opinião da grande maioria dos especialistas do esporte, sua qualidade técnica, jogadas, velocidade, habilidade na perna esquerda, trabalho de equipe e extraordinária vocação para o gol, o tornam um dos melhores futebolistas de todos os tempos, com alguns ainda o colocando como o melhor jogador de sempre.",
           dadosClassico: "Diego Armando Maradona Franco (Lanús, 30 de outubro de 1960 — Tigre, 25 de novembro de 2020) foi um treinador e futebolista argentino que atuava como meia-atacante. Considerado um dos maiores futebolistas de todos os tempos, liderou a conquista da Copa do Mundo de 1986, marcando, nas quartas-de-final, o Gol do Século. Ele ainda disputou mais três mundiais (1982, 1990 e 1994), tendo alcançado o vice-campeonato em 1990. "
         },
         {
           id: "3",
           name: "Itália",
           avatar: <img src={chiellini} alt="" width="350px" ></img>,
           avatar2: <img src={buffon} alt=""></img>,
           selecao: <img src={italia} alt="" width="300px"></img>,
           jogadorNovo: "Chiellini",
           JogadorClassico: "Buffon",
           dadosSelecao:"A Seleção Italiana de Futebol é o time nacional da Itália de futebol masculino, gerido pela Federação Italiana de Futebol, que representa a Itália nas competições de futebol da UEFA e da FIFA. A equipe é uma das seleções de futebol masculino mais bem sucedidas na história das Copas do Mundo, tendo disputado seis finais e saído vitoriosa em quatro (1934,1938,1982 e 2006), ficando com o vice-campeonato em 1970 e 1994.",
           dadosNovo:"Giorgio Chiellini (Pisa, 14 de agosto de 1984) é um futebolista italiano que atua como zagueiro ou lateral-esquerdo. Atualmente joga pela Juventus. Chiellini também é mestre em administração de empresas pela Universidade de Turim.",
           dadosClassico: "Ele é amplamente considerado como um dos melhores goleiros da história, com alguns o colocando inclusive como o melhor de todos os tempos.[2][3][4] Um dos maiores ídolos da torcida da Juventus, sua maior virtude fora dos campos é o carisma, sendo querido até mesmo por jogadores adversários.[5] É primo em segundo grau do ex-goleiro Lorenzo Buffon, goleiro da Azzurra na Copa do Mundo FIFA de 1962, disputa no Chile."
         },
         {
           id: "4",
           name: "Alemanha",
           avatar: <img src={neuer} width="600px" alt=""></img>,
           avatar2: <img src={franz} alt=""></img>,
           selecao: <img src={alemanha} alt="" width="250px"></img>,
           jogadorNovo: "Neuer",
           JogadorClassico: "Beckenbauer",
           dadosSelecao:"uma das seleções masculinas de futebol mais bem sucedidas do mundo, participando de oito finais de Copas do Mundo, ganhando quatro delas. É o país que mais vezes chegou entre os semifinalistas, com 13 aparições, além de ser o detentor do maior número de medalhas no torneio, com 12 (quatro ouros, quatro pratas e quatro bronzes). Após o Brasil, é a seleção que conquistou o maior número de vitórias (66), além de deter o recorde de gols marcados (224) e o maior número de jogos disputados (106), em 18 participações no torneio.",
           dadosNovo:"Manuel Peter Neuer ou simplesmente Neuer pronúncia em alemão: NOAR (Gelsenkirchen, 27 de março de 1986) é um futebolista alemão que atua como goleiro. Atualmente defende o Bayern de Munique e a Seleção Alemã. Conhecido mundialmente por suas excelentes habilidades à queima-roupa, força, precisão na distribuição da bola, comando da movimentação na área e um estilo flexível e rápido de jogo que antecipa os atacantes adversários, é considerado por muitos como o melhor goleiro de todos os tempos. ",
           dadosClassico: "Franz Anton Albert Beckenbauer (Munique, 11 de setembro de 1945) é um ex-futebolista alemão que atuava como zagueiro, líbero, volante e meia. Foi presidente do Bayern de Munique por 15 anos, clube com o qual tem sua história entrelaçada. Sua alcunha é der Kaise. Com a Seleção Alemã, foi campeão mundial como jogador (em 1974) e técnico (1990), sendo um dos três únicos a deter tal marca, ao lado do brasileiro Mário Jorge Lobo Zagallo e do francês Didier Deschamps"
         }

   ]
}




function reducer(state = INITIAL_STATE, action) {
    if(action.type === "TOGGLE"){

    return {...state, activeModule: action.module}
    }
    return state
} 
       

const store = createStore(reducer)

export default store