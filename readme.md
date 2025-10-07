# projeto-fokus-elementos-DOM

> Pequeno projeto demonstrando manipulação do DOM com foco em gerenciar foco (focus) e interação com elementos da página.

## Descrição

Este repositório contém uma página estática (HTML/CSS/JS) que demonstra técnicas básicas de manipulação do DOM: seleção de elementos, tratamento de eventos, controle de foco e alterações dinâmicas de estilos. É ideal para iniciantes que querem praticar interações com elementos através de JavaScript puro.

> O repositório contém os arquivos principais `index.html`, `styles.css` e `script.js`.

## Demonstração

Abra o arquivo `index.html` no seu navegador (duplo clique ou via servidor local) para ver o projeto em funcionamento.

## Funcionalidades

- Uso de seletores do DOM (`querySelector`, `getElementsByClassName`, etc.).
- Adição e remoção de `eventListeners` para interatividade (click, focus, etc.).
- Alteração dinâmica de classes e estilos via JavaScript.
- Gerenciamento do foco em elementos interativos (controle de navegação por teclado).

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)

## Estrutura do repositório

```
projeto-fokus-elementos-DOM/
├─ img/                # imagens utilizadas no projeto
├─ music/              # (opcional) arquivos de áudio
├─ index.html          # página principal
├─ styles.css          # estilos do projeto
└─ script.js           # lógica JavaScript
```

## Como usar (localmente)

1. Clone o repositório:

```bash
git clone https://github.com/xcodleox/projeto-fokus-elementos-DOM.git
cd projeto-fokus-elementos-DOM
```

2. Abra `index.html` no navegador (ou rode um servidor local para evitar restrições de CORS e ter melhor experiência):

```bash
# exemplo com Python 3
python -m http.server 5500
# então abra http://localhost:5500 no navegador
```

## Observações para desenvolvedores

- Se algum `querySelector` ou `getElement(s)` estiver retornando `null`, verifique se o código JavaScript está sendo executado *antes* dos elementos existirem no DOM. Colocar o `<script>` no final do `body` ou usar `DOMContentLoaded` pode resolver erros como `Cannot read properties of null (reading 'addEventListener')`.

- Nomes de classes e IDs no HTML devem corresponder exatamente aos usados em `script.js`.

## Boas práticas sugeridas

- Usar delegação de eventos quando possível para reduzir listeners.
- Testar navegação por teclado (Tab / Shift+Tab) para garantir acessibilidade.
- Manter separação entre lógica (JS), marcação (HTML) e apresentação (CSS).

## Como contribuir

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature ou correção: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m "Descrição da mudança"`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request descrevendo as alterações.

## Licença

Este projeto não contém um arquivo de licença especificado no repositório. Se você é o autor, considere adicionar uma licença (por exemplo, MIT) para deixar claro os termos de uso.

## Autor

`xcodleox` — código disponível em https://github.com/xcodleox/projeto-fokus-elementos-DOM

---

_Observação:_ este README foi gerado com base no conteúdo do repositório e em práticas comuns para projetos front-end simples. Ajustes específicos podem ser feitos conforme você deseje incluir mais detalhes, imagens ou instruções de deploy.

