console.log("Variáveis");
const aula = 4;
const disciplina = "Tópicos Especiais";
const conteudo = "Variáveis JS"; 

console.log(disciplina + conteudo);
// Virgula separa com espaço
console.log(disciplina, conteudo);
// Crase `` permite o uso de ${variável}
console.log(`A disciplina é ${disciplina} ${conteudo}`); 
// Vamos guardar tudo em uma variável
disciplina = disciplina + conteudo 
/* ERRO TypeError: Assignment to constant variable. 
 Essa mensagem pode ser um pouco confusa ao ser traduzida, 
 constant é um tipo de variável que não pode ser modificada 
 uma vez que sua atribuição original foi feita.
 */

