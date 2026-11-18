# LETTERFORM 1.0

Projeto em HTML, CSS e JavaScript puro.

## Como executar
1. Extraia a pasta `letterform`.
2. Abra a pasta no Visual Studio Code.
3. Instale a extensão **Live Server** (recomendado).
4. Clique com o botão direito em `index.html` e escolha **Open with Live Server**.

Também é possível abrir `index.html` diretamente, mas o Live Server oferece uma experiência melhor.

## Funcionalidades incluídas
- Dashboard com estatísticas reais
- Criar, editar, listar, favoritar e excluir cartas (a exclusão pode ser feita pelo menu de edição futura)
- Editor com fontes, cores, papéis e fotografias
- Envelopes digitais
- Data futura de abertura e contagem regressiva
- Calendário de correspondências
- Cartas recebidas por importação JSON
- Exportação de cartas JSON e backup
- Exportação PDF com jsPDF e alternativa de impressão
- Configurações e armazenamento local

## Observações
- Os dados ficam neste navegador/dispositivo.
- Para compartilhar, exporte uma carta JSON e envie o arquivo à outra pessoa. Ela deverá importá-lo na página Recebidas.
- A data de abertura é uma restrição de interface local, não segurança criptográfica.
- A biblioteca jsPDF e as fontes são carregadas pela internet.
- Fotografias têm limite de 3 por carta e 1 MB por imagem nesta versão inicial.

## Arquivos
- `css/style.css`: identidade visual e responsividade
- `js/storage.js`: persistência e dados
- `js/app.js`: páginas, editor e interações
