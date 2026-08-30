import { useEffect, useRef } from "react";

function HoverPanel({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    function handleMouseMove(event) {
      const rect = element.getBoundingClientRect();

      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      const percentX = mouseX / rect.width - 0.5;
      const percentY = mouseY / rect.height - 0.5;

      const rotateX = percentY * -5;
      const rotateY = percentX * 5;

      element.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-5px)
      `;
    }

    function handleMouseLeave() {
      element.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0px)
      `;
    }

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={ref} className={`rw-panel ${className}`}>
      {children}
    </div>
  );
}

function Icon({ children }) {
  return <div className="rw-icon">{children}</div>;
}

function Avatar() {
  return <div className="rw-avatar" />;
}

export default function Home() {
  return (
    <div className="rw-home">

      {/* Animated background */}
      <div className="rw-background">
        <div className="rw-dots" />
        <div className="rw-grid" />

        <div className="rw-glow rw-glow-1" />
        <div className="rw-glow rw-glow-2" />
      </div>

      {/* Navigation */}
      <header className="rw-nav">

        <div className="rw-logo">
          <span>Ro</span>Wave
        </div>

        <nav className="rw-nav-links">
          <a href="#features">Features</a>
          <a href="#sessions">Sessions</a>
          <a href="#servers">Servers</a>
          <a href="#organizations">Organizations</a>
        </nav>

        <button className="rw-nav-button">
          Sign In
        </button>

      </header>

      {/* Hero */}
      <section className="rw-hero">

        <div className="rw-pill">
          <span className="rw-status-dot" />
          Built for Roblox communities
        </div>

        <h1>
          Your community.
          <br />
          <span>One powerful hub.</span>
        </h1>

        <p>
          RoWave brings your Roblox organization, staff,
          sessions, servers and moderation together in one
          beautifully designed management platform.
        </p>

        <div className="rw-hero-buttons">

          <button className="rw-primary-button">
            Get Started
            <span>→</span>
          </button>

          <button className="rw-secondary-button">
            Explore RoWave
          </button>

        </div>

      </section>

      {/* Feature heading */}
      <section id="features" className="rw-features">

        <div className="rw-section-heading">

          <span>POWERFUL MANAGEMENT</span>

          <h2>
            Everything you need.
            <br />
            Nothing you don't.
          </h2>

          <p>
            A single place for your Roblox organization
            to manage everything that matters.
          </p>

        </div>

        <div className="rw-cards">

          {/* SESSION CARD */}
          <HoverPanel
            className="rw-card rw-card-large"
          >

            <div className="rw-card-heading">

              <div>
                <Icon>◈</Icon>

                <h3>Sessions</h3>

                <p>
                  Host and manage your sessions with
                  powerful real-time tools.
                </p>
              </div>

              <div className="rw-live">
                <span />
                LIVE
              </div>

            </div>

            <div className="rw-session-preview">

              <div className="rw-preview-top">

                <div>
                  <strong>Staff Training</strong>
                  <small>Hosted by @RoWaveAdmin</small>
                </div>

                <div className="rw-phase">
                  PHASE 2
                </div>

              </div>

              <div className="rw-progress">

                <div className="rw-progress-item active">
                  <span>✓</span>
                  Phase 1
                </div>

                <div className="rw-line active" />

                <div className="rw-progress-item active">
                  <span>✓</span>
                  Phase 2
                </div>

                <div className="rw-line" />

                <div className="rw-progress-item">
                  <span>3</span>
                  Phase 3
                </div>

              </div>

              {[
                ["coolbuilder22", "Host"],
                ["PlayerOne", "Attendee"],
                ["RobloxAdmin", "Attendee"],
              ].map(([name, role]) => (

                <div className="rw-session-player" key={name}>

                  <div className="rw-player-info">

                    <Avatar />

                    <div>
                      <strong>{name}</strong>
                      <small>{role}</small>
                    </div>

                  </div>

                  <div className="rw-phase-checks">
                    <i className="active" />
                    <i className="active" />
                    <i />
                  </div>

                </div>

              ))}

              <button className="rw-join-button">
                Join Server
                <span>→</span>
              </button>

            </div>

          </HoverPanel>

          {/* MOD CALL CARD */}
          <HoverPanel
            className="rw-card rw-card-large"
          >

            <Icon>✦</Icon>

            <h3>Mod Calls</h3>

            <p>
              Let players contact your staff team
              instantly when they need help.
            </p>

            <div className="rw-mod-preview">

              <div className="rw-mod-header">

                <div className="rw-player-info">

                  <Avatar />

                  <div>
                    <strong>coolbuilder22</strong>
                    <small>@coolbuilder22</small>
                  </div>

                </div>

                <span className="rw-new-call">
                  NEW
                </span>

              </div>

              <div className="rw-mod-details">

                <span>MOD CALL REASON</span>

                <p>
                  Player is breaking the server rules.
                </p>

              </div>

              <div className="rw-mod-actions">

                <button className="blue">
                  Claim
                </button>

                <button>
                  Dismiss
                </button>

                <button>
                  Join Server
                </button>

              </div>

            </div>

          </HoverPanel>

          {/* SERVER CARD */}
          <HoverPanel
            id="servers"
            className="rw-card"
          >

            <Icon>⌁</Icon>

            <h3>Live Servers</h3>

            <p>
              View active servers, players and
              connection information.
            </p>

            <div className="rw-server-preview">

              {[
                ["Server #4812", "17 / 30", "62ms"],
                ["Server #2941", "23 / 30", "71ms"],
                ["Server #7305", "8 / 30", "48ms"],
              ].map(([server, players, ping]) => (

                <div className="rw-server" key={server}>

                  <div className="rw-server-left">

                    <span className="rw-online" />

                    <div>
                      <strong>{server}</strong>
                      <small>
                        Stateview Correctional Facility
                      </small>
                    </div>

                  </div>

                  <div className="rw-server-right">
                    <strong>{players}</strong>
                    <small>{ping}</small>
                  </div>

                </div>

              ))}

            </div>

          </HoverPanel>

          {/* ORGANIZATION CARD */}
          <HoverPanel
            id="organizations"
            className="rw-card"
          >

            <Icon>＋</Icon>

            <h3>Create an Organization</h3>

            <p>
              Connect your Roblox community and
              create your RoWave organization.
            </p>

            <div className="rw-org-preview">

              <label>
                ROBLOX COMMUNITY
              </label>

              <div className="rw-org-input">

                <span>
                  Paste community URL...
                </span>

                <button>
                  Connect
                </button>

              </div>

              <div className="rw-verification">
                <span>✓</span>
                Ownership automatically verified
              </div>

            </div>

          </HoverPanel>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="rw-bottom">

        <span>START TODAY</span>

        <h2>
          Ready to build
          <br />
          something better?
        </h2>

        <p>
          Bring your Roblox organization to RoWave.
        </p>

        <button className="rw-primary-button">
          Create Organization
          <span>→</span>
        </button>

      </section>

      {/* Footer */}
      <footer className="rw-footer">

        <div className="rw-logo">
          <span>Ro</span>Wave
        </div>

        <div>
          © 2026 RoWave
        </div>

      </footer>

    </div>
  );
}
