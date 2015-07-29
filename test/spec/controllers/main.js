'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('bluesoftdashboardApp'));

  var scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
    
  }));

  it('deve definir ranking da última votação', function ($controller) {
    var rankingUltimaVotacaoMock = {
                                 data: {
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
                               
                               };
      
    var MainCtrl = $controller('MainCtrl', {
      $scope: scope, 
      RankingUltimaVotacao: rankingUltimaVotacaoMock
    });
      
    expect(scope.rankingUltimaVotacao).toBeDefined();
    expect(scope.rankingUltimaVotacao).toEqual({
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
                                       });                    
  });
    
  it('deve definir ranking geral', function ($controller) {
    var rankingGeralMock = [
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
                            ];
      
    var MainCtrl = $controller('MainCtrl', {
      $scope: scope, 
      RankingGeral: rankingGeralMock
    });
      
    expect(scope.rankingGeral).toBeDefined();               
    expect(scope.rankingGeral.votos).toEqual([
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
                            ]);            
  });
    
  it('deve definir jobAdded como true', function ($controller) {
    var MainCtrl = $controller('MainCtrl', {
      $scope: scope    
    });  
 
    expect(scope.jobAdded).toBeDefined();    
    expect(scope.jobAdded).toBe(true);            
  });
    
    
});
