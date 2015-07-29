'use strict';

describe('Ranking Geral Api Service', function () {
  var rankingUltimaVotacaoService, httpBackend;

  beforeEach(module('bluesoftdashboardApp'));

  beforeEach(inject(function (RankingUltimaVotacao, $httpBackend) {
    rankingUltimaVotacaoService = RankingUltimaVotacao;
    httpBackend = $httpBackend;
  }));

  it('deve realizar chamada HTTP Get e retornar os dados do ranking geral', function () {
    httpBackend.whenGET('https://bluesoftmusicvotacao-api.herokuapp.com/api/rankingUltimaVotacao').respond(
            {
              nome: 'Test',
              email: 'test@test.com',
              data: '25/07/2015',
              votos: [
                        {
                            _id: 'The Beach Boys',
                            votos: 3
                        },
                        {
                            _id: 'The Who',
                            votos: 5
                        },
                        {
                            _id: 'Shocking Blue',
                            votos: 4
                        }
                     ]
           }   
    );
      
    rankingUltimaVotacaoService.get().then(function(data) {
      expect(data.data).toEqual(
            {
              nome: 'Test',
              email: 'test@test.com',
              data: '25/07/2015',
              votos: [
                        {
                            _id: 'The Beach Boys',
                            votos: 3
                        },
                        {
                            _id: 'The Who',
                            votos: 5
                        },
                        {
                            _id: 'Shocking Blue',
                            votos: 4
                        }
                     ]
           } 
      );
    });
      
    httpBackend.flush();
  });

});