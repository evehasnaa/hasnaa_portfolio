import { CERTIFICATES } from "../data/certificates";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">

      <div
        className="font-mono tracking-[0.35em] uppercase text-sm mb-3"
        style={{ color: "#B94A3B" }}
      >
        Certifications
      </div>

      <h2
        className="text-4xl font-extrabold mb-12"
        style={{
          fontFamily: "'Syne',sans-serif",
          color: "#221419",
        }}
      >
        Professional Certifications
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {CERTIFICATES.map((cert) => (

          <a
            key={cert.id}
            href={cert.credential}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            style={{
              background: "#fffaf6",
              border: "1px solid #ead8ca",
            }}
          >

            {/* IMAGE */}

            <div className="relative overflow-hidden h-60">

              {cert.image ? (
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center transition duration-700 group-hover:scale-110"
                  style={{
                    background:
                      "linear-gradient(135deg,#F2B8C0 0%,#F0A24B 100%)",
                  }}
                >
                  <span
                    className="text-5xl font-extrabold"
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      color: "#221419",
                    }}
                  >
                    {cert.issuer.charAt(0)}
                  </span>
                </div>
              )}

              {/* Overlay */}

              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500"
                style={{
                  background: "rgba(34,20,25,.55)",
                }}
              >

                <span
                  className="px-5 py-3 rounded-full font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg,#B94A3B,#F0A24B)",
                    color: "#221419",
                  }}
                >
                  View Credential →
                </span>

              </div>

            </div>

            {/* CONTENT */}

            <div className="p-6">

              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{
                  background: "#F2B8C0",
                  color: "#221419",
                }}
              >
                {cert.category}
              </span>

              <h3
                className="text-xl font-bold mb-2"
                style={{
                  color: "#221419",
                }}
              >
                {cert.title}
              </h3>

              <p
                className="text-sm"
                style={{
                  color: "#666",
                }}
              >
                <strong>Issued by:</strong> {cert.issuer}
              </p>

              <p
                className="text-sm mt-2"
                style={{
                  color: "#666",
                }}
              >
                <strong>Date:</strong> {cert.date}
              </p>

            </div>

          </a>

        ))}

      </div>

    </section>
  );
}
