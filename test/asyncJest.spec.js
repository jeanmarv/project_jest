const assert = require('assert');
const answerPhone = require('../src/asyncJest');

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe('1 - O retorno do telefonema', () => {
//    assert.fail();
    test('atende', () => { answerPhone(true).then((anwser) =>{
      expect(anwser).toBe("Oi!");
    })
  });
  test('ocupado', () => {
//    assert.fail();
    expect.assertions(1);
    return answerPhone(false).catch((erro) => {
      expect(erro.message).toEqual('Infelizmente não podemos atender...')
  });
});
});
