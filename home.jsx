import { useEffect, useRef } from "react";

function MousePanel({ children, className = "" }) {
  const panelRef = useRef(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const move = (e) => {
      const rect = panel.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateY = ((x / rect.width) - 0.5) * 6;
      const rotateX = ((y / rect.height) - 0.5) * -6;

      panel.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-6px)
      `;
    };

    const leave = () => {
      panel.style.transform = `
        perspective(900px)
        rotateX(0deg)
        rotateY(0deg)
        translateY(0)
      `;
    };

    panel.addEventListener("mousemove", move);
    panel.addEventListener("mouseleave", leave);

    return () => {
      panel.removeEventListener("mousemove", move);
      panel.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={panelRef}
      className={`rw-panel ${className}`}
    >
      {children}
    </div>
  );
}

function SmallIcon({ children }) {
  return (
    <div className="rw-icon">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="rw-home">

      {/* BACKGROUND */}
      <div className="rw-background">
        <div className="rw-grid" />
        <div className="rw-glow rw-glow-one" />
        <div className="rw-glow rw-glow-two" />
      </div>

      {/* NAVBAR */}
      <header className="rw-navbar">

        <div className="rw-logo">
          <span>Ro</span>Wave
        </div>

        <nav>
          <a href="#features">Features</a>
          <a href="#sessions">Sessions</a>
          <a href="#organizations">Organizations</a>
          <a href="#pricing">Pricing</a>
          <a href="#support">Support</a>
        </nav>

        <button className="rw-signin">
          Sign In
        </button>

      </header>

      {/* HERO */}
      <section className="rw-hero">

        <div className="rw-badge">
          <span />
          The management hub built for Roblox communities
        </div>

        <h1>
          Everything your Roblox
          <br />
          organization needs.
        </h1>

        <p>
          Manage players, sessions, moderation, servers,
          ranks and your entire organization from one
          powerful dashboard.
        </p>

        <div className="rw-hero-buttons">
          <button className="rw-primary">
            Get Started →
          </button>

          <button className="rw-secondary">
            Explore RoWave
          </button>
        </div>

      </section>

      {/* FEATURES */}
      <section id="features" className="rw-features">

        <div className="rw-section-title">

          <span>ONE DASHBOARD</span>

          <h2>
            Run your organization
            <br />
            from one place.
          </h2>

          <p>
            RoWave connects your Roblox game, Discord community,
            staff team and sessions into one management system.
          </p>

        </div>

        <div className="rw-feature-grid">

          {/* SESSION */}
          <MousePanel className="rw-feature large">

            <div className="rw-feature-top">

              <div>
                <SmallIcon>◈</SmallIcon>

                <h3>Sessions</h3>

                <p>
                  Create and manage sessions, attendees,
                  phases, ranks and promotions in real time.
                </p>
              </div>

              <span className="rw-live">
                ● LIVE
              </span>

            </div>

            <div className="rw-preview">

              <div className="rw-preview-header">

                <div>
                  <strong>Staff Training</strong>
                  <small>Hosted by @RoWaveAdmin</small>
                </div>

                <span className="rw-phase">
                  Phase 2
                </span>

              </div>

              {[
                "coolbuilder22",
                "PlayerOne",
                "RobloxAdmin"
              ].map((name, i) => (

                <div className="rw-player" key={name}>

                  <div className="rw-player-left">

                    <div className="rw-avatar" />

                    <div>
                      <strong>{name}</strong>
                      <small>Attendee</small>
                    </div>

                  </div>

                  <div className="rw-checks">
                    <i className="checked" />
                    <i className="checked" />
                    <i className={i === 0 ? "checked" : ""} />
                  </div>

                </div>

              ))}

              <button className="rw-join">
                Join Server →
              </button>

            </div>

          </MousePanel>

          {/* MOD CALLS */}
          <MousePanel className="rw-feature large">

            <SmallIcon>✦</SmallIcon>

            <h3>Mod Calls</h3>

            <p>
              Staff can receive, claim and resolve moderation
              calls without leaving the dashboard.
            </p>

            <div className="rw-preview">

              <div className="rw-call-user">

                <div className="rw-avatar blue" />

                <div>
                  <strong>coolbuilder22</strong>
                  <small>Called for a moderator</small>
                </div>

                <span className="rw-new">
                  New
                </span>

              </div>

              <div className="rw-reason">

                <small>REASON</small>

                <p>
                  Player is breaking the server rules.
                </p>

              </div>

              <div className="rw-call-buttons">

                <button>Claim</button>
                <button>Dismiss</button>
                <button>Join Server</button>

              </div>

            </div>

          </MousePanel>

          {/* SERVERS */}
          <MousePanel className="rw-feature">

            <SmallIcon>⌁</SmallIcon>

            <h3>Live Servers</h3>

            <p>
              See your active Roblox servers and join them
              directly from RoWave.
            </p>

            <div className="rw-server-list">

              {[
                ["Server #4812", "17 / 30", "62ms"],
                ["Server #2941", "23 / 30", "71ms"],
                ["Server #7305", "8 / 30", "48ms"]
              ].map(([server, players, ping]) => (

                <div className="rw-server" key={server}>

                  <div className="rw-server-name">

                    <span className="online" />

                    <div>
                      <strong>{server}</strong>
                      <small>
                        Stateview Correctional Facility
                      </small>
                    </div>

                  </div>

                  <div className="rw-server-stats">
                    <strong>{players}</strong>
                    <small>{ping}</small>
                  </div>

                </div>

              ))}

            </div>

          </MousePanel>

          {/* ORGANIZATION */}
          <MousePanel
            className="rw-feature"
            id="organizations"
          >

            <SmallIcon>＋</SmallIcon>

            <h3>Create an Organization</h3>

            <p>
              Connect your Roblox community and build your
              management workspace in seconds.
            </p>

            <div className="rw-org-preview">

              <label>
                ROBLOX COMMUNITY
              </label>

              <div className="rw-input-row">

                <div className="rw-input">
                  Paste community URL...
                </div>

                <button>
                  Connect
                </button>

              </div>

              <small className="rw-verified">
                ● Ownership will be verified automatically
              </small>

            </div>

          </MousePanel>

        </div>

      </section>

      {/* CTA */}
      <section className="rw-cta">

        <span>READY?</span>

        <h2>
          Your organization.
          <br />
          One powerful hub.
        </h2>

        <p>
          Connect your Roblox community and start managing
          everything through RoWave.
        </p>

        <button className="rw-primary">
          Create Organization →
        </button>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="rw-logo">
          <span>Ro</span>Wave
        </div>

        <small>
          © 2026 RoWave. Built for Roblox communities.
        </small>

      </footer>

    </div>
  );
}
