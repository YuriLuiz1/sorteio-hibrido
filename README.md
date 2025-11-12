# 🎲 Sistema de Sorteio Híbrido

Aplicação web simples e eficiente para realizar sorteios aleatórios de nomes, desenvolvida para resolver uma necessidade real de definir colaboradores em modelo de trabalho híbrido.

## 📝 História do Projeto

Este projeto nasceu de uma necessidade real: após a pandemia, muitas empresas adotaram o modelo híbrido de trabalho. Para definir de forma justa quem iria trabalhar presencialmente em determinados dias, desenvolvi este sistema de sorteio transparente e imparcial.

## 🎯 Funcionalidades

- ✅ Adicionar múltiplos participantes
- ✅ Remover participantes da lista
- ✅ Sortear um ou mais nomes aleatoriamente
- ✅ Histórico de sorteios realizados
- ✅ Interface limpa e intuitiva
- ✅ Totalmente client-side (sem necessidade de backend)
- ✅ Responsivo para mobile

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e responsividade
- **JavaScript (Vanilla)** - Lógica de sorteio e interatividade

## 🚀 Como Usar

### Opção 1: Usar Online

Acesse diretamente pelo GitHub Pages:
👉 [https://yuriluiz1.github.io/sorteio-hibrido](https://yuriluiz1.github.io/sorteio-hibrido)

### Opção 2: Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/YuriLuiz1/sorteio-hibrido.git
cd sorteio-hibrido

# Abra o index.html no seu navegador
# Ou use um servidor local simples:
python -m http.server 8000
# Acesse: http://localhost:8000
```
## 💡 Exemplo Prático

**Cenário**: Sua equipe tem 10 pessoas e precisa definir 3 para trabalhar presencialmente na segunda-feira.

## 🎨 Preview

```
┌─────────────────────────────────┐
│   🎲 Sorteio Híbrido           │
├─────────────────────────────────┤
│  Participantes (5):              │
│  • Ana Silva         [X]         │
│  • João Santos       [X]         │
│  • Maria Oliveira    [X]         │
│  • Pedro Costa       [X]         │
│  • Carla Souza       [X]         │
│                                  │
│  [    Realizar Sorteio    ]      │
│                                  │
│  ✨ Sorteados:                   │
│  1. João Santos                  │
│  2. Carla Souza                  │
│  3. Ana Silva                    │
└─────────────────────────────────┘
```

## 🔍 Algoritmo de Sorteio

O sistema utiliza o método **Fisher-Yates Shuffle** para garantir aleatoriedade uniforme:

```javascript
function sortear(lista, quantidade) {
    const embaralhado = [...lista];
    for (let i = embaralhado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [embaralhado[i], embaralhado[j]] = [embaralhado[j], embaralhado[i]];
    }
    return embaralhado.slice(0, quantidade);
}
```

## 🌟 Casos de Uso

- Definir escalas de trabalho híbrido
- Sorteios de brindes em eventos
- Escolher apresentadores em reuniões
- Definir ordem de apresentação de trabalhos
- Qualquer situação que precise de seleção aleatória justa

## 📈 Melhorias Futuras

- [ ] Salvar listas de participantes no LocalStorage
- [ ] Exportar resultados em PDF/CSV
- [ ] Modo "sem repetição" (participantes sorteados não entram no próximo)
- [ ] Animação visual durante o sorteio
- [ ] Modo escuro
- [ ] Pesos diferentes para participantes

## 🎓 Aprendizados

Este projeto foi desenvolvido para:
- Resolver um problema real do dia a dia
- Praticar JavaScript puro (sem frameworks)
- Trabalhar com manipulação do DOM
- Implementar algoritmos de aleatoriedade
- Criar interfaces simples e funcionais

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir novas funcionalidades
- Enviar pull requests

## 👤 Autor

**Yuri Luiz**

- GitHub: [@YuriLuiz1](https://github.com/YuriLuiz1)
- LinkedIn: [Adicione seu LinkedIn aqui]

## 📄 Licença

Este projeto está sob a licença MIT - sinta-se livre para usar, modificar e distribuir.

---

⚡ Desenvolvido para resolver problemas reais com código simples e efetivo | ⭐ Deixe uma estrela se foi útil!
