import { CERTIFICATES } from "../data/certificates";

export default function Certifications() {
  return (
    <section id="certifications" className="max-w-6xl mx-auto px-6 py-20">

      <div
        className="font-mono tracking-[0.35em] uppercase text-sm mb-3"
        style={{ color: "#F97316" }}
      >
        Certifications
      </div>

      <h2
        className="text-4xl font-extrabold mb-12"
        style={{
          fontFamily: "'Syne',sans-serif",
          color: "#0F172A",
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
            className="group rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-3"
            style={{
              background: "#FFFFFF",
              border: "1.5px solid #CBD5E1",
              boxShadow: "0 4px 14px rgba(15,23,42,.06)",
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
                      "linear-gradient(135deg,#2563EB 0%,#06B6D4 100%)",
                  }}
                >
                  <span
                    className="text-5xl font-extrabold"
                    style={{
                      fontFamily: "'Syne',sans-serif",
                      color: "#FFFFFF",
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
                  background: "rgba(15,23,42,.55)",
                }}
              >

                <span
                  className="px-5 py-3 rounded-full font-semibold"
                  style={{
                    background:
                      "linear-gradient(90deg,#2563EB,#06B6D4)",
                    color: "#FFFFFF",
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
                  background: "#E5ECF5",
                  color: "#2563EB",
                }}
              >
                {cert.category}
              </span>

              <h3
                className="text-xl font-bold mb-2"
                style={{
                  color: "#0F172A",
                }}
              >
                {cert.title}
              </h3>

              <p
                className="text-sm"
                style={{
                  color: "#475569",
                }}
              >
                <strong>Issued by:</strong> {cert.issuer}
              </p>

              <p
                className="text-sm mt-2"
                style={{
                  color: "#475569",
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
