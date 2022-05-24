class Tabelas{
    // construtor de Tabela
    init(conexao){
        this.conexao = conexao
        this.criaDespesa()
    }

    criaDespesa(){
        let sql = 'CREATE TABLE IF NOT EXISTS despesa '+
        '(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,'+
        'valor double NOT NULL,'+
        'descricao VARCHAR(150) NOT NULL)'
        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            }else{
                console.log('Tabela despesa criada con sucesso!')
            }

        })
    }
}
module.exports = new Tabelas