const navItems = [
  ['Início', '#inicio'],
  ['Sobre mim', '#sobre'],
  ['Competências', '#competencias'],
  ['Experiência', '#experiencia'],
  ['Formação', '#formacao'],
  ['Contato', '#contato'],
];

const areas = [
  {
    number: '01',
    title: 'Tecnologia e dados',
    text: 'Engenharia de Software, suporte, sistemas, organização de dados, relatórios, Power BI e ferramentas de Inteligência Artificial.',
  },
  {
    number: '02',
    title: 'Finanças e processos',
    text: 'Controle financeiro, fluxo de caixa, organização de informações, apoio operacional e melhoria de processos.',
  },
  {
    number: '03',
    title: 'Operações e comunicação',
    text: 'Logística, controle de materiais, vendas, atendimento, marketing digital e produção de conteúdo.',
  },
];

const skills = [
  {
    title: 'Finanças',
    items: ['Organização e controle financeiro', 'Fluxo de caixa', 'Apoio a rotinas financeiras'],
  },
  {
    title: 'Dados e ferramentas',
    items: ['Excel', 'Organização de dados', 'Controles e relatórios', 'Fórmulas básicas', 'Power BI', 'Análise de informações'],
  },
  {
    title: 'Tecnologia e processos',
    items: ['Suporte operacional', 'Sistemas e processos', 'Elaboração de relatórios', 'Ferramentas de Inteligência Artificial', 'Produtividade e automação de tarefas'],
  },
  {
    title: 'Marketing e conteúdo',
    items: ['Tráfego orgânico e pago', 'Divulgação de produtos e serviços', 'Apoio à captação de clientes', 'Edição de vídeos', 'Edição de imagens'],
  },
  {
    title: 'Operações',
    items: ['Controle de estoques', 'Controle de materiais', 'Apoio a processos logísticos', 'Vendas e atendimento ao cliente'],
  },
];

const softSkills = [
  'Disciplina',
  'Responsabilidade',
  'Organização',
  'Trabalho em equipe',
  'Cumprimento de prazos e procedimentos',
  'Atuação sob pressão',
];

const education = [
  {
    year: '2024 — agora',
    title: 'Bacharelado em Engenharia de Software',
    place: 'Centro Universitário Internacional',
    status: 'Em andamento',
  },
  {
    year: '2023',
    title: 'Técnico em Finanças',
    place: 'Formação técnica',
    status: 'Concluído',
  },
  {
    year: '2023',
    title: 'Ensino Médio',
    place: 'ITB Munir José',
    status: 'Concluído',
  },
];

const courses = [
  { year: '2026', title: 'Power BI', place: 'Fundação Bradesco' },
  { year: '2024', title: 'Microsoft Excel 2016 — Básico', place: 'Curso complementar' },
];

