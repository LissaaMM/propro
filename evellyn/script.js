// Classe Mãe
class Projeto {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
    }

    exibirProjeto() {
        return `<div>
                    <h3>${this.titulo}</h3>
                    <p>${this.descricao}</p>
                </div>`;
    }
}

// Classe Filha
class ProjetoWeb extends Projeto {
    constructor(titulo, descricao, url) {
        super(titulo, descricao);
        this.url = url;
    }

    exibirProjeto() {
        return `<div>
                    <h3>${this.titulo}</h3>
                    <p>${this.descricao}</p>
                    <a href="${this.url}" target="_blank">Ver Projeto</a>
                </div>`;
    }
}

// Instâncias
const projetos = [
    new ProjetoWeb('Projeto 1', 'Descrição do Projeto 1', 'https://exemplo.com/projeto1'),
    new ProjetoWeb('Projeto 2', 'Descrição do Projeto 2', 'https://exemplo.com/projeto2')
];

// Exibir Projetos
document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    projetos.forEach(projeto => {
        projectList.innerHTML += projeto.exibirProjeto();
    });
});
