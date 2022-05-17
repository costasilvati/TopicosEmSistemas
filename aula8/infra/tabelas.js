class Tabelas{
    // construtor de Tabela
    init(conexao){
        console.log("Banco conectado com secesso!")
        
    }

    criaDespesa(){
        sql = 'IF NOT EXISTS CREATE TABLE despesa '+
        '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'valor double NOT NULL,'+
        'descricao VARCHAR(150) NOT NULL)'
        this.conexao.query(sql)
    }
}
module.exports = new Tabelas