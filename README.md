# KM Calculado

![Badge de Versão](https://img.shields.io/badge/versão-1.0.0-blue.svg)
![Badge de Licença](https://img.shields.io/badge/licença-MIT-green.svg)

> Gestão de Lucro e Custos para Motoristas de Aplicativo

O **KM Calculado** é uma aplicação web progressiva (PWA) projetada para ajudar motoristas de aplicativo a controlar suas finanças, calcular custos operacionais e maximizar seus lucros de forma simples e eficiente.

---

## 📸 Screenshots

*(Adicione aqui imagens ou um GIF do seu aplicativo em ação)*

![Screenshot da Tela Principal](screenshot.png)
![GIF de Demonstração](demo.gif)

---

## ✨ Funcionalidades

-   🚗 **Configuração de Veículo Flexível**: Adapte-se a diferentes situações (carro alugado, financiado ou quitado).
-   📊 **Análise de Rentabilidade Inteligente**: Descubra qual a tarifa mínima por km para atingir sua meta de lucro.
-   🛣️ **Controle de Viagens com GPS**: Inicie e finalize viagens (de trabalho ou pessoais) e registre a distância percorrida.
-   📈 **Relatórios Detalhados**: Gere relatórios em PDF ou CSV para acompanhar seu desempenho.
-   💰 **Gestão de Lucros**: Adicione o valor recebido em cada viagem para calcular o lucro líquido real.
-   🚨 **Registro de Multas e Custos Extras**: Não deixe nenhuma despesa passar despercebida.
-   💾 **Backup e Restauração de Dados**: Salve seus dados com segurança e restaure-os quando precisar.
-   📱 **Funciona Offline**: Use o aplicativo mesmo sem conexão com a internet (PWA).
-   🎨 **Interface Amigável**: Design limpo e intuitivo focado na usabilidade.

---

## 🚀 Como Usar

O KM Calculado é uma aplicação web, não é necessário instalar nada!

1.  **Acesse o Aplicativo**: Abra o link onde o aplicativo está hospedado no seu navegador de celular ou computador.
2.  **Instale (Opcional, mas recomendado)**: Em navegadores móveis como o Chrome, você verá um banner de "Instalar" ou um ícone de download no menu. Toque nele para instalar o KM Calculado na sua tela inicial como um aplicativo nativo.
3.  **Configure Seu Veículo**: Na tela **"Config"**, preencha os dados do seu carro, seus custos fixos e variáveis e suas metas de lucro.
4.  **Comece a Controlar**: Use a tela **"Viagem"** para registrar suas corridas e a tela **"Lucros"** para adicionar os valores que você recebeu.

---

## 🛠️ Como Executar Localmente (Para Desenvolvedores)

Se você é um desenvolvedor e quer rodar o projeto na sua máquina para testar ou contribuir:

### Pré-requisitos

-   Um navegador moderno (Chrome, Firefox, Edge).
-   Um servidor local para servir os arquivos (necessário para o Service Worker funcionar).

### Passos

1.  **Clone o repositório**:
    ```bash
    git clone https://github.com/SEU-USUARIO/km-calculado.git
    cd km-calculado
    ```

2.  **Inicie um servidor local**:
    Você pode usar o `serve` (recomendado) ou uma extensão como "Live Server" no VS Code.

    **Usando `npx serve`**:
    ```bash
    npx serve
    ```
    Depois, acesse `http://localhost:3000` no seu navegador.

    **Usando Python** (se você tem Python instalado):
    ```bash
    # Python 3
    python -m http.server

    # Python 2
    python -m SimpleHTTPServer
    ```
    Depois, acesse `http://localhost:8000` no seu navegador.

---

## 📁 Estrutura do Projeto