function Arrow() {
  return <span aria-hidden="true">↘</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Gustavo Souza — início">
          <span className="brand-name">Gustavo Souza</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href="/assets/curriculo-gustavo-souza.pdf" download>
          Baixar currículo
        </a>
        <details className="mobile-nav">
          <summary aria-label="Abrir menu"><span /><span /></summary>
          <nav aria-label="Navegação para celular">
            {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            <a href="/assets/curriculo-gustavo-souza.pdf" download>Baixar currículo</a>
          </nav>
        </details>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Disponível para oportunidades de entrada</p>
          <h1 id="hero-title">Olá, sou<br /><strong>Gustavo Souza.</strong></h1>
          <p className="role">Engenharia de Software <i /> Finanças <i /> Dados e Processos</p>
          <p className="intro">
            Técnico em Finanças e graduando em Engenharia de Software, com interesse em
            transformar organização, dados e tecnologia em soluções práticas para empresas e pessoas.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#sobre">Conheça minha trajetória <Arrow /></a>
            <a className="button secondary" href="mailto:Gustavo.souzaproh@gmail.com">Entrar em contato</a>
            <a className="text-link" href="/assets/curriculo-gustavo-souza.pdf" download>Baixar currículo <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-meta" aria-label="Informações profissionais">
            <div><span>Base</span><strong>Jandira — SP</strong></div>
            <div><span>Foco</span><strong>Estágio e posições de entrada</strong></div>
          </div>
        </div>

        <div className="portrait-column">
          <div className="portrait-frame">
            <img src="/assets/gustavo-souza.jpg" alt="Retrato profissional de Gustavo Souza" />
            <span className="portrait-line" aria-hidden="true" />
            <span className="portrait-index" aria-hidden="true">01</span>
          </div>
          <div className="portrait-note">
            <span className="note-rule" />
            <p>Disciplina para aprender.<br />Organização para entregar.</p>
          </div>
        </div>
      </section>

      <section className="direction-strip" aria-label="Áreas profissionais">
        <p>Engenharia de Software</p><span>+</span><p>Finanças</p><span>+</span><p>Dados e Processos</p>
      </section>

      <section className="section about reveal" id="sobre" aria-labelledby="about-title">
        <div className="section-heading">
          <p className="section-kicker"><span>01</span> Sobre mim</p>
          <h2 id="about-title">Um perfil construído<br />entre <em>método</em> e movimento.</h2>
        </div>
        <div className="about-grid">
          <div className="about-intro">
            <span className="big-index" aria-hidden="true">GS</span>
            <p>
              Técnico em Finanças e graduando em Engenharia de Software, reúno conhecimentos
              das áreas financeira, administrativa e de tecnologia.
            </p>
          </div>
          <div className="about-body">
            <p>
              Tenho vivência com controles financeiros, fluxo de caixa, organização de estoques,
              logística, análise de dados e elaboração de relatórios. Minha trajetória também inclui
              vendas, atendimento ao cliente, edição de vídeos e imagens, tráfego orgânico e pago,
              além do uso de ferramentas de Inteligência Artificial, Excel e Power BI.
            </p>
            <p>
              A experiência no Exército Brasileiro fortaleceu minha disciplina, responsabilidade,
              capacidade de trabalhar em equipe, seguir procedimentos e atuar sob pressão.
            </p>
            <div className="objective-card">
              <span>Objetivo profissional</span>
              <p>
                Conquistar uma oportunidade de estágio ou posição de entrada nas áreas Administrativa,
                Financeira ou de Tecnologia da Informação — especialmente em suporte, dados, sistemas e processos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section areas-section" aria-labelledby="areas-title">
        <div className="section-heading compact reveal">
          <p className="section-kicker"><span>02</span> Áreas de atuação</p>
          <h2 id="areas-title">Conhecimentos que se<br /><em>complementam.</em></h2>
        </div>
        <div className="areas-grid">
          {areas.map((area) => (
            <article className="area-card reveal" key={area.number}>
              <span className="card-number">{area.number}</span>
              <div className="area-symbol" aria-hidden="true"><span /></div>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experiencia" aria-labelledby="experience-title">
        <div className="section-heading compact reveal">
          <p className="section-kicker"><span>03</span> Experiência</p>
          <h2 id="experience-title">Responsabilidade que<br />se prova na <em>prática.</em></h2>
        </div>
        <div className="timeline reveal">
          <div className="timeline-period">
            <span>2025</span><i /><span>2026</span>
          </div>
          <article className="timeline-content">
            <div className="timeline-title">
              <div>
                <p>Exército Brasileiro</p>
                <h3>Soldado <span>/ Serviço Militar</span></h3>
              </div>
              <span className="merit">Honra ao Mérito</span>
            </div>
            <ul>
              <li>Atuação em um ambiente de alta disciplina, seguindo normas, procedimentos e prazos.</li>
              <li>Apoio à organização e ao controle de materiais e rotinas logísticas.</li>
              <li>Trabalho em equipe e execução de atividades sob pressão.</li>
              <li>Licenciamento com Honra ao Mérito, concedido em reconhecimento à disciplina, ao desempenho e à conduta exemplar.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section skills-section" id="competencias" aria-labelledby="skills-title">
        <div className="section-heading compact reveal">
          <p className="section-kicker"><span>04</span> Competências</p>
          <h2 id="skills-title">Ferramentas para<br /><em>organizar e evoluir.</em></h2>
        </div>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article className={`skill-card skill-card-${index + 1} reveal`} key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
        <div className="soft-skills reveal">
          <div>
            <span>Forma de trabalhar</span>
            <h3>Competências comportamentais</h3>
          </div>
          <ul>{softSkills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </div>
      </section>

      <section className="section education-section" id="formacao" aria-labelledby="education-title">
        <div className="section-heading compact reveal">
          <p className="section-kicker"><span>05</span> Formação</p>
          <h2 id="education-title">Base técnica.<br /><em>Aprendizado contínuo.</em></h2>
        </div>
        <div className="education-layout">
          <div className="education-list">
            {education.map((item) => (
              <article className="education-item reveal" key={item.title}>
                <span className="education-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </div>
                <span className="education-status">{item.status}</span>
              </article>
            ))}
          </div>
          <aside className="courses reveal" aria-labelledby="courses-title">
            <p className="side-label">Cursos complementares</p>
            <h3 id="courses-title">Novas ferramentas,<br />aplicação prática.</h3>
            {courses.map((course) => (
              <article key={course.title}>
                <span>{course.year}</span>
                <div><strong>{course.title}</strong><p>{course.place}</p></div>
              </article>
            ))}
          </aside>
        </div>
      </section>

      <section className="contact-section" id="contato" aria-labelledby="contact-title">
        <div className="contact-copy reveal">
          <p className="section-kicker light"><span>06</span> Contato</p>
          <h2 id="contact-title">Vamos conversar<br />sobre a próxima <em>oportunidade?</em></h2>
          <p>
            Estou em busca de estágio ou posições de entrada onde eu possa contribuir,
            aprender e crescer com o time.
          </p>
          <div className="contact-actions">
            <a className="button light-button" href="mailto:Gustavo.souzaproh@gmail.com">Enviar e-mail <Arrow /></a>
            <a className="button outline-button" href="/assets/curriculo-gustavo-souza.pdf" download>Baixar currículo <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <address className="contact-details reveal">
          <div><span>Localização</span><strong>Jandira — SP</strong></div>
          <div><span>E-mail</span><a href="mailto:Gustavo.souzaproh@gmail.com">Gustavo.souzaproh@gmail.com</a></div>
          <div><span>Telefone</span><a href="tel:+5511960297942">(11) 96029-7942</a></div>
        </address>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><span>Gustavo Souza</span></a>
        <p>Engenharia de Software · Finanças · Dados e Processos</p>
        <a href="#inicio">Voltar ao início <span aria-hidden="true">↑</span></a>
      </footer>
    </main>
  );
}
