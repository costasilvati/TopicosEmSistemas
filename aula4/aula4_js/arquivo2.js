console.log("Linha 1 do arquivo...");
const aula = "aula 4";
let disciplina = "Tópicos Especiais";
const conteudo = "Variáveis JS";

console.log(disciplina + aula + conteudo);
console.log(disciplina,aula,conteudo);
console.log(`A disciplina é ${disciplina} - Aula de hoje ${aula} - Conteúdo: ${conteudo}`);

disciplina = aula + " " + conteudo;
console.log(disciplina);