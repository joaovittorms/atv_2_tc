/* Implemente casos de teste em JUnit para o método “definirFaixaEtaria(...)” da classe
Classificador que verifique as seguintes situações: (i) um valor de idade inválido; (ii)
uma pessoa que é criança; (iii) uma pessoa que é adolescente; (iv) uma pessoa que é
adulta; e (ii) uma pessoa que é idosa. */

const Classificador = require('../lib/Classificador') //import
const Pessoa = require('../lib/Pessoa')

describe ('definirFaixaEtaria', () => {  


    test ('A pessoa é criança', () => {
        
        const crianca = Pessoa.pessoa('Heloisa', 11)
        const MensagemEsperada = 'Heloisa eh Criança'
        const resultado = Classificador.definirFaixaEtaria(crianca)
        
        expect(resultado).toBe(MensagemEsperada)
      
    })

    test('A pessoa é adolescente', () => {
        const adolescente = Pessoa.pessoa('Heloisa',17)
        const MensagemEsperada = 'Heloisa eh adolescente'
        const resultado = Classificador.definirFaixaEtaria(adolescente)

        expect(resultado).toBe(MensagemEsperada)
      
    })

    test('A pessoa é adulta', () => {
        const adulto = Pessoa.pessoa('Heloisa',59)
        const MensagemEsperada = 'Heloisa eh adulto'
        const resultado = Classificador.definirFaixaEtaria(adulto)

        expect(resultado).toBe(MensagemEsperada)
     
    })

    test('A pessoa é idosa', () => {
        const idosa = Pessoa.pessoa('Heloisa',60)
        const MensagemEsperada = 'Heloisa eh idosa'
        const resultado = Classificador.definirFaixaEtaria(idosa)

        expect(resultado).toBe(MensagemEsperada)
     
    })

    test('Idade inválida ', () => {
        const invalido = Pessoa.pessoa("Heloisa", 111)
        const MensagemEsperada = 'Idade inválida'
        

        expect( () => {

            Classificador.definirFaixaEtaria(invalido)
            
        }).toThrow(MensagemEsperada)
    
    })

    test('Idade inválida menor que zero', () => {
        const invalido = Pessoa.pessoa("Heloisa", -1)
        const MensagemEsperada = 'Idade inválida'
        

        expect( () => {

            Classificador.definirFaixaEtaria(invalido)
            
        }).toThrow(MensagemEsperada)
    
    })


})
