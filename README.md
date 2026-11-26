# Pomorix — Focus. Study. Achieve.

App Android (Pomodoro + tarefas + estatísticas + treinos de academia + peso/altura/IMC).
Feito com HTML/CSS/JS empacotado pelo Capacitor. **O APK é gerado automaticamente no GitHub Actions.**

## Como gerar o APK (passo a passo)

1. Crie um repositório novo no GitHub (ex.: `pomorix`).
2. Envie **todo o conteúdo desta pasta** para o repositório (inclusive a pasta oculta `.github`).
   - Pelo site: *Add file → Upload files* (arraste tudo, incluindo `.github`) → *Commit*.
   - Ou pelo terminal:
     ```bash
     git init && git add . && git commit -m "Pomorix"
     git branch -M main
     git remote add origin https://github.com/SEU_USUARIO/pomorix.git
     git push -u origin main
     ```
3. Abra a aba **Actions** do repositório. O workflow **“Gerar APK do Pomorix”** roda sozinho (leva ~5–8 min).
   Se não iniciar, clique nele → **Run workflow**.
4. Ao terminar, baixe o APK:
   - na aba **Releases** (arquivo `Pomorix.apk`, dá para abrir direto no celular), ou
   - no final da execução em **Artifacts → Pomorix-APK**.
5. No Android, abra o `Pomorix.apk` e permita “instalar apps desconhecidos”.

> Se a aba Releases falhar por permissão: *Settings → Actions → General → Workflow permissions → Read and write*.

## O que tem no app
- **Boas-vindas** com logo, slogan, recursos e “Comece Agora”.
- **Início**: saudação, progresso das tarefas, timer Pomodoro (Foco / Pausa / Pausa longa, Pausa · Resetar · Pular).
- **Tarefas**: adicionar, concluir, editar, excluir.
- **Estatísticas**: meta semanal, gráfico, tempo de foco, sequência e Lembretes Inteligentes.
- **Treinos**: treino da semana por dia (o dia de hoje abre sozinho), exercícios com séries × repetições × carga,
  botão **+ Série** contando quantas séries você fez, e card **Meu corpo** (peso, altura, IMC, histórico).
- **Configurações**: tempos do Pomodoro, meta semanal, som, vibração, notificações, lembrete diário.

Tudo fica salvo no próprio aparelho.

## Estrutura
```
www/                 app (index.html, css, js, assets)
resources/           ícones e splash aplicados no Android
scripts/             patch_android.py (ícone, tema, permissões)
keystore/            assinatura fixa p/ atualizar o app sem desinstalar
.github/workflows/   build-apk.yml
```
Para testar no navegador: abra `www/index.html`.
