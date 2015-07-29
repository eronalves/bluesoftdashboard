'use strict';

describe('Service: RankingGeral', function () {
  var rankingGeralService, httpBackend;

  beforeEach(module('bluesoftdashboardApp'));

  beforeEach(inject(function (RankingGeral, $httpBackend) {
    rankingGeralService = RankingGeral;
    httpBackend = $httpBackend;
  }));

  it('deve realizar chamada HTTP Get e retornar os dados do ranking geral', function () {
    httpBackend.whenGET('https://bluesoftmusicvotacao-api.herokuapp.com/api/rankingVotacao').respond(
            [
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
    );
      
    rankingGeralService.get().then(function(data) {
      expect(data.data).toEqual(
            [
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
      );
    });
      
    httpBackend.flush();
  });

});