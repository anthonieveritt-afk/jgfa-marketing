"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const sessions = [
  {
    day: "Monday",
    location: "Mead Primary",
    tag: "After School Football Club",
    time: "3:10 – 4:10pm",
    venue: "Mead Primary School",
    address: "Amersham Road, Romford, RM3 9JD",
    maps: "https://maps.google.com/?q=Amersham+Road,+Romford,+RM3+9JD",
  },
  {
    day: "Monday",
    location: "Collier Row",
    tag: "",
    time: "5:00 – 6:00pm",
    venue: "Forest Row Centre",
    address: "Lodge Lane, Collier Row, Romford, Essex, RM5 2LD",
    maps: "https://maps.google.com/?q=Forest+Row+Centre,+Lodge+Lane,+Collier+Row,+Romford,+RM5+2LD",
  },
  {
    day: "Tuesday",
    location: "Harold Hill",
    tag: "",
    time: "5:00 – 6:00pm",
    venue: "Drapers Academy",
    address: "Settle Road, Harold Hill, Romford, RM3 9XR",
    maps: "https://maps.google.com/?q=Drapers+Academy,+Settle+Road,+Harold+Hill,+Romford,+RM3+9XR",
  },
  {
    day: "Thursday",
    location: "Dagenham",
    tag: "",
    time: "5:00 – 6:00pm",
    venue: "Castle Green Leisure Centre",
    address: "Gale Street, Dagenham, Essex, RM9 4UN",
    maps: "https://maps.google.com/?q=Castle+Green+Leisure+Centre,+Gale+Street,+Dagenham,+RM9+4UN",
  },
];

const dayColours: Record<string, string> = {
  Monday: "bg-blue-700",
  Tuesday: "bg-blue-800",
  Thursday: "bg-gray-900",
};

export default function LocationsPage() {
  return (
    <>
      <Nav />
      <main className="pt-20 bg-white min-h-screen">
        {/* Header */}
        <section className="bg-gray-900 py-20 text-white text-center">
          <p className="text-blue-400 text-sm font-bold uppercase tracking-widest mb-3">
            Where to Find Us
          </p>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-4">
            Sessions &amp; Locations
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Weekly after-school sessions across Essex and East London. All
            sessions run 5–6pm and are open to ages 5–11.
          </p>
        </section>

        {/* Session cards */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="space-y-6">
            {sessions.map((s) => (
              <div
                key={s.day}
                className="flex flex-col sm:flex-row rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Day badge */}
                <div
                  className={`${dayColours[s.day]} text-white flex flex-col items-center justify-center px-8 py-6 sm:w-36 shrink-0`}
                >
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70">
                    Day
                  </span>
                  <span className="text-2xl font-black mt-1">{s.day}</span>
                </div>

                {/* Details */}
                <div className="flex-1 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-xl font-black text-gray-900">
                        {s.location}
                      </span>
                      {s.tag && (
                        <span className="bg-gray-100 text-gray-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                          {s.tag}
                        </span>
                      )}
                      <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2 py-0.5 rounded-full">
                        {s.time}
                      </span>
                    </div>
                    <p className="text-gray-600 font-medium text-sm">
                      {s.venue}
                    </p>
                    <p className="text-gray-400 text-sm">{s.address}</p>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <a
                      href={s.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-gray-500 border border-gray-200 px-4 py-2 rounded-full hover:border-blue-700 hover:text-blue-700 transition-colors"
                    >
                      📍 Map
                    </a>
                    <a
                      href="/#contact"
                      className="text-xs font-semibold bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition-colors"
                    >
                      Book Trial — £10
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm mb-4">
              Not sure which session is closest? Drop us a message.
            </p>
            <a
              href="mailto:jack.jgfa@outlook.com"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 text-sm font-semibold px-6 py-3 rounded-full hover:border-blue-700 hover:text-blue-700 transition-colors"
            >
              jack.jgfa@outlook.com
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
