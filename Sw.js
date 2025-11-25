// =================================================================
// ESTADO DO APLICATIVO
// =================================================================
const appData = {
    version: '1.0.0', // << Sempre que atualizar o app, aumente este número!
    vehicleModel: '', vehicleCategory: '', vehicleType: 'owned',
    // ... resto do seu objeto appData
};

// ... (outras variáveis)

// URL DO SEU REPOSITÓRIO GITHUB COM O ARQUIVO VERSION.JSON
const REMOTE_VERSION_URL = 'https://raw.githubusercontent.com/negrete79/Kmcalculado/main/version.json';

// =================================================================
// FUNÇÕES DE ARMAZENAMENTO
// =================================================================
// ... (suas funções saveData e loadData)

// =================================================================
// FUNÇÃO DE VERIFICAÇÃO DE ATUALIZAÇÕES
// =================================================================
async function checkForUpdates() {
    const checkBtn = document.getElementById('checkUpdatesBtn');
    checkBtn.disabled = true;
    checkBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-1"></i>Verificando...';
    
    try {
        const response = await fetch(REMOTE_VERSION_URL);
        if (!response.ok) throw new Error('Falha ao buscar versão remota.');
        const remoteData = await response.json();
        const remoteVersion = remoteData.version;

        // Função para comparar versões de forma robusta (ex: 1.0.10 vs 1.0.2)
        function compareVersions(v1, v2) {
            const parts1 = v1.split('.').map(Number);
            const parts2 = v2.split('.').map(Number);
            const maxLength = Math.max(parts1.length, parts2.length);

            for (let i = 0; i < maxLength; i++) {
                const num1 = parts1[i] || 0;
                const num2 = parts2[i] || 0;
                if (num1 > num2) return 1;
                if (num1 < num2) return -1;
            }
            return 0; // Versões são iguais
        }

        const comparison = compareVersions(remoteVersion, appData.version);

        if (comparison === 1) { // Se a versão remota for maior
            if (confirm(`Uma nova versão (${remoteVersion}) está disponível! Deseja recarregar a página para atualizar?`)) {
                // Força a recarga da página para buscar o novo index.html
                window.location.reload(true);
            }
        } else if (comparison === 0) {
            alert('Você já está com a versão mais recente!');
        } else {
            // Versão local é mais nova que a remota (útil para desenvolvimento)
            console.log('Sua versão local é mais nova que a versão do repositório.');
            alert('Você está usando uma versão de desenvolvimento mais recente!');
        }
    } catch (error) {
        console.error('Erro na verificação de atualizações:', error);
        alert('Não foi possível verificar atualizações. Verifique sua conexão com a internet.');
    } finally {
        checkBtn.disabled = false;
        checkBtn.innerHTML = '<i class="fas fa-sync-alt mr-1"></i>Verificar Atualizações';
    }
}

// ... (resto do seu código)
