import Link from "next/link";
import HeroWall from "@/components/HeroWall";
import Footer from "@/components/Footer";
import ClientsMarquee from "@/components/ClientsMarquee";
import CountUp from "@/components/CountUp";
import { SERVICES } from "@/lib/data";


export default function HomePage() {
  return (
    <>
      <section className="hero slideframe" id="top">
        <HeroWall />
        <div className="glass">
          <div className="bname caps">AJ Power Solutions</div>
          <h1 className="caps">Empowering India&rsquo;s Infrastructure with Specialized HT &amp; LT Electrification</h1>
          <p style={{ marginTop: 20 }}>
            Specialized Electrical Contractors and Engineers — delivering design, execution, testing and 24/7
            maintenance across IT parks, data centres, industries and hospitals.
          </p>
          <div className="acts">
            <Link className="btn btn-g" href="/services">Explore Services</Link>
            <Link className="btn btn-w" href="/contact">Get in Touch</Link>
          </div>
          <div className="soc">
            <a href="https://www.linkedin.com/in/aj-power-solutions-a887b316b/" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
            <a href="mailto:hyd@ajpowersolutions.com" aria-label="Email">✉</a>
          </div>
        </div>
      </section>
            

      <section className="pinsec">
        <div className="pinsec-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/pinsec-bg.jpg" alt="Transmission towers against a bright blue sky" />
        </div>

        <div className="pinsec-content" id="clients">
          <div className="statbar rv" role="group" aria-label="Company statistics">
            <div className="s"><div className="n"><CountUp to={13} /><span className="u">M+</span></div><div className="l">Sq Ft Executed</div></div>
            <div className="s"><div className="n"><CountUp to={25} /><span className="u">+</span></div><div className="l">Marquee Clients</div></div>
            <div className="s"><div className="n"><CountUp to={250} /><span className="u">+</span></div><div className="l">Projects Delivered</div></div>
            <div className="s"><div className="n"><CountUp to={100} /><span className="u">%</span></div><div className="l">Satisfaction Focus</div></div>
          </div>

          <div className="glass rv" style={{ maxWidth: 820, padding: "24px 36px", marginTop: 28 }}>
            <div className="kicker">Trusted by industry leaders</div>
            <h2 className="caps">Delivering excellence <span style={{ color: "var(--green-l)" }}>nationwide.</span></h2>
            <div className="rule" style={{ margin: "12px auto 0" }}></div>
          </div>

          <div className="rv" style={{ marginTop: 28 }}>
            <ClientsMarquee />
          </div>
        </div>

        <div className="pinsec-content" id="why">
          <div className="glass rv" style={{ maxWidth: 860, padding: "26px 36px" }}>
            <div className="kicker">Why Choose Us</div>
            <h2 className="caps">Experience Excellence with <span style={{ color: "var(--green-l)" }}>AJ Power Solutions</span></h2>
            <div className="rule" style={{ margin: "12px auto 0" }}></div>
          </div>
          <div className="cards">
            <div className="whycard rv">
              <span className="num">WHY US · 01</span>
              <div className="ic" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></svg>
              </div>
              <h3>Quality Excellence</h3>
              <p>In-house design and engineering with value engineering from concept to statutory approval, ensuring superior quality on every project.</p>
            </div>
            <div className="whycard rv">
              <span className="num">WHY US · 02</span>
              <div className="ic" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="4" /><path d="M1 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" /><path d="M17 3.5a4 4 0 0 1 0 7.5" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /></svg>
              </div>
              <h3>Expert Leadership</h3>
              <p>Directors with two decades of experience in HT &amp; LT contracting, collaborating with architects, clients, industry leaders, JLL, CBRE, Savills, RSP and Semac.</p>
            </div>
            <div className="whycard rv">
              <span className="num">WHY US · 03</span>
              <div className="ic" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></svg>
              </div>
              <h3>Comprehensive Service</h3>
              <p>Round-the-clock service department, dedicated EHS and QC teams, testing, commissioning and preventive maintenance.</p>
            </div>
          </div>
        </div>

        <div className="pinsec-content" id="services">
          <div className="glass rv" style={{ maxWidth: 800, padding: "24px 36px" }}>
            <div className="kicker">Services</div>
            <h2 className="caps">Our <span style={{ color: "var(--green-l)" }}>Services</span></h2>
          </div>
          <div className="svgrid">
            {SERVICES.map((s) => (
              <Link className="svc rv" href={`/services/${s.id}`} aria-label={`${s.t} details`} key={s.id}>
                <span className="bar"></span>
                <div className="ph">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.t} loading="lazy" />
                  <span className="no">SERVICE · {s.no}</span>
                </div>
                <div className="bd">
                  <h3>{s.t}</h3>
                  <p>{s.s}</p>
                  <span className="more">View details <span aria-hidden="true">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band tint slideframe" id="cta">
        <div className="bg">
          <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85" alt="Earth city lights at night" />
        </div>
        <div className="glass rv">
          <h2 className="caps">Transform Your Electrical Infrastructure</h2>
          <div className="rule"></div>
          <p>Partner with us for HT &amp; LT electrification that adds economical value to your business while meeting the highest safety and quality standards.</p>
          <div className="acts"><Link className="btn btn-g" href="/contact">Start Your Project</Link></div>
        </div>
         <Footer />
      </section>
    </>
  );
}
   