# Guia de Implementação: Meu Direito Agora

## 📋 Resumo Executivo

Você recebeu três documentos principais para refatorar e expandir seu projeto "Meu Direito Agora":

1. **prompt_codex.md** - Prompt pronto para copiar e colar no Codex/Claude Code
2. **conteudo_beneficios_saude.md** - Documentação completa sobre INSS e SUS (para referência)
3. **data_content.ts** - Estrutura de dados TypeScript com todo o conteúdo

## 🚀 Como Usar

### Passo 1: Preparar o Ambiente

Antes de usar o Codex, certifique-se de que seu projeto está em bom estado:

```bash
cd meu-direito-agora
npm install  # Instale dependências se necessário
npm run dev  # Inicie o servidor de desenvolvimento
```

### Passo 2: Usar o Prompt no Codex

1. Abra um terminal na pasta raiz do projeto
2. Digite `claude` para iniciar o Codex
3. Copie **todo o bloco de código** dentro do arquivo `prompt_codex.md` (entre as linhas com ``` ````)
4. Cole no terminal do Codex
5. Pressione Enter e deixe o Codex trabalhar

### Passo 3: Acompanhar o Progresso

O Codex vai executar os 4 passos em sequência:

- **PASSO 1:** Corrige a duplicação de Footer/Navbar
- **PASSO 2:** Cria o arquivo de dados (`src/data/content.ts`)
- **PASSO 3:** Refatora os componentes para usar os dados
- **PASSO 4:** Melhora UX e navegação

Após cada passo, o Codex deve informar que terminou e estar pronto para o próximo.

### Passo 4: Testar Localmente

Após o Codex terminar cada seção, teste no navegador:

```bash
# Seu servidor já deve estar rodando em http://localhost:3000
# Abra o navegador e verifique se:
# - Footer e Navbar aparecem apenas uma vez
# - Os cards de benefícios estão populados com o conteúdo correto
# - Os modais abrem ao clicar em "Como solicitar"
# - Os links funcionam corretamente
```

## 📁 Estrutura de Arquivos Esperada Após Implementação

```
meu-direito-agora/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Contém Navbar e Footer globais
│   │   ├── page.tsx            # Sem Navbar/Footer duplicados
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   ├── ui/
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   └── modal.tsx       # NOVO
│   │   └── ...
│   ├── features/
│   │   ├── eligibility/
│   │   ├── hero/
│   │   ├── quick-links/
│   │   ├── services/
│   │   └── health-complaints/  # NOVO
│   ├── data/
│   │   └── content.ts          # NOVO - Arquivo de dados
│   └── ...
└── ...
```

## 🎯 Checklist de Qualidade

Após o Codex terminar, verifique se:

- [ ] Footer e Navbar aparecem apenas uma vez na página
- [ ] Não há warnings no console do navegador
- [ ] Os 3 cards de benefícios (BPC, Auxílio-doença, Salário-maternidade) aparecem com o conteúdo correto
- [ ] Clicar em "Como solicitar" abre um modal com os passos
- [ ] A seção de Saúde mostra os 3 canais de denúncia (OuvSUS, Defensoria, MP)
- [ ] Todos os links externos abrem em nova aba (`target="_blank"`)
- [ ] As animações de scroll funcionam suavemente
- [ ] O site é responsivo em mobile, tablet e desktop
- [ ] O código está bem tipado com TypeScript (sem `any`)

## 🔧 Troubleshooting

### Problema: O Codex não consegue ler o arquivo de dados

**Solução:** Certifique-se de que o arquivo `src/data/content.ts` foi criado corretamente. Se o Codex não conseguir, crie manualmente copiando o conteúdo de `data_content.ts` fornecido.

### Problema: Os modais não abrem

**Solução:** Verifique se o componente Modal foi criado. Se não, o Codex pode ter pulado essa etapa. Peça para ele criar um componente Modal simples usando Tailwind CSS ou Radix UI.

### Problema: Os links não funcionam

**Solução:** Certifique-se de que os IDs das seções correspondem aos links. Por exemplo, se o link é `#beneficios`, a seção deve ter `id="beneficios"`.

### Problema: Ainda há duplicação de Footer/Navbar

**Solução:** Verifique manualmente o arquivo `src/app/page.tsx`. Procure por `<Navbar />` ou `<Footer />` e remova as linhas. Elas devem estar apenas em `src/app/layout.tsx`.

## 📞 Próximos Passos Recomendados

Após completar a implementação:

1. **Criar páginas detalhadas:** Para cada benefício, crie uma página `/beneficios/[slug]` com informações completas
2. **Adicionar formulário de denúncia:** Crie um formulário interativo em `/denunciar`
3. **Implementar FAQ:** Crie uma página `/faq` com perguntas frequentes
4. **Otimizar SEO:** Adicione metadados e schema.org
5. **Testar acessibilidade:** Use ferramentas como Lighthouse e axe DevTools

## 📚 Referências de Conteúdo

Todo o conteúdo foi pesquisado em fontes oficiais:

- **INSS:** gov.br/inss
- **Ministério da Saúde:** gov.br/saude
- **Ouvidoria do SUS:** ouvidor.saude.gov.br
- **Lei de Defesa do Usuário:** Lei nº 13.460/2017

## 💡 Dicas Finais

1. **Economize tokens do Claude Code:** Use o `.claudeignore` para evitar que ele leia `node_modules` e `.next`
2. **Trabalhe por partes:** Não peça para fazer tudo de uma vez. O Codex funciona melhor com instruções sequenciais
3. **Mantenha o git atualizado:** Faça commits após cada etapa importante
4. **Teste frequentemente:** Não espere o final para testar. Teste após cada componente novo

---

**Você está pronto para começar! Boa sorte com o projeto! 🎉**
