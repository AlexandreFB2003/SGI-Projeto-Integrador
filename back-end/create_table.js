import { sql } from "./db.js"

sql`

CREATE TABLE IF NOT EXISTS tb_aluno (
	matricula_aluno INTEGER NOT NULL,
	nome VARCHAR(60) NOT NULL,
    telefone INTEGER,
    endereco VARCHAR(100),
    CPF INTEGER,
	
	PRIMARY KEY(matricula_aluno)
);

`
    
sql`

CREATE TABLE IF NOT EXISTS tb_professor (
	matricula_professor INTEGER NOT NULL,
	nome CHAR(60) NOT NULL,
	telefone INTEGER,
	cpf INTEGER NOT NULL,
	PRIMARY KEY(matricula_professor)
);

`
  

sql`

CREATE TABLE IF NOT EXISTS tb_faltas (
	id_faltas SERIAL NOT NULL,
	faltas INTEGER,
	PRIMARY KEY(id_faltas)
);

`  

sql`

CREATE TABLE IF NOT EXISTS tb_diciplina (
	id_diciplina SERIAL NOT NULL,
	diciplina VARCHAR(40),
	PRIMARY KEY(id_diciplina)
);

`      
    

sql`

CREATE TABLE IF NOT EXISTS tb_notas (
	id_notas SERIAL NOT NULL,
	notas INTEGER NOT NULL,
	PRIMARY KEY(id_notas)
);

` 
    
    
sql`

CREATE TABLE IF NOT EXISTS tb_turma (
	id_turma SERIAL NOT NULL,
	turma CHAR,
	PRIMARY KEY(id_turma)
);

`     
    
  
sql`

CREATE TABLE IF NOT EXISTS tb_aluno_professor (
	matricula_aluno INTEGER NOT NULL,
	matricula_professor INTEGER NOT NULL,
	FOREIGN KEY (matricula_aluno) REFERENCES tb_aluno,
	FOREIGN KEY (matricula_professor) REFERENCES tb_professor
);

`     
    
sql`

ALTER TABLE tb_aluno
ADD COLUMN id_diciplina INTEGER;

`      

sql`

ALTER TABLE tb_aluno
ADD CONSTRAINT fk_diciplina
FOREIGN KEY (id_diciplina)
REFERENCES tb_diciplina (id_diciplina);

`      
    
sql`

ALTER TABLE tb_aluno
ADD COLUMN id_turma INTEGER; 

`     
    
sql`

ALTER TABLE tb_aluno
ADD CONSTRAINT fk_turma
FOREIGN KEY (id_turma)
REFERENCES tb_turma (id_turma);

`      
    
sql`

ALTER TABLE tb_professor
ADD COLUMN id_diciplina INTEGER;

`     
    
sql`

ALTER TABLE tb_professor
ADD CONSTRAINT fk_diciplina
FOREIGN KEY (id_diciplina)
REFERENCES tb_diciplina (id_diciplina);

` 
    
sql`

ALTER TABLE tb_faltas
ADD COLUMN matricula_aluno INTEGER; 

`    
    
sql`

ALTER TABLE tb_faltas
ADD CONSTRAINT fk_aluno
FOREIGN KEY (matricula_aluno)
REFERENCES tb_aluno (matricula_aluno); 

`    
    
sql`

ALTER TABLE tb_notas
ADD COLUMN matricula_aluno INTEGER; 

`     
    
sql`

ALTER TABLE tb_notas
ADD CONSTRAINT fk_aluno
FOREIGN KEY (matricula_aluno)
REFERENCES tb_aluno (matricula_aluno);

` 
    
    
    
    
    
    
    
    
    
.then(() => {
    console.log("Tabela criada!")
})