<script setup>
import AppHeader from '@/components/AppHeader/index.vue'
import AppButton from '@/components/AppButton/index.vue'
import pkg from '../../../package.json'

const version = pkg.version;
const dependencies = pkg.dependencies;
const devDependencies = pkg.devDependencies;
</script>

<template>
  <section class="page-about">
    <AppHeader />
    <main>
      <h2>Sobre o projeto</h2>
      <br />
      <p>App Vue desenvolvido com Vue 3 com cobertura de testes unitários com Vitest</p>
      <p>Design responsivo e adaptativo com descrições aria label nos componentes e botões</p>
      <p>Animações na interface utilizando CSS e Transition do Vue</p>
      <p>A versão atual do projeto é <b>v{{ version }}</b></p>

      <br />

      <AppButton
        ariaLabel="Link para o repositório do projeto no Github"
        link="https://github.com/livresaber/contact-vue-book"
        target="_blank"
        color="primary"
        >
        <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" fill="#fff">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        Link do repositório
      </AppButton>

      <br />

      <h2>Sobre o desenvolvedor</h2>
      <br />
      <p>Lucas Ferreira de Lima é um Front-end que trabalha com Vue, React e Angular</p>
      <p>Especialista em criar soluções tecnológicas nos padrões Web</p>
      <p>E-mail para contato <b>lucasferreiralimax@gmail.com</b></p>

      <br />

      <AppButton
      ariaLabel="Link para o Portfolio do desenvolvedor"
      link="https://lucas-frontend.web.app"
      target="_blank"
        color="primary"
        >
        <svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" fill="#fff">
          <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        Github @lucasferreiralimax
      </AppButton>

      <section class="techs">
        <div>
          <h3>Tecnologias</h3>
          <br />
          <ul>
            <li v-for="(version, name) in dependencies" :key="name">
              <b>{{ name }}</b> - versão {{ version.replace('^', '') }}
            </li>
          </ul>
        </div>
        <div>
          <h3>Dependências de desenvolvimento</h3>
          <ul>
            <li v-for="(version, name) in devDependencies" :key="name">
              <b>{{ name }}</b> - versão {{ version.replace('^', '') }}
            </li>
          </ul>
        </div>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped>
  .page-about {
    max-width: 50rem;
    margin: 0 auto;
    h2, h3 , p, li {
      padding: .2rem .5rem;
      border-radius: 10px;
      margin: .2rem;
      background: #fff;
      display: inline-block;
    }
    h2, h3 { margin-top: 1rem; }
    h2 {
      font-size: 1.5rem;
      &:first-of-type { margin-top: 0; }
    }
    h3 { font-size: 1.2rem; }
  }
  main { padding: .5rem 1rem 1rem; }
</style>
