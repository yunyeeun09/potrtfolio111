import './App.css'

const interests = [
  { number: '01', title: '친구와 게임하기', description: '친구들과 함께 게임하는 시간을 좋아해요.', symbol: '↗' },
  { number: '02', title: '음악 듣기', description: '좋아하는 음악을 들으며 즐거운 시간을 보내요.', symbol: '♫' },
]

function App() {
  return (
    <>
      <a className="skip-link" href="#main">본문 바로가기</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label="my portfolio 홈">
            my portfolio<span>.</span>
          </a>
          <nav aria-label="페이지 메뉴">
            <a href="#interests">관심사</a>
            <a href="#about">나의 이야기</a>
            <a href="#activities">활동</a>
            <a href="#goals">목표</a>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero page-width" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> MY LITTLE INTRODUCTION</p>
            <h1 id="hero-title">안녕하세요,<br /><span>예은</span>입니다.</h1>
            <p className="hero-lead">친구들과 게임을 즐기며,<br />꾸준히 배우고 성장하는 예은입니다.</p>
            <p className="hero-description">게임과 음악을 좋아하고, 코딩과 웹사이트 만들기를 배워 보고 싶어요.</p>
            <a className="button button-primary" href="#interests">저를 더 알아보기 <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="hello-card">
              <span className="hello-spark">✳</span>
              <span className="hello-label">HELLO, I'M</span>
              <strong>예은<span>.</span></strong>
              <span className="hello-caption">계속 배우고 성장하는 중</span>
            </div>
            <span className="art-note note-game">GAME <span>↗</span></span>
            <span className="art-note note-music">MUSIC <span>♫</span></span>
          </div>
        </section>

        <section className="content-section interests-section" id="interests" aria-labelledby="interests-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">01 / THINGS I LIKE</p>
              <h2 id="interests-title">좋아하는 것들<span>.</span></h2>
              <p>제가 즐거워하는 관심사와 취미를 소개해요.</p>
            </div>
            <div className="interest-grid">
              {interests.map((interest) => (
                <article className="interest-card" key={interest.number}>
                  <span className="card-number">{interest.number}</span>
                  <span className="interest-symbol" aria-hidden="true">{interest.symbol}</span>
                  <h3>{interest.title}</h3>
                  <p>{interest.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section about-section" id="about" aria-labelledby="about-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">02 / ABOUT ME</p>
              <h2 id="about-title">꾸준히 노력하고<br />새로운 것을 배우고 싶어요<span>.</span></h2>
            </div>
            <div className="about-grid">
              <article className="about-card strength-card">
                <span className="card-kicker">MY STRENGTH</span>
                <span className="about-icon" aria-hidden="true">↗</span>
                <h3>꾸준히 노력해요</h3>
                <p>제가 잘하는 점은 꾸준히 노력하는 거예요.</p>
              </article>
              <article className="about-card learning-card">
                <span className="card-kicker">WHAT I'M LEARNING</span>
                <span className="about-icon" aria-hidden="true">&lt;/&gt;</span>
                <h3>코딩과 웹사이트 만들기</h3>
                <p>코딩을 배우고 나만의 웹사이트를 만들어 보고 싶어요.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="content-section activities-section" id="activities" aria-labelledby="activities-title">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow">03 / THINGS I'VE DONE</p>
              <h2 id="activities-title">해본 활동과 작품<span>.</span></h2>
              <p>참여했던 활동을 소개하고, 작품은 나중에 더할 수 있어요.</p>
            </div>
            <div className="activity-grid">
              <article className="activity-card">
                <span className="activity-icon" aria-hidden="true">✳</span>
                <div>
                  <span className="card-kicker">SCHOOL</span>
                  <h3>학교 행사 참여</h3>
                  <p>학교 행사에 참여한 경험이 있어요.</p>
                </div>
              </article>
              <div className="work-placeholder" aria-label="나중에 작품이나 사진을 추가할 자리">
                <span className="placeholder-plus" aria-hidden="true">+</span>
                <p>나중에 작품이나 사진을 추가해 보세요.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="goal-section" id="goals" aria-labelledby="goal-title">
          <div className="page-width goal-inner">
            <div>
              <p className="eyebrow">04 / MY NEXT GOAL</p>
              <h2 id="goal-title">다음 목표는<br />나만의 게임 만들기<span>.</span></h2>
              <p>코딩을 배우며 직접 게임을 만들어 보고 싶어요.</p>
            </div>
            <div className="goal-mark" aria-hidden="true">
              <span>KEEP</span>
              <strong>GOING</strong>
              <span className="goal-star">✳</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-width">
        <a className="wordmark" href="#home">my portfolio<span>.</span></a>
        <p>예은의 이야기는 계속됩니다.</p>
        <a className="back-top" href="#home">맨 위로 <span aria-hidden="true">↑</span></a>
      </footer>
    </>
  )
}

export default App
